import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// Card background SVG
const CardSVG = ({ selected }) => (
  <svg
    viewBox="0 0 220 120"
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
      width="220"
      height="120"
      rx="16"
      fill="url(#card-gradient)"
      opacity={selected ? "1" : "0.75"}
    />
    <ellipse
      cx="180"
      cy="20"
      rx="28"
      ry="18"
      fill="#ffffff10"
    />
  </svg>
);

const cards = [
  {
    name: "Credit",
    owner: "Ed Sheeran",
    number: "4111 - 1111 - 1111 - 1111",
    brand: "VISA",
  },
  {
    name: "Credit",
    owner: "Ed Sheeran",
    number: "4111 - 1111 - 1111 - 1111",
    brand: "VISA",
  },
];

export default function WithdrawMoneyPage() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("10.00");
  const [selectedCard, setSelectedCard] = useState(0);
  const navigate = useNavigate();

  // "K" avatar positioning for each step
  const avatarPositions = [
    "left-[260px] top-[180px]", // Step 1
    "right-[60px] top-[315px]", // Step 2
    "right-[60px] top-[260px]", // Step 3
  ];

  return (
    <div className="w-full min-h-[90vh] bg-white relative px-2 md:px-8 pt-5">
      {/* Back & Title */}
      <div
        className="flex items-center gap-1 mb-7 cursor-pointer"
        onClick={() =>
          step === 1
            ? navigate(-1)
            : setStep((prev) => (prev > 1 ? prev - 1 : prev))
        }
      >
        <button className="p-2 rounded-full hover:bg-gray-100">
          <IoArrowBackSharp className="w-6 h-6 text-[#183C3C]" />
        </button>
        <h2 className="text-[32px] font-semibold text-[#183C3C]">
          Withdraw Money
        </h2>
      </div>

      {/* Step 1: Enter Amount */}
      {step === 1 && (
        <>
          <label className="block text-[16px] font-semibold text-[#008080] mt-3 mb-2">
            Enter withdraw amount
          </label>
          <input
            className="w-full rounded-md border-none bg-[#F3F3F3] text-[#969696] px-4 py-2 text-base mb-7"
            placeholder="$ 10.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            min={1}
          />
          <div className="w-full flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="w-[300px] max-w-[95vw] h-10 rounded-[10px] text-white font-semibold bg-gradient-to-r from-[#115B8A] to-[#008080]"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 2: Select Card */}
      {step === 2 && (
        <>
          <label className="block text-[15px] font-semibold text-[#008080] mt-3 mb-6">
            Select the card to withdraw to
          </label>
          <div className="flex flex-wrap gap-8 mb-6">
            {cards.map((card, i) => (
              <div
                key={i}
                onClick={() => setSelectedCard(i)}
                className={`relative w-[220px] h-[120px] rounded-xl cursor-pointer flex flex-col justify-between shadow-md border transition-all ${
                  selectedCard === i
                    ? "border-2 border-[#008080] scale-120"
                    : "border border-transparent opacity-80"
                }`}
                style={{ zIndex: 2 }}
              >
                <CardSVG selected={selectedCard === i} />
                <div className="absolute left-5 top-4 z-10">
                  <div className="text-white text-[13px] font-semibold">
                    {card.name}
                  </div>
                </div>
                <div className="absolute left-5 bottom-7 z-10">
                  <div className="text-white text-[14px]">{card.owner}</div>
                  <div className="text-white text-[13px] tracking-widest mt-1">
                    {card.number}
                  </div>
                </div>
                <div className="absolute right-5 top-4 z-10">
                  <div className="text-white text-[17px] font-semibold tracking-widest">
                    {card.brand}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={() => setStep(3)}
              className="w-[300px] max-w-[95vw] h-10 rounded-[10px] text-white font-semibold bg-gradient-to-r from-[#115B8A] to-[#008080]"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="flex flex-col items-center mt-24">
          <div className="text-xl font-bold text-[#183C3C] mb-2">
            Amount Sent
          </div>
          <div className="text-md text-[#183C3C] mb-7">
            ${amount} sent to <span className="font-bold">VISA Card</span>
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={() => setStep(1)}
              className="w-[300px] max-w-[95vw] h-10 rounded-[10px] text-white font-semibold bg-gradient-to-r from-[#115B8A] to-[#008080]"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
