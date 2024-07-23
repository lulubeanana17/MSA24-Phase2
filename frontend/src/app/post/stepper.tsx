"use client";

import * as React from "react";
import { MainContainer } from "./stepper.style";
import { RequestDetail } from "./detail/Detail";
import { RequestReview } from "./review/Review";
import { RequestConfirmation } from "./confirmation/Confirmation";
import Link from "next/link";
import Text from "@/components/Text/Text";
import Stepper from "@/components/Stepper/Stepper";
import Button from "@/components/Button/Button";

export const StepperPage = () => {
  const steps = ["Detail", "Review"];
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = () => {
    //post request api
    setCurrentStep(currentStep + 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <MainContainer>
      <Text className="header" color="primary" children="Post A Request" />
      <Stepper className="stepper" activeStep={currentStep} steps={steps} />

      {currentStep === 0 ? (
        <RequestDetail />
      ) : currentStep === 1 ? (
        <RequestReview />
      ) : (
        <RequestConfirmation />
      )}

      {currentStep !== steps.length ? (
        <div className="buttonsContainer">
          <Button
            fontColor="#FFFFFF"
            backgroundColor="primary"
            fontColorHover="#FFFFFF"
            backgroundColorHover="primary"
            label="Back"
            onClick={handleBack}
            disabled={currentStep === 0}
          />

          {currentStep === steps.length - 1 ? (
            <Button
              fontColor="#FFFFFF"
              backgroundColor="primary"
              fontColorHover="#FFFFFF"
              backgroundColorHover="primary"
              label="Submit"
              onClick={handleSubmit}
            />
          ) : (
            <Button
              fontColor="#FFFFFF"
              backgroundColor="primary"
              fontColorHover="#FFFFFF"
              backgroundColorHover="primary"
              label="Next"
              onClick={handleNext}
            />
          )}
        </div>
      ) : (
        <Link className="reset" href={`post`}>
          <Button
            fontColor="#FFFFFF"
            backgroundColor="primary"
            fontColorHover="#FFFFFF"
            backgroundColorHover="primary"
            label="Post more"
            onClick={handleReset}
          />
        </Link>
      )}
    </MainContainer>
  );
};
