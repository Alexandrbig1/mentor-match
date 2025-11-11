import Form from "./Form/Form";
import { MentorsWrapper } from "./Mentors.styled";
import MentorsComponent from "./MentorsComponent/MentorsComponent";

export default function Mentors() {
  return (
    <MentorsWrapper>
      <Form />
      <MentorsComponent />
    </MentorsWrapper>
  );
}
