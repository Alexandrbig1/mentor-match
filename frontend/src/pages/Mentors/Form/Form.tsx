import { useEffect, useState } from "react";
import { getTechIconProps } from "../../../utils/getTechIconProps";
import { getAllTechnologies } from "../../../services/getAllTechnologies";
import {
  FormNameInput,
  FormNameWrapper,
  FormTechnologyIconWrapper,
  FormTechnologyInput,
  FormTechnologyInputText,
  FormTechnologyLabel,
  FormTechnologyWrapper,
  FormTitle,
  FormWrapper,
  SearchIcon,
  TechnologyErrorIcon,
  TechnologyErrorText,
  TechnologyErrorWrapper,
} from "./Form.styled";

export default function Form() {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const techs = await getAllTechnologies();
        setTechnologies(techs);
      } catch (err) {
        setError(
          "Sorry, we couldn't load the list of technologies. Please try again later."
        );
      }
    };
    fetchTechnologies();
  }, []);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedTechs((prev) =>
      checked ? [...prev, value] : prev.filter((tech) => tech !== value)
    );
  };

  return (
    <FormWrapper>
      <FormTitle>Search Mentors</FormTitle>
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
      <FormTitle>Technology</FormTitle>
      {error && (
        <TechnologyErrorWrapper>
          <TechnologyErrorIcon />
          <TechnologyErrorText>{error}</TechnologyErrorText>
        </TechnologyErrorWrapper>
      )}
      <FormTechnologyWrapper>
        {technologies?.map((technology) => {
          const { IconComponent, color, hoverColor } =
            getTechIconProps(technology);
          return (
            <FormTechnologyLabel
              key={technology}
              $color={color}
              $hoverColor={hoverColor}
              $checked={selectedTechs.includes(technology)}
            >
              <FormTechnologyInput
                type="checkbox"
                id="expertise"
                name="expertise"
                value={technology}
                checked={selectedTechs.includes(technology)}
                onChange={handleCheck}
              />
              <FormTechnologyIconWrapper $color={color}>
                <IconComponent />
              </FormTechnologyIconWrapper>
              <FormTechnologyInputText>{technology}</FormTechnologyInputText>
            </FormTechnologyLabel>
          );
        })}
      </FormTechnologyWrapper>
    </FormWrapper>
  );
}
