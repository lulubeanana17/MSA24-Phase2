import React from "react";
import Stepper from "./Stepper.style";
import Step from "./Step";
import { StepperProps as MuiStepperProps } from "@mui/material";

interface StepperProps extends MuiStepperProps {
    steps: Array<string>;
}

const CustomStepper = ({steps, ...props}: StepperProps) => {
    return (
        <Stepper {...props}>
            {steps.map((s) => <Step label={s} />)}
        </Stepper>
    )
}

export default CustomStepper;