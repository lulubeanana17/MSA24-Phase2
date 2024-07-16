import useRequests from "@/feature/browse/hooks/useRequests";
import PaginatedList from "@/components/Pagination/PaginatedList";

export default function RequestsGET() {
  const { status, data, error, isFetching } = useRequests();

  return (
    <div>
      <h1>Requests</h1>
      <div>
        {status === "pending" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              <PaginatedList items={data} itemsPerPage={9} />
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}