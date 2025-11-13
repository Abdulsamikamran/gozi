import React from "react";

const Select = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select",
  name,
  required = false,
  disabled = false,
  error,
  className = "",
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

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full px-4 py-3 rounded-lg
            bg-gray-100 
            border border-transparent
            focus:bg-white focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            appearance-none
            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                : ""
            }
            ${className}
          `}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Dropdown Arrow */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
