import React, { FunctionComponent } from 'react';
import { StepIconProps as MuiStepIconProps, StepLabel } from '@mui/material';
import { StepProps as MuiStepProps } from '@mui/material';
import clsx from 'clsx';
import StyledStep from './Step.style';

interface StepProps extends MuiStepProps {
  label: string;
}

const Step = ({label, ...props}: StepProps) => (
  <StyledStep {...props}>
    <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
  </StyledStep>
);

const StepIcon = (props: MuiStepIconProps) => (
  <div>
    <div
      className={clsx('MuiStepIcon-container', {
        'MuiStepIcon-active': props.active,
        'MuiStepIcon-completed': props.completed,
        'MuiStepIcon-disabled': !props.completed && !props.active
      })}></div>
  </div>
);

export default Step;
