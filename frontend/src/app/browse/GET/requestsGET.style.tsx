import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 3rem 24rem;
  display: flex;
  flex-direction: column;

  .head {
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 4rem 0;
  }

  /*desktop-1*/
  @media screen and (max-width: 2040px) {
    margin: 3rem 16rem;
    .head {
      margin: 0 0 3rem 0;
    }
  }

  /*desktop-2*/
  @media screen and (max-width: 1720px) {
    margin: 3rem 12rem;
  }

  /*desktop-3*/
  @media screen and (max-width: 1570px) {
    margin: 3rem 5rem;
  }

  /*laptop*/
  @media screen and (max-width: 1367px) {
    margin: 3rem 2.6rem;
  }

  /*laptop*/
  @media screen and (max-width: 1100px) {
    margin: 3rem 2rem;
  }

  /*tablet*/
  @media screen and (max-width: 769px) {
    margin: 3rem 1rem;
    .head {
      font-size: 1.5rem;
      margin: 0 0 3rem 2rem;
    }
  }

  /*mobile*/
  @media screen and (max-width: 361px) {
    margin: 3rem 1rem;
  }
`;

export default StyledContainer;
