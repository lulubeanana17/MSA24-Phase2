"use client";

import { requestsType } from "@/feature/browse/types/requestsType";
import { progressType } from "@/feature/browse/types/progressType";
import CustomButton from "@/components/Button/Button";
import useRequestPUT from "@/feature/browse/hooks/useRequestPUT";

interface requestPUTProps {
    data: requestsType | undefined;
  progress: progressType | undefined;
}

const RequestPUT = ({data, progress}: requestPUTProps) => {
    const { mutate } = useRequestPUT();
    const requestUpdate = {
        id: data?.id,
        title: data?.title,
        location: data?.location,
        detail: data?.detail,
        progressId: progress?.id === 1? 3 : progress?.id === 3? 4: 4,
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
                label={progress?.id === 1? "Start" : progress?.id === 3? "Complete" : progress?.id === 4? "Completed" : "Error"}
                onClick={handleButtonClick}
                disabled={progress?.id === 4? true : false}
              />
    </div>
  )
}

export default RequestPUT;