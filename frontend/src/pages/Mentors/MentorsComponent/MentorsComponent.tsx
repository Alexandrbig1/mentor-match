import { useEffect, useState } from "react";
import { getAllMentors } from "../../../services/getAllMentors";
import {
  MentorListLoadingItem,
  MentorsComponentWrapper,
  MentorsMenu,
} from "./MentorsComponent.styled";
import MentorsItem from "./MentorsItem";
import ErrorMessage from "../../../components/UI/ErrorMessage/ErrorMessage";
import LoadingSmall from "../../../components/UI/LoadingSmall/LoadingSmall";

export default function MentorsComponent() {
  const [mentors, setMentors] = useState<object[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const mentors = await getAllMentors();
        setMentors(mentors);
        if (mentors.length === 0) {
          setError(
            "No mentors found. Try adjusting your search or check back later!"
          );
        } else {
          setError(null);
        }
      } catch (err) {
        setError("We couldn't load mentors right now. Please try again soon.");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    fetchMentors();
  }, []);

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
    </MentorsComponentWrapper>
  );
}
