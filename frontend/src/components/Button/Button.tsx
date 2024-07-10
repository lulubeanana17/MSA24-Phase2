import React from "react";
import Button from "./Button.style";
import { ButtonProps as MuiButtonProps } from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  fontColor: string;
  backgroundColor: string;
  fontColorHover: string;
  backgroundColorHover: string;
  label: string;
  onClick?: () => void;
}

const CustomButton = ({
  fontColor,
  backgroundColor,
  fontColorHover,
  backgroundColorHover,
  label,
  ...props
}: ButtonProps) => {
  return (
    <Button
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      fontColorHover={fontColorHover}
      backgroundColorHover={backgroundColorHover}
      onClick={props.onClick}
      variant="contained"
    >
      {label}
    </Button>
  );
};

export default CustomButton;
