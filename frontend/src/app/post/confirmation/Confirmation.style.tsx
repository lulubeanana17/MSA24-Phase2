import styled from 'styled-components';

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 4rem 0 6rem 0;

.main {
font-size: 1.5rem;
}

/*tablet*/
  @media screen and (max-width: 769px) {
    .main {
font-size: 1rem;
}
  }

  /*mobile*/
  @media screen and (max-width: 361px) {
    .main {
font-size: 0.8rem;
}
  }
`;
