import React from 'react';
import Text from "./Text.style";

interface ColorTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  children: React.ReactNode;
}

const CustomText = ({ color, children }: ColorTextProps) => {
  return (
    <Text color={color}>
      {children}
    </Text>
  );
};

export default CustomText;
