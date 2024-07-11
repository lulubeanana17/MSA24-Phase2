import React from 'react';
import Text from "./Text.style";

interface ColorTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  className: string;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  children: React.ReactNode;
}

const CustomText = ({ className, color, children }: ColorTextProps) => {
  return (
    <Text className={className} color={color}>
      {children}
    </Text>
  );
};

export default CustomText;
