import {
  FormNameInput,
  FormNameLabel,
  FormNameWrapper,
  FormWrapper,
  SearchIcon,
} from "./Form.styled";

export default function Form() {
  return (
    <FormWrapper>
      <h2>Search Mentors</h2>
      <FormNameWrapper>
        <FormNameLabel htmlFor="name">Search by Name</FormNameLabel>
        <FormNameInput type="text" id="name" name="name" required />
        <SearchIcon />
      </FormNameWrapper>
      <h2>Technology</h2>
      <div>
        <input type="text" id="expertise" name="expertise" required />
      </div>
    </FormWrapper>
  );
}
