import React from "react";

const Logo = ({ size, className = "" }) => {
  return (
    <div
      className={`flex w-full justify-center items-center  ${className} ${
        size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10"
      }`}
    >
      <img src="/assets/images/logo.svg" alt="" />
    </div>
  );
};

export default Logo;
