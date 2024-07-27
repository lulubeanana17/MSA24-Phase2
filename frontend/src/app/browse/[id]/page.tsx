"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RequestGET from "./GET/requestGET";
import Navigation from "@/components/Navigation/Navigation";

const browseRequestById = ({ params }: { params: { id: number } }) => {
  const queryClient = new QueryClient();

  return (
    <div>
      <Navigation />
      <QueryClientProvider client={queryClient}>
        <RequestGET id={params.id} />
      </QueryClientProvider>
    </div>
  );
};

export default browseRequestById;
