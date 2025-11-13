import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Card SVG BG (same as before)
const CardSVG = () => (
  <svg
    viewBox="0 0 260 140"
    className="absolute top-0 left-0 w-full h-full rounded-xl"
    style={{ zIndex: 0 }}
  >
    <defs>
      <linearGradient
        id="card-gradient"
        x1="0"
        y1="0"
        x2="220"
        y2="120"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#115B8A" />
        <stop
          offset="1"
          stopColor="#008080"
        />
      </linearGradient>
    </defs>
    <rect
      x="0"
      y="0"
      width="260"
      height="140"
      rx="20"
      fill="url(#card-gradient)"
    />
    <ellipse
      cx="200"
      cy="30"
      rx="35"
      ry="23"
      fill="#ffffff18"
    />
  </svg>
);

export default function PaymentMethod() {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  return (
    <div className=" mx-auto px-4 pt-8 pb-24">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-[#183C3C] mb-3">Wallet</h1>
      <label className="block text-[#008080] font-semibold text-[15px] mb-5 mt-3">
        Select the card to withdraw to
      </label>
      <div className="flex flex-wrap gap-10 items-center">
        {/* Visa Card */}
        <div
          onClick={() => setSelected(0)}
          className={`relative w-[260px] h-[140px] rounded-2xl cursor-pointer shadow-md border transition-all flex flex-col justify-between
            ${
              selected === 0
                ? "border-2 border-[#008080] scale-105"
                : "border border-gray-200 opacity-90"
            }`}
          style={{ zIndex: 2 }}
        >
          <CardSVG />
          <div className="absolute left-7 top-6 z-10">
            <div className="text-white text-[15px] font-semibold">Credit</div>
          </div>
          <div className="absolute left-7 bottom-10 z-10">
            <div className="text-white text-[16px]">Ed Sheeran</div>
            <div className="text-white text-[15px] tracking-widest mt-1">
              4111 - 1111 - 1111 - 1111
            </div>
          </div>
          <div className="absolute right-7 top-6 z-10">
            <div className="text-white text-[22px] font-semibold tracking-widest">
              VISA
            </div>
          </div>
        </div>
        {/* Add New */}
        <div
          className="w-[260px] h-[140px] rounded-2xl border border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#008080] transition group"
          onClick={() => navigate("/settings/payment/add")}
        >
          <span className="text-gray-400 text-xl font-semibold mb-3">
            Add New
          </span>
          <span className="rounded-full border-2 border-gray-400 w-11 h-11 flex items-center justify-center text-2xl text-gray-400 group-hover:border-[#008080] group-hover:text-[#008080] transition">
            +
          </span>
        </div>
      </div>
    </div>
  );
}
