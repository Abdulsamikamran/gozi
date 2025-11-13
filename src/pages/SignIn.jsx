import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplitScreenLayout from "../components/layout/SplitScreenLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import SocialLogin from "../components/auth/SocialLogin";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in:", formData);
    // Navigate to two-step verification
    navigate("/two-step-verification");
  };

  return (
    <SplitScreenLayout showBackButton>
      <div className="space-y-6">
        <div>
          <h1 className="text-[46px] font-bold text-gray-900 mb-2">
            Sign in to Gavari
          </h1>
          <p className="text-gray-600">
            Sign in now to join Gavari trusted community of families and care
            partners.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
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
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            showPasswordToggle
            required
          />

          <div className="flex items-center px-20 justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="relative w-4 h-4 appearance-none border-2 border-gray-300 rounded-full cursor-pointer
    checked:bg-[#00807f] checked:border-[#00807f] focus:ring-0
    before:absolute before:inset-0 before:flex before:items-center before:justify-center
    before:content-[''] before:w-2.5 before:h-2.5
   checked:before:text-[10px]
    checked:before:[--tw-text-opacity:1] 
  
    checked:before:!text-white!"
              />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>

            <button
              type="button"
              onClick={() => navigate("/reset-password")}
              className="text-xs text-gray-600 hover:text-teal-600 transition-colors"
            >
              Forgot Password?
            </button>
          </div>
          <div className="px-20 flex justify-center">
            <Button
              type="submit"
              size="lg"
            >
              Sign in
            </Button>
          </div>
        </form>

        <div className="text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <button
            onClick={() => navigate("/sign-up")}
            className="text-teal-600 font-medium hover:text-teal-700"
          >
            Sign up
          </button>
        </div>

        <SocialLogin />

        <div className="pt-6">
          <p className="text-center text-teal-600 font-bold text-lg mb-4">
            Download the App
          </p>
          <div className="flex gap-4 justify-center">
            <img
              src="assets/icons/playstore.svg"
              alt="Get it on Google Play"
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="assets/icons/appstore.svg"
              alt="Download on the App Store"
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </SplitScreenLayout>
  );
};

export default SignIn;
