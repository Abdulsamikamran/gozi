import React from "react";

const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  rows = 4,
  className = "",
  name,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-teal-600 font-medium mb-2 text-sm">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-lg
          bg-gray-100 
          border border-transparent
          focus:bg-white focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          resize-none
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : ""
          }
          ${className}
        `}
        {...props}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;
