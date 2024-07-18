"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useRequest from "@/feature/browse/hooks/useRequest";
import useUrgency from "@/feature/browse/hooks/useUrgency";
import useDepartment from "@/feature/browse/hooks/useDepartment";
import useProgress from "@/feature/browse/hooks/useProgress";

interface RequestAPIProps {
  id: number;
}

const RequestAPI = ({ id }: RequestAPIProps) => {
  const { status, data } = useRequest(id);
  const { status: urgencyStatus, data: urgency } = useUrgency(data?.urgencyId);
  const { status: departmentStatus, data: department } = useDepartment(data?.departmentId);
  const { status: progressStatus, data: progress } = useProgress(data?.progressId);

  return (
    <div>
      {status === "pending" || urgencyStatus === "pending" || departmentStatus === "pending" || progressStatus === "pending" ? (
        "Loading..."
      ) : status === "error" || urgencyStatus === "error" || departmentStatus === "error" || progressStatus === "error" ? (
        <span>Error loading data</span>
      ) : (
        <>
          <div>{data.title}</div>
          <div>{urgency?.title}</div>
          <div>{department?.title}</div>
          <div>{progress?.title}</div>
        </>
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
