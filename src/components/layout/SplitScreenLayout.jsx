import React from "react";
import { useNavigate } from "react-router-dom";

import hero from "../../assets/images/auth-hero.svg";
import Logo from "../ui/Logo";

const SplitScreenLayout = ({ children, showBackButton = false }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full overflow-hidden ">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col overflow-y-auto hide-scrollbar  pb-12">
        {/* Header with Back Button */}
        <div className="p-3 lg:pt-8 lg:px-8">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Go back"
              >
                <img src="/assets/icons/back-arrow.svg" alt="" />
              </button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center flex-1 px-6 md:px-20 lg:px-28   gap-10 ">
          <Logo />
          <div className="w-full">{children}</div>
        </div>
      </div>

      {/* Right Side - Image (Hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={hero}
          alt="Healthcare professional"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SplitScreenLayout;
