import React from "react";
import useUrgency from "@/feature/browse/hooks/useUrgency";
import useDepartment from "@/feature/browse/hooks/useDepartment";
import RequestCell from "@/components/RequestCell/RequestCell";
import { requestsType } from "@/feature/browse/types/requestsType";

const RequestDependencies = ({
  id,
  title,
  location,
  detail,
  startTime,
  urgencyId,
  departmentId,
  progressId,
}: requestsType) => {
  const { status: urgencyStatus, data: urgency } = useUrgency(urgencyId);
  const { status: departmentStatus, data: department } = useDepartment(departmentId);

  return (
    <div>
      {urgencyStatus === "pending" || departmentStatus === "pending" ? (
        "Loading..."
      ) : urgencyStatus === "error" || departmentStatus === "error" ? (
        <span>Error loading data</span>
      ) : (
        <RequestCell
          borderColor="primary"
          width="18rem"
          height="18rem"
          title={title}
          location={location}
          detail={detail}
          urgency={urgency?.title || "Unknown"}
          department={department?.title || "Unknown"}
          startTime={startTime}
        />
      )}
    </div>
  );
};

export default RequestDependencies;