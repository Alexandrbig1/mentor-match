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
  MobileFilterButton,
  MobileOverlay,
  MobilePanelCloseButton,
  FormActions,
  ResetButton,
} from "./Form.styled";

type Filters = { name?: string; tech?: string[] };

export default function Form({
  onChangeFilters,
}: {
  onChangeFilters?: (filters: Filters) => void;
}) {
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // lock body scroll when mobile panel open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // notify parent when technologies change
  useEffect(() => {
    onChangeFilters?.({
      name: name.length >= 2 ? name : undefined,
      tech: selectedTechs.length ? selectedTechs : undefined,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTechs]);

  // debounce name input and notify parent when length >= 2, clear when <2
  useEffect(() => {
    const t = setTimeout(() => {
      onChangeFilters?.({
        name: name.length >= 2 ? name : undefined,
        tech: selectedTechs.length ? selectedTechs : undefined,
      });
    }, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedTechs((prev) =>
      checked ? [...prev, value] : prev.filter((tech) => tech !== value)
    );
  };

  const resetFilters = () => {
    setName("");
    setSelectedTechs([]);
    // notify parent to clear filters -> show all mentors
    onChangeFilters?.({});
    // optionally close mobile panel: setMobileOpen(false);
  };

  return (
    <>
      {/* FormWrapper receives transient prop $mobileOpen to control mobile visibility */}
      <FormWrapper $mobileOpen={mobileOpen}>
        {/* close button inside the panel for mobile */}
        <MobilePanelCloseButton
          aria-label="Close filters"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </MobilePanelCloseButton>

        {/* Actions row: title + clear */}
        <FormActions>
          <FormTitle>Search Mentors</FormTitle>
          <ResetButton
            type="button"
            onClick={resetFilters}
            aria-label="Reset filters"
          >
            Reset
          </ResetButton>
        </FormActions>

        <FormNameWrapper>
          <FormNameInput
            type="text"
            id="name"
            name="name"
            placeholder="Search by Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

      {/* mobile fixed bottom button */}
      <MobileFilterButton
        aria-expanded={mobileOpen}
        aria-controls="filters-panel"
        onClick={() => setMobileOpen((s) => !s)}
      >
        Filters
      </MobileFilterButton>

      {/* overlay for mobile when panel open */}
      <MobileOverlay
        hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />
    </>
  );
}
