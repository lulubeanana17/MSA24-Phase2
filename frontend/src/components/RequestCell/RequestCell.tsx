import RequestCellContainer from "./RequestCell.style";
import Text from "../Text/Text";

interface requestCellProps {
    borderColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  title: string;
  location: string;
  detail?: string;
  urgency: string;
  department: string;
  progress: string;
  startTime: string;
}

const CustomRequestCell = ({borderColor, title, location, detail, urgency, department, progress, startTime}: requestCellProps) => {
    return (
        <RequestCellContainer borderColor={borderColor}>
            <Text className="Text-title" color="secondary" children={title} />
            <Text className="Text" color="success" children={location} />
            <Text className="Text" color="secondary" children={detail? detail : "N/A"} />
            <Text className="Text" color="success" children={urgency} />
            <Text className="Text" color="success" children={department} />
            <Text className="Text" color="success" children={startTime} />
            <Text className="Text-progress" color="warning" children={progress} />
        </RequestCellContainer>
    )
}

export default CustomRequestCell;