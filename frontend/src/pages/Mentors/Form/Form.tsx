import { useEffect, useState } from "react";
import { getAllTechnologies } from "../../../services/getAllTechnologies";
import {
  FormNameInput,
  FormNameWrapper,
  FormWrapper,
  SearchIcon,
} from "./Form.styled";

export default function Form() {
  const [technologies, setTechnologies] = useState<string[]>([]);

  useEffect(() => {
    getAllTechnologies().then(setTechnologies);
  }, []);

  return (
    <FormWrapper>
      <h2>Search Mentors</h2>
      <FormNameWrapper>
        <FormNameInput
          type="text"
          id="name"
          name="name"
          placeholder="Search by Name"
          required
        />
        <SearchIcon />
      </FormNameWrapper>
      <h2>Technology</h2>
      <div>
        {technologies?.map((technology) => (
          <input
            key={``}
            type="checkbox"
            id="expertise"
            name="expertise"
            required
          />
        ))}
      </div>
    </FormWrapper>
  );
}
