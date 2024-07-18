'use client'

import { useState, useEffect } from "react";
import { requestsType } from "@/feature/browse/types/requestsType";
import { urgencyType } from "@/feature/browse/types/urgencyType";
import { departmentType } from "@/feature/browse/types/departmentType";
import { progressType } from "@/feature/browse/types/progressType";
import CustomButton from "@/components/Button/Button";

interface requestGETProps {
    status: string,
    urgencyStatus: string,
    departmentStatus: string,
    progressStatus: string,
    data: requestsType | undefined,
    urgency: urgencyType | undefined,
    department: departmentType | undefined,
    progress: progressType | undefined
}

const RequestGET = ({status, urgencyStatus, departmentStatus, progressStatus, data, urgency, department, progress}: requestGETProps) => {
    const [ProgressPhase, setProgressPhase] = useState(progress?.id);

    useEffect(() => {
        setProgressPhase(progress?.id);
    }, [progress]);

    console.log(progress?.id);
    
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
          {ProgressPhase === 1 ? (
            <>
              <CustomButton
                fontColor="#FFFFFF"
                backgroundColor="primary"
                fontColorHover="#FFFFFF"
                backgroundColorHover="primary"
                label="Start"
              />
            </>
          ) : ProgressPhase === 3 ? (
            <>
            <CustomButton
                fontColor="#FFFFFF"
                backgroundColor="primary"
                fontColorHover="#FFFFFF"
                backgroundColorHover="primary"
                label="Complete"
              />
            </>
          ) : ProgressPhase === 4 ? (
            <>Completed</>
          ) : (
            <>Error</>
          )}
        </>
      )}
    </div>
  );
}

export default RequestGET;