import { requestsType } from "@/feature/browse/types/requestsType";
import { progressType } from "@/feature/browse/types/progressType";
import CustomButton from "@/components/Button/Button";
import useRequestPUT from "@/feature/browse/hooks/useRequestPUT";

interface requestPUTProps {
    data: requestsType | undefined;
  progress: progressType | undefined;
}

const RequestPUTReverse = ({data, progress}: requestPUTProps) => {
    const { mutate } = useRequestPUT();
    const requestUpdate = {
        id: data?.id,
        title: data?.title,
        location: data?.location,
        detail: data?.detail,
        progressId: progress?.id === 3? 1 : progress?.id === 4? 3: 1,
    };

    const handleButtonClick = () => {
      mutate(requestUpdate);
      window.location.reload();
  };

  return (
    <div>
        <CustomButton
                fontColor="#FFFFFF"
                backgroundColor="primary"
                fontColorHover="#FFFFFF"
                backgroundColorHover="primary"
                label="Revoke"
                onClick={handleButtonClick}
                disabled={progress?.id === 1? true : false}
              />
    </div>
  )
}

export default RequestPUTReverse;