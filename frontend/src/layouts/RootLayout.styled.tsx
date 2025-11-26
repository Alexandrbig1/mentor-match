import styled from "styled-components";

export const RootLayoutWrapper = styled.main`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding-top: 4.8rem;
  padding-bottom: 4.8rem;

  overflow: hidden;

  @media (min-width: 768px) {
    height: 100vh;
    max-height: 100vh;
    padding-top: 7.2rem;
    padding-bottom: 7.2rem;
  }
`;
