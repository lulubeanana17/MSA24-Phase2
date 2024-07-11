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
  startTime: string;
}

const CustomRequestCell = ({borderColor, width, height, title, location, detail, urgency, department, startTime}: requestCellProps) => {
    return (
        <RequestCellContainer borderColor={borderColor} width={width} height={height}>
            <Text className="Text-title" color="secondary" children={title} />
            <Text className="Text-location" color="success" children={location} />
            <Text className="Text-detail" color="secondary" children={detail} />
            <Text className="Text-urgency" color="success" children={urgency} />
            <Text className="Text-department" color="success" children={department} />
            <Text className="Text-startTime" color="success" children={startTime} />
        </RequestCellContainer>
    )
}

export default CustomRequestCell;