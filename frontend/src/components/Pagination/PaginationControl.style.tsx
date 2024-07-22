import { Pagination as MuiPagination } from "@mui/material";
import { PaginationProps as MuiPaginationProps } from "@mui/material";
import styled from "styled-components";

const StyledPaginationControl = styled(MuiPagination)<MuiPaginationProps>`
  margin-top: 2rem;
`;

export default StyledPaginationControl;
