import React from "react";
import StyledItemsContainer from "./ItemsList.style";
import RequestDependencies from "@/app/browse/requestsGET/requestDependencies";
import { requestsType } from "@/feature/browse/types/requestsType";

interface ItemsListProps {
  items: requestsType[];
}

const CustomItemsList = ({ items }: ItemsListProps) => {
  return (
    <StyledItemsContainer>
      {items.map((request) => (
        <RequestDependencies {...request} />
      ))}
    </StyledItemsContainer>
  );
};

export default CustomItemsList;
