import { useEffect, useState } from "react";
import CountUp from "react-countup";
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
  const [mentorsCount, setMentorsCount] = useState<number | null>(null);
  const [technologiesCount, setTechnologiesCount] = useState<number | null>(
    null
  );
  const [loadingMentors, setLoadingMentors] = useState<boolean>(true);
  const [loadingTechnologies, setLoadingTechnologies] = useState<boolean>(true);

  useEffect(() => {
    const fetchMentorsCount = async () => {
      let count = 0;
      try {
        const response = await getMentorsCount();
        count = response.count;
      } catch (error) {
        console.error("Error fetching mentors count:", error);
        count = 0;
      } finally {
        setTimeout(() => {
          setMentorsCount(count);
          setLoadingMentors(false);
        }, 1200);
      }
    };

    const fetchTechnologiesCount = async () => {
      let count = 0;
      try {
        const response = await getTechnologiesCount();
        count = response.count;
      } catch (error) {
        console.error("Error fetching technologies count:", error);
        count = 0;
      } finally {
        setTimeout(() => {
          setTechnologiesCount(count);
          setLoadingTechnologies(false);
        }, 1500);
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
            {loadingMentors || mentorsCount === null ? (
              <StatsMenuItemSpanLoadingWrapper>
                <LoadingSmall />
              </StatsMenuItemSpanLoadingWrapper>
            ) : (
              <CountUp end={mentorsCount} duration={1.2} />
            )}
          </StatsMenuItemSpan>
          <StatsMenuItemTitle>Expert mentors</StatsMenuItemTitle>
        </StatsMenuItem>
        <StatsMenuItem>
          <StatsMenuItemSpan>
            {loadingTechnologies || technologiesCount === null ? (
              <StatsMenuItemSpanLoadingWrapper>
                <LoadingSmall />
              </StatsMenuItemSpanLoadingWrapper>
            ) : (
              <CountUp end={technologiesCount} duration={1.5} />
            )}
          </StatsMenuItemSpan>
          <StatsMenuItemTitle>Subjects taught</StatsMenuItemTitle>
        </StatsMenuItem>
      </StatsMenu>
    </StatsWrapper>
  );
}
