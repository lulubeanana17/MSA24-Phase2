import React from "react";
import StyledContainer from "./ItemsList.style";
import RequestPropertyGET from "../GET/requestPropertyGET";
import { requestsType } from "@/feature/browse/types/requestsType";
import Link from "next/link";

interface ItemsListProps {
  items: requestsType[];
}

const CustomItemsList = ({ items }: ItemsListProps) => {
  return (
    <StyledContainer>
        {items.map((request) => (
          <Link className="cell" href={`browse/${request.id}`}>
            <RequestPropertyGET {...request} />
          </Link>
        ))}
    </StyledContainer>
  );
};

export default CustomItemsList;
