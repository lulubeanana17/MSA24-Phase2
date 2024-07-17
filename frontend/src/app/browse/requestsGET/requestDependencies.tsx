import React from "react";
import { useRouter } from 'next/router';
import useUrgency from "@/feature/browse/hooks/useUrgency";
import useDepartment from "@/feature/browse/hooks/useDepartment";
import useProgress from "@/feature/browse/hooks/useProgress";
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
  // const router = useRouter();
  const { status: urgencyStatus, data: urgency } = useUrgency(urgencyId);
  const { status: departmentStatus, data: department } = useDepartment(departmentId);
  const { status: progressStatus, data: progress } = useProgress(progressId);

  // const handleRequestClick = () => {
  //   router.push(`/browse/${id}`);
  // };

  return (
    <div>
      {urgencyStatus === "pending" || departmentStatus === "pending" || progressStatus === "pending" ? (
        "Loading..."
      ) : urgencyStatus === "error" || departmentStatus === "error" || progressStatus === "error" ? (
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
          progress={progress?.title || "Unknown"}
          // onClick={handleRequestClick}
        />
      )}
    </div>
  );
};

export default RequestDependencies;