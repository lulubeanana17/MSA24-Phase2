"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RequestAPI from "@/api/browse/requestAPI";

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
