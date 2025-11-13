import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-medium rounded-[12px] transition-all duration-200   focus:outline-none focus:ring-2 cursor-pointer focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#115B8A] to-teal-600 hover:bg-teal-600 w-[470px] text-white focus:ring-teal-700",
    secondary:
      "bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 focus:ring-teal-500",
    outline:
      "bg-transparent  text-white border border-white focus:ring-teal-700",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
