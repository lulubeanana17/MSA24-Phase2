import * as React from "react";
import TextField from "./TextField.style";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";

export type TextFieldProps = MuiTextFieldProps & {
  row?: number;
  error?: boolean;
};

const CustomTextField = ({
  label,
  row,
  onChange,
  error,
  ...props
}: TextFieldProps) => {
  return (
    <>
      <TextField
        fullWidth
        id="outlined-controlled"
        label={label}
        onChange={onChange}
        multiline
        rows={row}
        error={error}
        {...props}
      />
      <FormHelperText>{error ? "Error" : ""}</FormHelperText>
    </>
  );
};

export default CustomTextField;
