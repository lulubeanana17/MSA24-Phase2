import React from 'react';
import Select from "./Select.style";
import { SelectProps as MuiSelectProps } from '@mui/material';
import { MenuItem } from '@mui/material';
import { requestsType } from '@/feature/browse/types/requestsType';

type optionType = {
    id: number,
    title: string,
    requests?: requestsType[]
}

type SelectProps = MuiSelectProps & {
  options: optionType[] | undefined;
}

const CustomSelect = ({
  options,
  ...props
}: SelectProps) => {
  return (
    <Select {...props}>
      {options?.map((option) => (
        <MenuItem key={option.title} value={option.id}>
          {option.title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
