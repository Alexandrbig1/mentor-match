import {
  StatsMenu,
  StatsMenuItem,
  StatsMenuItemSpanIcon,
  StatsMenuItemSpan,
  StatsMenuItemTitle,
  StatsWrapper,
} from "./Stats.styled";

export default function Stats() {
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
          <StatsMenuItemSpan>10</StatsMenuItemSpan>
          <StatsMenuItemTitle>Expert Mentors</StatsMenuItemTitle>
        </StatsMenuItem>
        <StatsMenuItem>
          <StatsMenuItemSpan>120</StatsMenuItemSpan>
          <StatsMenuItemTitle>Subjects taught</StatsMenuItemTitle>
        </StatsMenuItem>
      </StatsMenu>
    </StatsWrapper>
  );
}
