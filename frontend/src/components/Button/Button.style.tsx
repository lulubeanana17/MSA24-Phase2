import react, { FunctionComponent } from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@mui/material";
import styled from "styled-components";

interface customButtonProps extends MuiButtonProps {
  fontColor: string;
  backgroundColor: string;
  fontColorHover: string;
  backgroundColorHover: string;
}

const StyledButton = styled(MuiButton)<customButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  &:hover {
    background-color: ${({ backgroundColorHover }) => backgroundColorHover};
    color: ${({ fontColorHover }) => fontColorHover};
  }
`;

export default StyledButton;
