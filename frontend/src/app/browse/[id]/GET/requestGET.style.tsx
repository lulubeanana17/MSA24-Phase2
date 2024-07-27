import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 3rem 30rem;
  display: flex;
  flex-direction: column;

  .header {
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 4rem 0;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    line-height: 2.5rem;
    margin-bottom: 2rem;

    .content-bold {
      font-weight: 600;
    }
  }

  .buttonContainer {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
  }

  /*desktop*/
  @media screen and (max-width: 1920px) {
  margin: 3rem 20rem;

  .header {
    margin: 0 0 3rem 0;
  }

  .contentContainer {
    line-height: 2rem;
  }

  .buttonContainer {
    margin-top: 3rem;
  }
  }

  /*laptop*/
  @media screen and (max-width: 1367px) {
  margin: 3rem 5rem;
  }

  /*tablet*/
  @media screen and (max-width: 769px) {
  margin: 3rem 3rem;
  .header {
  font-size: 1.5rem;}
  }

  /*mobile*/
  @media screen and (max-width: 361px) {
  margin: 3rem 1rem;
  }
`;

export default StyledContainer;
