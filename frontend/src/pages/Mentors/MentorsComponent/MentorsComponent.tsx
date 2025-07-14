import { getAllMentors } from "../../../services/getAllMentors";
import {
  MentorListErrorItem,
  MentorsComponentWrapper,
  MentorsMenu,
} from "./MentorsComponent.styled";
import { useEffect, useState } from "react";
import MentorsItem from "./MentorsItem";

export default function MentorsComponent() {
  const [mentors, setMentors] = useState<object[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const mentors = await getAllMentors();
        setMentors(mentors);
      } catch (err) {
        setError(
          "Sorry, we couldn't load the list of mentors. Please try again later."
        );
      }
    };

    fetchMentors();
  }, []);

  return (
    <MentorsComponentWrapper>
      <MentorsMenu>
        {mentors.length > 0 ? (
          mentors.map((mentor: any) => (
            <MentorsItem key={mentor._id} mentor={mentor} />
          ))
        ) : (
          <MentorListErrorItem>{error}</MentorListErrorItem>
        )}
      </MentorsMenu>
    </MentorsComponentWrapper>
  );
}
