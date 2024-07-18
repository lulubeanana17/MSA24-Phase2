import { Button as MuiButton } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@mui/material";
import theme from "../Theme/Theme";
import styled from "styled-components";

interface customButtonProps extends MuiButtonProps {
  fontColor: string;
  backgroundColor: | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";
  fontColorHover: string;
  backgroundColorHover: | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";
}

const StyledButton = styled(MuiButton)<customButtonProps>`
  background-color: ${({ backgroundColor }) => (backgroundColor && theme.palette[backgroundColor].main) || "#000000"};
  color: ${({ fontColor }) => fontColor};
  &:hover {
    background-color: ${({ backgroundColorHover }) => (backgroundColorHover && theme.palette[backgroundColorHover].dark) || "#000000"};
    color: ${({ fontColorHover }) => fontColorHover};
  }
`;

export default StyledButton;
