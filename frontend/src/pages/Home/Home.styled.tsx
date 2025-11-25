import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4.8rem;

  @media (min-width: 768px) {
  justify-content: center;
  }
`;
