import React from "react";
import StyledItemsContainer from "./ItemsList.style";
import RequestCellAPI from "@/api/browse/requestCellAPI";
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
          <RequestCellAPI {...request} />
        </Link>
      ))}
    </StyledItemsContainer>
  );
};

export default CustomItemsList;
