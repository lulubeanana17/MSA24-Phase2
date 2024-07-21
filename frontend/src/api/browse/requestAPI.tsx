import useRequest from "@/feature/browse/hooks/useRequest";
import useUrgency from "@/feature/browse/hooks/useUrgency";
import useDepartment from "@/feature/browse/hooks/useDepartment";
import useProgress from "@/feature/browse/hooks/useProgress";
import RequestGET from "@/app/browse/[id]/GET/requestGET";

interface RequestAPIProps {
  id: number;
}

const RequestAPI = ({ id }: RequestAPIProps) => {
  const { status, data } = useRequest(id);
  const { status: urgencyStatus, data: urgency } = useUrgency(data?.urgencyId);
  const { status: departmentStatus, data: department } = useDepartment(
    data?.departmentId
  );
  const { status: progressStatus, data: progress } = useProgress(
    data?.progressId
  );

  return (
    <div>
      <RequestGET
        status={status}
        urgencyStatus={urgencyStatus}
        departmentStatus={departmentStatus}
        progressStatus={progressStatus}
        data={data}
        urgency={urgency}
        department={department}
        progress={progress}
      />
    </div>
  );
};

export default RequestAPI;
