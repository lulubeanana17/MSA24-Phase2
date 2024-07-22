import useRequests from "@/feature/browse/hooks/useRequests";
import PaginatedList from "@/components/Pagination/Browse/PaginatedList";
import Text from "@/components/Text/Text";
import StyledContainer from "./requestsGET.style";

export default function RequestsGET() {
  const { status, data } = useRequests();

  return (
    <StyledContainer>
      <Text className="header" color="primary" children="Browse Requests" />
      <div>
        {status === "pending" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error</span>
        ) : (
          <PaginatedList items={data} itemsPerPage={9} />
        )}
      </div>
    </StyledContainer>
  );
}