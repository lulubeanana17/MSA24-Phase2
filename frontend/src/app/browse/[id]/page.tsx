"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useRequest from "@/feature/browse/hooks/useRequest";

interface RequestAPIProps {
  id: number;
}

const RequestAPI = ({ id }: RequestAPIProps) => {
  const { status, data } = useRequest(id);

  return (
    <div>
      {status === "pending" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error loading data</span>
      ) : (
        <div>{data.title}</div>
      )}
    </div>
  );
};

const browseRequestById = ({ params }: { params: { id: number } }) => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RequestAPI id={params.id} />
      </QueryClientProvider>
    </div>
  );
};

export default browseRequestById;
