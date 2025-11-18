import { useEffect, useState } from "react";
import { getTechIconProps } from "../../../utils/getTechIconProps";
import { getAllTechnologies } from "../../../services/getAllTechnologies";
import LoadingSmall from "../../../components/UI/LoadingSmall/LoadingSmall";
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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchTechnologies = async () => {
      try {
        const techs = await getAllTechnologies();
        setTechnologies(techs);
        if (techs.length === 0) {
          setError("No technologies found. Please check back later!");
        } else {
          setError(null);
        }
      } catch (err) {
        // use the caught error to help debugging and still show user-friendly message
        console.error("Failed to load technologies:", err);
        setError(
          "Sorry, we couldn't load the list of technologies. Please try again later."
        );
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1200);
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
      {loading ? (
        <div>
          <LoadingSmall message />
        </div>
      ) : error ? (
        <TechnologyErrorWrapper>
          <TechnologyErrorIcon>
            <use href="/sprite.svg#icon-db-error"></use>
          </TechnologyErrorIcon>
          <TechnologyErrorText>{error}</TechnologyErrorText>
        </TechnologyErrorWrapper>
      ) : (
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
                  id={`expertise-${technology}`}
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
      )}
    </FormWrapper>
  );
}
