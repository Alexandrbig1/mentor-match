import { useState } from "react";
import Form from "./Form/Form";
import { MentorsWrapper } from "./Mentors.styled";
import MentorsComponent from "./MentorsComponent/MentorsComponent";

export default function Mentors() {
  const [filters, setFilters] = useState<{ name?: string; tech?: string[] }>(
    {}
  );

  return (
    <MentorsWrapper>
      <Form onChangeFilters={(f) => setFilters(f)} />
      <MentorsComponent filters={filters} />
    </MentorsWrapper>
  );
}
