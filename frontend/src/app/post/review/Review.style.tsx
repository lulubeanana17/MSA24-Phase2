import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  .contentContainer {
    display: flex;
    flex-direction: column;
    line-height: 2.5rem;
    margin-bottom: 2rem;
    font-size: 1rem;

    .content-bold {
      font-weight: 600;
    }
  }

  /*tablet*/
  @media screen and (max-width: 769px) {
    .contentContainer {
      font-size: 0.8rem;
      margin-bottom: 1rem;
      line-height: 2rem;
    }
  }

  /*mobile*/
  @media screen and (max-width: 361px) {
    .contentContainer {
      font-size: 0.7rem;
      margin-bottom: 0.55rem;
      line-height: 1.5rem;
    }
  }
`;
