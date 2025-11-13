import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplitScreenLayout from "../components/layout/SplitScreenLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import SocialLogin from "../components/auth/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up:", formData);
    // Navigate to profile type selection
    navigate("/select-profile-type");
  };

  return (
    <SplitScreenLayout showBackButton>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Sign up to Gavari
          </h1>
          <p className="text-gray-600">
            Sign up now to join Gavari trusted community of families and care
            partners.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Cell Phone Number"
            type="tel"
            name="phone"
            placeholder="Number"
            value={formData.phone}
            onChange={handleChange}
            showPasswordToggle={false}
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            showPasswordToggle
            required
          />
          <div className="flex justify-center">
            <Button type="submit" size="lg">
              Sign up
            </Button>
          </div>
        </form>

        <div className="text-center">
          <span className="text-gray-600">Already have an account? </span>
          <button
            onClick={() => navigate("/signin")}
            className="text-teal-600 font-medium hover:text-teal-600"
          >
            Sign in
          </button>
        </div>

        <SocialLogin />
      </div>
    </SplitScreenLayout>
  );
};

export default SignUp;
