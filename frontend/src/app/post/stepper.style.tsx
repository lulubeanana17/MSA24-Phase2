import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 3rem 30rem;
  display: flex;
  flex-direction: column;

  .header {
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 4rem 0;
  }

  .stepper {
    margin: 0 23rem 3rem 23rem;
  }

  .buttonsContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }

  .postmore {
    display: flex;
    justify-content: center;
  }

  /*desktop-1*/
  @media screen and (max-width: 2040px) {
    margin: 3rem 20rem;
    .header {
      margin: 0 0 3rem 0;
    }
  }

  /*desktop-2*/
  @media screen and (max-width: 1720px) {
    margin: 3rem 15rem;
  }

  /*desktop-3*/
  @media screen and (max-width: 1570px) {
    margin: 3rem 8rem;
  }

  /*laptop*/
  @media screen and (max-width: 1367px) {
    margin: 3rem 5rem;
    .stepper {
      margin: 0 10rem 3rem 10rem;
    }
  }

  /*tablet*/
  @media screen and (max-width: 769px) {
    margin: 3rem 2rem;
    .header {
      font-size: 1.75rem;
    }
    .stepper {
      margin: 0 3rem 1.5rem 3rem;
    }
    .buttonsContainer {
      margin-top: 1.5rem;
    }
  }

  /*mobile*/
  @media screen and (max-width: 361px) {
    margin: 3rem 1rem;
    .header {
      font-size: 1.5rem;
    }
    .stepper {
      margin: 0 1.2rem 1rem 1.2rem;
    }
    .buttonsContainer {
      margin-top: 1rem;
    }
  }
`;
