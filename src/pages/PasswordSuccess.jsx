import React from "react";
import { useNavigate } from "react-router-dom";
import SplitScreenLayout from "../components/layout/SplitScreenLayout";
import Button from "../components/ui/Button";

const PasswordSuccess = () => {
  const navigate = useNavigate();

  return (
    <SplitScreenLayout showBackButton>
      <div className="space-y-8 text-center">
        <div>
          <h1 className="text-[46px] font-bold text-gray-900 mb-2">
            Password set successfully
          </h1>
          <p className="text-gray-600">
            Your new password is saved. You're good to go.
          </p>
        </div>

        <div className="flex justify-center py-8">
          <img src="assets/images/auth-success-icon.svg" alt="" />
        </div>
        <div className="flex justify-center">
          <Button size="lg" onClick={() => navigate("/")}>
            Done
          </Button>
        </div>
      </div>
    </SplitScreenLayout>
  );
};

export default PasswordSuccess;
