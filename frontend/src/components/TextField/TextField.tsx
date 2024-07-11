import * as React from 'react';
import TextField from "./TextField.style";
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps = MuiTextFieldProps & {
  row?: number;
}

const CustomTextField = ({label, row, onChange, ...props}: TextFieldProps) => {

  return (
      <TextField
        fullWidth
        id="outlined-controlled"
        label={label}
        onChange={onChange}
        multiline
        rows={row}
        {...props}
      />
  );
}

export default CustomTextField;
