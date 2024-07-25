import React from 'react';
import Select from "./Select.style";
import { SelectProps as MuiSelectProps } from '@mui/material';
import { MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { requestsType } from '@/feature/browse/types/requestsType';

type optionType = {
    id: number,
    title: string,
    requests?: requestsType[]
}

type SelectProps = MuiSelectProps & {
  options: optionType[] | undefined;
  error?: boolean;
}

const CustomSelect = ({
  options,
  error,
  ...props
}: SelectProps) => {
  return (
    <FormControl error={error}>
    <Select {...props}>
      {options?.map((option) => (
        <MenuItem key={option.title} value={option.id}>
          {option.title}
        </MenuItem>
      ))}
    </Select>
    <FormHelperText>{error? "Error" : ""}</FormHelperText>
    </FormControl>
  );
};

export default CustomSelect;
