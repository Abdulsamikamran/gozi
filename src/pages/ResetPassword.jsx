import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplitScreenLayout from "../components/layout/SplitScreenLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Reset password for:", email);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to set password page
      navigate("/otp");
    }, 1000);
  };

  return (
    <SplitScreenLayout showBackButton>
      <div className="space-y-8">
        <div>
          <h1 className="text-[46px] font-bold text-gray-900 mb-2">
            Reset password
          </h1>
          <p className="text-gray-600">
            We'll send you a link to create a new password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <Input
            label="Enter email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className=" flex justify-center">
            <Button disabled={isSubmitting} type="submit" size="lg">
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </SplitScreenLayout>
  );
};

export default ResetPassword;
