import styled from 'styled-components';
import { theme } from '../Theme/Theme';

interface StyledTextProps {
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

const StyledText = styled.span<StyledTextProps>`
  color: ${({ color }) => (color && theme.palette[color].main) || "#000000"};
`;

export default StyledText;
