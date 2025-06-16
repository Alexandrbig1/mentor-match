import { StatsMenu, StatsMenuItem, StatsWrapper } from "./Stats.styled";

export default function Stats() {
  return (
    <StatsWrapper>
      <StatsMenu>
        <StatsMenuItem>
          <span>Stat 1</span>
          <h2>Value 1</h2>
        </StatsMenuItem>
        <StatsMenuItem>
          <span>Stat 2</span>
          <h2>Value 2</h2>
        </StatsMenuItem>
        <StatsMenuItem>
          <span>Stat 3</span>
          <h2>Value 3</h2>
        </StatsMenuItem>
        <StatsMenuItem>
          <span>Stat 4</span>
          <h2>Value 4</h2>
        </StatsMenuItem>
      </StatsMenu>
    </StatsWrapper>
  );
}
