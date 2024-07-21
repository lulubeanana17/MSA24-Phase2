"use client";

import { requestsType } from "@/feature/browse/types/requestsType";
import { urgencyType } from "@/feature/browse/types/urgencyType";
import { departmentType } from "@/feature/browse/types/departmentType";
import { progressType } from "@/feature/browse/types/progressType";
import RequestPUT from "../PUT/requestPUT";
import RequestPUTReverse from "../PUT/requestPUTReverse";

interface requestGETProps {
  status: string;
  urgencyStatus: string;
  departmentStatus: string;
  progressStatus: string;
  data: requestsType | undefined;
  urgency: urgencyType | undefined;
  department: departmentType | undefined;
  progress: progressType | undefined;
}

const RequestGET = ({
  status,
  urgencyStatus,
  departmentStatus,
  progressStatus,
  data,
  urgency,
  department,
  progress,
}: requestGETProps) => {
  return (
    <div>
      {status === "pending" ||
      urgencyStatus === "pending" ||
      departmentStatus === "pending" ||
      progressStatus === "pending" ? (
        "Loading..."
      ) : status === "error" ||
        urgencyStatus === "error" ||
        departmentStatus === "error" ||
        progressStatus === "error" ? (
        <span>Error loading data</span>
      ) : (
        <>
          <div>{data?.title}</div>
          <div>{data?.location}</div>
          <div>{urgency?.title}</div>
          <div>{department?.title}</div>
          <div>{data?.detail}</div>
          <div>{data?.startTime}</div>
          <div>
          <RequestPUTReverse data={data} progress={progress} />
          <RequestPUT data={data} progress={progress} />
          </div>
        </>
      )}
    </div>
  );
};

export default RequestGET;
