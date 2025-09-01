import { useEffect, useState } from "react";
import { getAllMentors } from "../../../services/getAllMentors";
import {
  MentorListLoadingItem,
  MentorsComponentWrapper,
  MentorsLoadMoreButton,
  MentorsMenu,
} from "./MentorsComponent.styled";
import MentorsItem from "./MentorsItem";
import ErrorMessage from "../../../components/UI/ErrorMessage/ErrorMessage";
import LoadingSmall from "../../../components/UI/LoadingSmall/LoadingSmall";

export default function MentorsComponent() {
  const [mentors, setMentors] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(20);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    let mounted = true;

    const fetchMentors = async () => {
      try {
        if (page === 1) {
          setLoading(true);
        } else {
          setLoadingMore(true);
        }

        const res = await getAllMentors({ page, limit });

        if (!mounted) return;

        setTotalPage(res.totalPages ?? 0);

        if (page === 1) {
          setMentors(res.data);
        } else {
          setMentors((prev) => [...prev, ...res.data]);
        }

        if (res.total === 0 && page === 1) {
          setError("No mentors found. Try adjusting your search or check back later!");
        } else {
          setError(null);
        }
      } catch (err) {
        if (!mounted) return;
        setError("We couldn't load mentors right now. Please try again soon.");
      } finally {
        // avoid return inside finally (no-unsafe-finally)
        if (mounted) {
          if (page === 1) {
            setTimeout(() => {
              if (mounted) setLoading(false);
            }, 1500);
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
  }, [page, limit]);

  return (
    <MentorsComponentWrapper>
      <MentorsMenu>
        {loading ? (
          <MentorListLoadingItem>
            <LoadingSmall message />
          </MentorListLoadingItem>
        ) : mentors.length > 0 ? (
          mentors.map((mentor: any) => (
            <MentorsItem key={mentor._id} mentor={mentor} />
          ))
        ) : (
          <li>
            <ErrorMessage error={error} />
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
