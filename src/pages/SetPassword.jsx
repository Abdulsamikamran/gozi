import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplitScreenLayout from "../components/layout/SplitScreenLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const SetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Setting new password");
      // Navigate to success page
      navigate("/password-success");
    }
  };

  return (
    <SplitScreenLayout showBackButton>
      <div className="space-y-8">
        <div>
          <h1 className="text-[46px] font-bold text-gray-900 mb-2">
            Set password
          </h1>
          <p className="text-gray-600">
            Create a password to secure your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Enter new password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            showPasswordToggle
            required
          />

          <Input
            label="Re-enter new password"
            type="password"
            name="confirmPassword"
            placeholder="Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            showPasswordToggle
            required
          />
          <div className="flex justify-center">
            <Button type="submit" size="lg">
              Create
            </Button>
          </div>
        </form>
      </div>
    </SplitScreenLayout>
  );
};

export default SetPassword;
