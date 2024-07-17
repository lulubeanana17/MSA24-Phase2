import RequestCellContainer from "./RequestCell.style";
import Text from "../Text/Text";

interface requestCellProps {
    borderColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  width: string;
  height: string;
  title: string;
  location: string;
  detail?: string;
  urgency: string;
  department: string;
  progress: string;
  startTime: string;
  onClick?: () => void;
}

const CustomRequestCell = ({borderColor, width, height, title, location, detail, urgency, department, progress, startTime, onClick}: requestCellProps) => {
    return (
        <RequestCellContainer borderColor={borderColor} width={width} height={height} onClick={onClick}>
            <Text className="Text-title" color="secondary" children={title} />
            <Text className="Text-location" color="success" children={location} />
            <Text className="Text-detail" color="secondary" children={detail} />
            <Text className="Text-urgency" color="success" children={urgency} />
            <Text className="Text-department" color="success" children={department} />
            <Text className="Text-startTime" color="success" children={startTime} />
            <Text className="Text-progress" color="warning" children={progress} />
        </RequestCellContainer>
    )
}

export default CustomRequestCell;