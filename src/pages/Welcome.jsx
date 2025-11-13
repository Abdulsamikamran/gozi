import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/ui/Logo";
import Button from "../components/ui/Button";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-teal-600">
      {/* Left Side - Welcome Content */}
      <div className="w-full flex-1 flex flex-col justify-center items-center  text-white">
        <div className="max-w-md w-full flex flex-col justify-center items-center space-y-8">
          <img
            src="/assets/images/full-logo.svg"
            alt="logo"
          />

          <p className="text-lg leading-relaxed text-center ">
            Gavari is a modern caregiver marketplace that makes it simple for
            families to find trusted, vetted caregivers—fast and seamlessly.
            Once you enter in your information, we will connect you with
            caregivers that match your needs.
          </p>

          <div className="space-y-4 w-full pt-4">
            <Button
              variant="outline"
              fullWidth
              size="lg"
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </Button>

            <Button
              variant="secondary"
              fullWidth
              size="lg"
              onClick={() => navigate("/sign-up")}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - Image (Hidden on mobile) */}
      <div className="hidden lg:block flex-1   relative">
        <img
          src="/assets/images/auth-hero.svg"
          alt="Healthcare professional with clipboard"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Welcome;
