import React, { memo } from "react";
import If from "@/shared/ui/atom/If";
import { VerificationStepProps } from "../../types";
import VerifyOtpStep from "./VerifyOtpStep";
import CompleteDetailsStep from "./CompleteDetailsStep";

const VerificationStep: React.FC<VerificationStepProps> = ({
  subStep,
  otp,
  complete,
}) => {
  return (
    <>
      <If condition={subStep === "otp"}>
        <VerifyOtpStep {...otp} />
      </If>
      <If condition={subStep === "complete"}>
        <CompleteDetailsStep {...complete} />
      </If>
    </>
  );
};

export default memo(VerificationStep);
