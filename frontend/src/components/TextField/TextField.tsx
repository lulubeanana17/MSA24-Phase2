import * as React from 'react';
import TextField from "./TextField.style";
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps = MuiTextFieldProps & {
  label?: string;
  row?: number;
  onChange?: () => void;
}

export default function BasicTextField(props: TextFieldProps) {
  const { label, row, onChange, ...otherProps } = props;

  return (
      <TextField
        fullWidth
        id="outlined-controlled"
        label={label}
        onChange={onChange}
        multiline
        rows={row}
        {...otherProps}
      />
  );
}
