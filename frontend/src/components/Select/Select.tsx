import React from 'react';
import Select from "./Select.style";
import { SelectProps as MuiSelectProps } from '@mui/material';
import { MenuItem } from '@mui/material';

type optionType = {
    label: string;
    value: string | number;
}

type SelectProps = MuiSelectProps & {
  options: optionType[];
}

const CustomSelect = ({
  options,
  ...props
}: SelectProps) => {
  return (
    <Select {...props}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
