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
  }

  /*tablet*/
  @media screen and (max-width: 769px) {
  margin: 3rem 2rem;
  }

  /*mobile*/
  @media screen and (max-width: 361px) {
  margin: 3rem 1rem;
  }
`;

export default StyledContainer;
