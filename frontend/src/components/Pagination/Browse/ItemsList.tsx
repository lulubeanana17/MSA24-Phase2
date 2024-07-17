import React from "react";
import StyledItemsContainer from "./ItemsList.style";
import RequestDependencies from "@/app/browse/requestsGET/requestDependencies";
import { requestsType } from "@/feature/browse/types/requestsType";
import Link from "next/link";

interface ItemsListProps {
  items: requestsType[];
}

const CustomItemsList = ({ items }: ItemsListProps) => {
  return (
    <StyledItemsContainer>
      {items.map((request) => (
        <Link href={`browse/${request.id}`}>
          <RequestDependencies {...request} />
        </Link>
      ))}
    </StyledItemsContainer>
  );
};

export default CustomItemsList;
