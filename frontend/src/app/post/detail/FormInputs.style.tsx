import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  .inputContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    .head {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    .select {
      width: 25rem;
    }
  }

  /*tablet*/
  @media screen and (max-width: 769px) {
    .inputContainer {
      margin-bottom: 1rem;

      .head {
        font-size: 0.8rem;
        margin-bottom: 0.75rem;
      }

      .select {
        width: 18rem;
      }
    }
  }

  /*mobile*/
  @media screen and (max-width: 361px) {
    .inputContainer {
      margin-bottom: 0.75rem;

      .head {
        font-size: 0.7rem;
        margin-bottom: 0.5rem;
      }

      .select {
        width: 18rem;
      }
    }
  }
`;
