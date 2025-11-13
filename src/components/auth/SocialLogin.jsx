import React from "react";

const SocialLogin = () => {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Implement Google OAuth logic here
  };

  const handleAppleLogin = () => {
    console.log("Apple login clicked");
    // Implement Apple OAuth logic here
  };

  return (
    <div className="flex gap-4 justify-center mt-6">
      {/* Google Button */}
      <button
        onClick={handleGoogleLogin}
        className="rounded-2xl cursor-pointer hover:border-teal-600 hover:bg-teal-50 transition-all"
        aria-label="Sign in with Google"
      >
        <img src="/assets/icons/google.svg" alt="" />
      </button>

      {/* Apple Button */}
      <button
        onClick={handleAppleLogin}
        className="rounded-2xl cursor-pointer hover:border-teal-500 hover:bg-teal-50 transition-all"
        aria-label="Sign in with Apple"
      >
        <img src="/assets/icons/apple.svg" alt="" />
      </button>
    </div>
  );
};

export default SocialLogin;
