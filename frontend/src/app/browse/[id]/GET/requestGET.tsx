import useRequest from "@/feature/browse/hooks/useRequest";
import useUrgency from "@/feature/browse/hooks/useUrgency";
import useDepartment from "@/feature/browse/hooks/useDepartment";
import useProgress from "@/feature/browse/hooks/useProgress";
import RequestPUT from "../PUT/requestPUT";
import RequestPUTReverse from "../PUT/requestPUTReverse";
import Text from "@/components/Text/Text";
import StyledContainer from "./requestGET.style";

interface requestGETProps {
  id: number;
}

const RequestGET = ({ id }: requestGETProps) => {
  const { status, data } = useRequest(id);
  const { status: urgencyStatus, data: urgency } = useUrgency(data?.urgencyId);
  const { status: departmentStatus, data: department } = useDepartment(
    data?.departmentId
  );
  const { status: progressStatus, data: progress } = useProgress(
    data?.progressId
  );

  return (
    <StyledContainer>
      <Text className="header" color="primary" children="A Request" />
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
            <div className="contentContainer">
              <Text
                className="content-bold"
                color="secondary"
                children="Request Title"
              />
              <Text
                className="content-normal"
                color="secondary"
                children={data?.title}
              />
            </div>
            <div className="contentContainer">
              <Text
                className="content-bold"
                color="secondary"
                children="Request Location"
              />
              <Text
                className="content-normal"
                color="secondary"
                children={data?.location}
              />
            </div>
            <div className="contentContainer">
              <Text
                className="content-bold"
                color="secondary"
                children="Urgency"
              />
              <Text
                className="content-normal"
                color="secondary"
                children={urgency?.title}
              />
            </div>
            <div className="contentContainer">
              <Text
                className="content-bold"
                color="secondary"
                children="Department"
              />
              <Text
                className="content-normal"
                color="secondary"
                children={department?.title}
              />
            </div>
            <div className="contentContainer">
              <Text
                className="content-bold"
                color="secondary"
                children="Request Detail"
              />
              <Text
                className="content-normal"
                color="secondary"
                children={data?.detail ? data?.detail : "N/A"}
              />
            </div>
            <div className="contentContainer">
              <Text
                className="content-bold"
                color="secondary"
                children="Created Time"
              />
              <Text
                className="content-normal"
                color="secondary"
                children={data?.startTime}
              />
            </div>
            <div className="buttonContainer">
              <RequestPUTReverse data={data} progress={progress} />
              <RequestPUT data={data} progress={progress} />
            </div>
          </>
        )}
      </div>
    </StyledContainer>
  );
};

export default RequestGET;
