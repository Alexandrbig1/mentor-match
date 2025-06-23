import {
  StatsMenu,
  StatsMenuItem,
  StatsMenuItemSpanIcon,
  StatsMenuItemSpanWrapper,
  StatsMenuItemTitle,
  StatsWrapper,
} from "./Stats.styled";

export default function Stats() {
  return (
    <StatsWrapper>
      <StatsMenu>
        <StatsMenuItem>
          <StatsMenuItemSpanWrapper>
            <StatsMenuItemSpanIcon>
              <use href="/public/sprite.svg#icon-app-settings"></use>
            </StatsMenuItemSpanIcon>
          </StatsMenuItemSpanWrapper>
          <StatsMenuItemTitle>Cross-platform</StatsMenuItemTitle>
        </StatsMenuItem>
        <StatsMenuItem>
          <StatsMenuItemSpanWrapper>
            <StatsMenuItemSpanIcon>
              <use href="/public/sprite.svg#icon-shield"></use>
            </StatsMenuItemSpanIcon>
          </StatsMenuItemSpanWrapper>
          <StatsMenuItemTitle>Secure data</StatsMenuItemTitle>
        </StatsMenuItem>
        <StatsMenuItem>
          <StatsMenuItemSpanWrapper>10</StatsMenuItemSpanWrapper>
          <StatsMenuItemTitle>Expert Mentors</StatsMenuItemTitle>
        </StatsMenuItem>
        <StatsMenuItem>
          <StatsMenuItemSpanWrapper>120</StatsMenuItemSpanWrapper>
          <StatsMenuItemTitle>Subjects taught</StatsMenuItemTitle>
        </StatsMenuItem>
      </StatsMenu>
    </StatsWrapper>
  );
}
