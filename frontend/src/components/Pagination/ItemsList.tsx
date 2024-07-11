import React from 'react';
import StyledItemsContainer from './ItemsList.style';

interface ItemsListProps {
items: string[];
//Array<{Id: number, Title: string, Location: string, Detail?: string, StartTime: Date}>
}

const CustomItemsList = ({ items }: ItemsListProps) => {
  return (
    <StyledItemsContainer>
        {items.map((s) => (
            <></>
            //<Request cell title={items.Title} location={items.Location} detail={items.Detail} startTime={items.StartTime} />
        ))}
    </StyledItemsContainer>
  );
};

export default CustomItemsList;

//1. insert request cell
//2. css StyledItemsContainer