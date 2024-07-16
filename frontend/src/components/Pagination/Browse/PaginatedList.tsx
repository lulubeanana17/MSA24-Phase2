import React, { useState } from 'react';
import StyledPaginationContainer from './PaginatedList.style';
import ItemsList from './ItemsList';
import PaginationControl from '../PaginationControl';
import { requestsType } from '@/feature/browse/types/requestsType';

interface listProps {
  items: requestsType[];
  itemsPerPage: number;
}

const PaginatedList = ({items, itemsPerPage}: listProps) => {
  const [page, setPage] = useState(1);
  const count = Math.ceil(items.length / itemsPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <StyledPaginationContainer>
      <ItemsList items={paginatedItems} />
      <PaginationControl count={count} page={page} onChange={handleChange} />
    </StyledPaginationContainer>
  );
};

export default PaginatedList;
