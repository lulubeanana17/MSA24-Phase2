import React, { useState } from 'react';
import StyledPaginationContainer from './PaginatedList.style';
import ItemsList from './ItemsList';
import PaginationControl from './PaginationControl';

const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`); //array from Request GET API

const PaginatedList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
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
