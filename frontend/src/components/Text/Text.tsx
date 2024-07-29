import React from 'react';
import Text from "./Text.style";

interface ColorTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  className: string;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  limit?: number;
  children: React.ReactNode;
}

const CustomText = ({ className, color, limit, children }: ColorTextProps) => {
  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  const displayText = limit && typeof children === 'string' ? truncateText(children, limit) : children;

  return (
    <Text className={className} color={color}>
      {displayText}
    </Text>
  );
};

export default CustomText;
