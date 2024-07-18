import useRequests from "@/feature/browse/hooks/useRequests";
import PaginatedList from "@/components/Pagination/Browse/PaginatedList";

export default function RequestsGET() {
  const { status, data } = useRequests();

  return (
    <div>
      <h1>Requests</h1>
      <div>
        {status === "pending" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error</span>
        ) : (
          <>
            <div>
              <PaginatedList items={data} itemsPerPage={9} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}