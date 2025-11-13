import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplitScreenLayout from "../components/layout/SplitScreenLayout";
import Button from "../components/ui/Button";
import OTPInput from "../components/auth/OTPInput";

const TwoStepVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isResending, setIsResending] = useState(false);

  const handleOTPComplete = (value) => {
    setOtp(value);
    console.log("OTP entered:", value);
  };

  const handleVerify = () => {
    if (otp.length === 5) {
      console.log("Verifying OTP:", otp);
      // Navigate to dashboard or next step
      navigate("/dashboard");
    }
  };

  const handleResend = () => {
    setIsResending(true);
    console.log("Resending code...");

    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
    }, 1000);
  };

  return (
    <SplitScreenLayout showBackButton>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Two step verification
          </h1>
          <p className="text-gray-600">
            To keep your account secure, Gozi uses two-part authentication.
          </p>
        </div>

        <div className="space-y-10">
          <OTPInput length={5} onComplete={handleOTPComplete} />

          <div className="text-center">
            <span className="text-gray-600">Didn't get any code? </span>
            <button
              onClick={handleResend}
              disabled={isResending}
              className="text-teal-600 font-medium hover:text-teal-700 disabled:opacity-50"
            >
              {isResending ? "Resending..." : "Resend"}
            </button>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleVerify}
              disabled={otp.length !== 5}
              type="submit"
              size="lg"
            >
              Verify
            </Button>
          </div>
        </div>
      </div>
    </SplitScreenLayout>
  );
};

export default TwoStepVerification;
