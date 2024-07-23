import styled from 'styled-components';
import { Step as MuiStep , StepProps as MuiStepProps } from '@mui/material';
import theme from '../Theme/Theme';

const StyledStep = styled(MuiStep)<MuiStepProps>`
  .MuiStepIcon {
    &-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      margin: 0 0.5rem;
    }

    &-disabled {
      background-color: #c8c8c8;
    }

    &-active {
      background-color: ${theme.palette["primary"].main};
    }

    &-completed {
      background-color: #c8c8c8;
    }
  }

  .MuiStepLabel-label {
    font-size: 1.25rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0px;
  }
`;

export default StyledStep;
