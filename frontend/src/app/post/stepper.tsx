"use client";

import * as React from "react";
import { MainContainer } from "./stepper.style";
import { RequestDetail } from "./detail/Detail";
import { RequestReview } from "./review/Review";
import { RequestConfirmation } from "./confirmation/Confirmation";
import InputStringCheck from "@/components/Hooks/InputStringCheck";
import InputNumberCheck from "@/components/Hooks/InputNumberCheck";
import Link from "next/link";
import Text from "@/components/Text/Text";
import Stepper from "@/components/Stepper/Stepper";
import Button from "@/components/Button/Button";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { resetForm } from "@/redux/slice";

import useRequestPOST from "@/feature/post/hooks/useRequestPOST";

export const StepperPage = () => {
  const steps = ["Detail", "Review"];
  const [currentStep, setCurrentStep] = React.useState(0);
  const [inputCheck, setInputCheck] = React.useState(false);
  const dispatch = useAppDispatch();
  const formState = useAppSelector((state) => state.form);
  const { mutate } = useRequestPOST();

  const requestPost = {
    title: formState.title,
    location: formState.location,
    detail: formState.detail,
    urgencyId: formState.urgencyId,
    departmentId: formState.departmentId,
    progressId: formState.progressId,
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNext = () => {
    if (
      InputStringCheck(formState.title) &&
      InputStringCheck(formState.location) &&
      InputNumberCheck(formState.urgencyId) &&
      InputNumberCheck(formState.departmentId)
    ) {
      setCurrentStep(currentStep + 1);
      setInputCheck(false);
    } else {
      setInputCheck(true);
    }
  };

  const handleSubmit = () => {
    mutate(requestPost, {
      onSuccess: () => {
        setCurrentStep(currentStep + 1);
      },
    });
  };

  const handleReset = () => {
    dispatch(resetForm());
    setCurrentStep(0);
  };

  return (
    <MainContainer>
      <Text className="header" color="primary" children="Post A Request" />
      <Stepper className="stepper" activeStep={currentStep} steps={steps} />

      {currentStep === 0 ? (
        <RequestDetail value={inputCheck} />
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
        <div className="postmore">
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
        </div>
      )}
    </MainContainer>
  );
};
