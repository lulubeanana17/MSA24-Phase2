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
  width: string;
  height: string;
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
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  .Text-title {
  font-size: 1.25rem;
  font-weight: 600;}
`;

export default StyledRequestCell;
