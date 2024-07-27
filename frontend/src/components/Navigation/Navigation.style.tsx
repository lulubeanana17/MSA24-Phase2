import styled from "styled-components";
import { theme } from "../Theme/Theme";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 5rem;
  font-size: 2rem;
  font-weight: 600;
  font-style: italic;
  border-style: none none solid none;
  border-width: 0.1rem;
  border-color: ${theme.palette["success"].light};

  .containerR {
    font-size: 1.25rem;
    font-style: normal;

    .link {
      text-decoration: none;
      cursor: pointer;

      .browse {
        margin-right: 2rem;
        transition: color 0.3s ease;
        &:hover {
          color: ${theme.palette["info"].light};
        }
      }
      .post {
        transition: color 0.3s ease;
        &:hover {
          color: ${theme.palette["info"].light};
        }
      }
    }
  }

  /*tablet*/
  @media screen and (max-width: 769px) {
    font-size: 1.5rem;

    .containerR {
      font-size: 1rem;
    }
  }
`;

export default MainContainer;
