import React from "react";
import Button from "./Button.style";
import { ButtonProps as MuiButtonProps } from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  fontColor: string;
  backgroundColor: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  fontColorHover: string;
  backgroundColorHover: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  label: string;
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
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
