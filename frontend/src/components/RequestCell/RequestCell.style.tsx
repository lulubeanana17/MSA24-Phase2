import styled from "styled-components";
import theme from "../Theme/Theme";

interface RequestCellProps {
  borderColor?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success";
}

const StyledRequestCell = styled.div<RequestCellProps>`
  border-style: solid;
  border-color: ${({ borderColor }) =>
    (borderColor && theme.palette[borderColor].main) || "#000000"};
  border-radius: 2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;
  width: 18rem;
  height: 18rem;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ borderColor }) =>
      (borderColor && theme.palette[borderColor].light) || "#000000"};

    .Text-title {
      color: ${theme.palette["secondary"].light};
    }
    .Text-progress {
      color: ${theme.palette["warning"].light};
    }
    .Text {
      color: ${theme.palette["success"].light};
    }
    .Text-detail {
      color: ${theme.palette["secondary"].light};
    }
  }

  .Text-title {
    font-size: 1.25rem;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .Text-progress {
    font-size: 2rem;
    font-weight: 600;
    font-style: italic;
    text-align: center;
    transition: color 0.3s ease;
  }

  .Text {
    transition: color 0.3s ease;
  }

  .Text-detail {
    transition: color 0.3s ease;
  }

  /*desktop*/
  @media screen and (max-width: 1920px) {
    padding: 1.4rem;
    width: 17rem;
    height: 17rem;
    line-height: 2.3rem;

    .Text-progress {
      font-size: 1.8rem;
    }
  }

  /*laptop*/
  @media screen and (max-width: 1367px) {
    padding: 1rem;
    width: 14rem;
    height: 14rem;
    line-height: 2rem;

    .Text-progress {
      font-size: 1.5rem;
    }
  }

  /*laptop*/
  @media screen and (max-width: 1100px) {
    padding: 1rem;
    width: 13rem;
    height: 13rem;
    line-height: 1.6rem;

    .Text-progress {
      font-size: 1.5rem;
    }
  }

  /*tablet*/
  @media screen and (max-width: 769px) {
    padding: 1rem;
    width: 12rem;
    height: 12rem;
    line-height: 1.7rem;

    .Text-title {
      font-size: 1rem;
    }
    .Text {
      font-size: 0.8rem;
    }

    .Text-progress {
      font-size: 1.3rem;
    }
  }

  /*mobile*/
  @media screen and (max-width: 361px) {
    padding: 1rem;
    width: 12rem;
    height: 12rem;
    line-height: 1.7rem;

    .Text-title {
      font-size: 1rem;
    }
    .Text {
      font-size: 0.8rem;
    }

    .Text-progress {
      font-size: 1.3rem;
    }
  }
`;

export default StyledRequestCell;
