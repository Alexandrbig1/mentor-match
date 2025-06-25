import { useEffect, useState } from "react";
import LoadingSmall from "../UI/LoadingSmall/LoadingSmall";
import { getMentorsCount } from "../../services/getMentorsCount";
import { getTechnologiesCount } from "../../services/getTechnologiesCount";
import {
  StatsMenu,
  StatsMenuItem,
  StatsMenuItemSpanIcon,
  StatsMenuItemSpan,
  StatsMenuItemTitle,
  StatsWrapper,
  StatsMenuItemSpanLoadingWrapper,
} from "./Stats.styled";

export default function Stats() {
  const [mentorsCount, setMentorsCount] = useState<number>(0);
  const [technologiesCount, setTechnologiesCount] = useState<number>(0);
  const [loadingMentors, setLoadingMentors] = useState<boolean>(true);
  const [loadingTechnologies, setLoadingTechnologies] = useState<boolean>(true);

  useEffect(() => {
    const fetchMentorsCount = async () => {
      try {
        const response = await getMentorsCount();
        setTimeout(() => {
          setMentorsCount(response.count);
          setLoadingMentors(false);
        }, 1200);
      } catch (error) {
        console.error("Error fetching mentors count:", error);
        setLoadingMentors(false);
      }
    };
    const fetchTechnologiesCount = async () => {
      try {
        const response = await getTechnologiesCount();
        setTimeout(() => {
          setTechnologiesCount(response.count);
          setLoadingTechnologies(false);
        }, 1500);
      } catch (error) {
        console.error("Error fetching mentors count:", error);
        setLoadingTechnologies(false);
      }
    };

    fetchMentorsCount();
    fetchTechnologiesCount();
  }, []);

  return (
    <StatsWrapper>
      <StatsMenu>
        <StatsMenuItem>
          <StatsMenuItemSpan>
            <StatsMenuItemSpanIcon>
              <use href="/sprite.svg#icon-app-settings"></use>
            </StatsMenuItemSpanIcon>
          </StatsMenuItemSpan>
          <StatsMenuItemTitle>Cross-platform</StatsMenuItemTitle>
        </StatsMenuItem>
        <StatsMenuItem>
          <StatsMenuItemSpan>
            <StatsMenuItemSpanIcon>
              <use href="/sprite.svg#icon-shield"></use>
            </StatsMenuItemSpanIcon>
          </StatsMenuItemSpan>
          <StatsMenuItemTitle>Secure data</StatsMenuItemTitle>
        </StatsMenuItem>
        <StatsMenuItem>
          <StatsMenuItemSpan>
            {loadingMentors ? (
              <StatsMenuItemSpanLoadingWrapper>
                <LoadingSmall />
              </StatsMenuItemSpanLoadingWrapper>
            ) : (
              mentorsCount
            )}
          </StatsMenuItemSpan>
          <StatsMenuItemTitle>Expert Mentors</StatsMenuItemTitle>
        </StatsMenuItem>
        <StatsMenuItem>
          <StatsMenuItemSpan>
            {loadingTechnologies ? (
              <StatsMenuItemSpanLoadingWrapper>
                <LoadingSmall />
              </StatsMenuItemSpanLoadingWrapper>
            ) : (
              technologiesCount
            )}
          </StatsMenuItemSpan>
          <StatsMenuItemTitle>Subjects taught</StatsMenuItemTitle>
        </StatsMenuItem>
      </StatsMenu>
    </StatsWrapper>
  );
}
