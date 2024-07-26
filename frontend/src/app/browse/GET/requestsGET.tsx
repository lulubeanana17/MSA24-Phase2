import useRequests from "@/feature/browse/hooks/useRequests";
import PaginatedList from "../pagination/PaginatedList";
import Text from "@/components/Text/Text";
import Loading from "@/components/Loading/Loading";
import StyledContainer from "./requestsGET.style";

export default function RequestsGET() {
  const { status, data } = useRequests();

  return (
    <StyledContainer>
      {status === "pending" ? (
        <Loading />
      ) : status === "error" ? (
        <span>Error</span>
      ) : (
        <>
          <Text className="header" color="primary" children="Browse Requests" />
          <PaginatedList items={data} itemsPerPage={9} />
        </>
      )}
    </StyledContainer>
  );
}
