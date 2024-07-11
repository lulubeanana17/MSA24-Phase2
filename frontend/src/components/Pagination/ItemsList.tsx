import React from 'react';
import StyledItemsContainer from './ItemsList.style';
import RequestCell from "../RequestCell/RequestCell";

interface ItemsListProps {
items: string[];
//Array<{Id: number, Title: string, Location: string, Detail?: string, StartTime: Date}>
}

const CustomItemsList = ({ items }: ItemsListProps) => {
  return (
    <StyledItemsContainer>
        {items.map((s) => (
            <RequestCell
            borderColor="primary"
            width="18rem"
            height="18rem"
            title="Amenity"//{s.title}
            location="Room 0402"//{s.location}
            detail="2 x toilet paper"//{s.detail}
            urgency="within 20mins"//{s.urgency}
            department="housekeeing"//{s.department}
            startTime="15:39pm"//{s.starttime}
          />
        ))}
    </StyledItemsContainer>
  );
};

export default CustomItemsList;