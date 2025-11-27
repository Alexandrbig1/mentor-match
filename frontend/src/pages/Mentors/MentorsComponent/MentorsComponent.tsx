import { useEffect, useState } from "react";
import { getAllMentors } from "../../../services/getAllMentors";
import MentorsItem from "./MentorsItem";
import ErrorMessage from "../../../components/UI/ErrorMessage/ErrorMessage";
import LoadingSmall from "../../../components/UI/LoadingSmall/LoadingSmall";
import {
  MentorListLoadingItem,
  MentorsComponentWrapper,
  MentorsLoadMoreButton,
  MentorsMenu,
} from "./MentorsComponent.styled";

/* reuse Mentor type from MentorsItem file shape (kept local here to avoid circular imports) */
type SocialLink = { platform: string; url: string };
type Mentor = {
  _id?: string;
  avatar?: string | null;
  name: string;
  position?: string | null;
  location?: string | null;
  phone?: string | null;
  email?: string | null;
  description?: string | null;
  coreValues: string[];
  technologies: string[];
  socialLinks: SocialLink[];
};

type GetMentorsResponse = {
  data: Mentor[];
  totalPages?: number;
  total?: number;
};

export default function MentorsComponent({
  filters,
}: {
  filters?: { name?: string; tech?: string[] };
}) {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(20);
  const [totalPage, setTotalPage] = useState<number>(0);

  // reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [filters?.name, filters?.tech?.length]);

  useEffect(() => {
    let mounted = true;

    const fetchMentors = async () => {
      try {
        if (page === 1) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }

        type GetMentorsParams = {
          page: number;
          limit: number;
          name?: string;
          tech?: string[];
        };
        const params: GetMentorsParams = { page, limit };
        if (filters?.name) params.name = filters.name;
        if (filters?.tech && filters.tech.length) params.tech = filters.tech;

        const res = (await getAllMentors(params)) as GetMentorsResponse;

        if (!mounted) return;

        setTotalPage(res.totalPages ?? 0);

        if (page === 1) {
          setMentors(res.data);
        } else {
          setMentors((prev) => [...prev, ...res.data]);
        }

        if ((res.total ?? 0) === 0 && page === 1) {
          setError("No mentors found. Try adjusting your search or check back later!");
        } else {
          setError(null);
        }
      } catch (err) {
        console.error("Failed to load mentors:", err);
        if (!mounted) return;
        setError("We couldn't load mentors right now. Please try again soon.");
      } finally {
        if (mounted) {
          if (page === 1) {
            setTimeout(() => {
              if (mounted) setLoading(false);
            }, 600);
          } else {
            setLoadingMore(false);
          }
        }
      }
    };

    fetchMentors();

    return () => {
      mounted = false;
    };
  }, [page, limit, filters?.name, filters?.tech]); // re-fetch when filters change

  return (
    <MentorsComponentWrapper>
      <MentorsMenu>
        {loading ? (
          <MentorListLoadingItem>
            <LoadingSmall message />
          </MentorListLoadingItem>
        ) : mentors.length > 0 ? (
          mentors.map((mentor: Mentor) => (
            <MentorsItem key={mentor._id} mentor={mentor} />
          ))
        ) : (
          <li>
            <ErrorMessage error={error ?? "No mentors found. Try adjusting filters or try again later."} />
          </li>
        )}
      </MentorsMenu>

      {/* show button only after initial load finished and when more pages exist */}
      {!loading && mentors.length > 0 && page < totalPage && (
        <MentorsLoadMoreButton
          onClick={() => setPage((p) => p + 1)}
          disabled={loadingMore || loading}
        >
          {loadingMore ? "Loading..." : "Load More..."}
        </MentorsLoadMoreButton>
      )}
    </MentorsComponentWrapper>
  );
}
