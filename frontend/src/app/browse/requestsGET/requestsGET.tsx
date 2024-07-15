import useRequests from "@/feature/browse/hooks/useRequests";
import RequestDependencies from "./requestDependencies";

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
              {data.map((request) => (
                <RequestDependencies {...request} />
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}