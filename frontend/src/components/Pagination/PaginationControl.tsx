import React from "react";
import Pagination from "./PaginationControl.style";
import { PaginationProps as MuiPaginationProps } from "@mui/material";

const CustomPaginationControl = ({
  count,
  page,
  onChange,
}: MuiPaginationProps) => {
  return <Pagination count={count} page={page} onChange={onChange} />;
};

export default CustomPaginationControl;
