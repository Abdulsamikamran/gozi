import React, { useState } from "react";

const PAYMENT_OPTIONS = [
  {
    label: "Stripe",
    icon: (
      <img
        src="/stripe.svg"
        alt="Stripe"
        className="h-6"
      />
    ),
  },
  {
    label: "Mastercard",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
        alt="Mastercard"
        className="h-6"
      />
    ),
  },
  {
    label: "Visa",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
        alt="Visa"
        className="h-6"
      />
    ),
  },
];

export default function AddPaymentMethod() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mx-auto px-4 pt-7 pb-20">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-[#183C3C] mb-4">Wallet</h1>

      {/* Payment Type */}
      <div className="flex w-full  gap-6 mb-7">
        {PAYMENT_OPTIONS.map((opt, i) => (
          <button
            key={opt.label}
            onClick={() => setSelected(i)}
            className={`w-full h-[100px] flex flex-col items-center justify-center bg-white rounded-xl shadow-[0_0_18px_0_rgba(16,30,54,0.08)] border transition-all
              ${
                selected === i
                  ? "border-2 border-[#008080]"
                  : "border border-transparent opacity-90"
              }
            `}
          >
            {opt.icon}
            <span
              className={`mt-2 text-[16px] font-semibold ${
                selected === i ? "text-[#008080]" : "text-gray-500"
              }`}
            >
              {opt.label}
            </span>
          </button>
        ))}
      </div>

      {/* Card Details Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mt-10">
        {/* Card number */}
        <div>
          <label className="block text-[#008080] text-[18px] font-semibold mb-3">
            Card number
          </label>
          <input
            className="w-full rounded-md border-none bg-[#F3F3F3] text-gray-500 px-4 py-2 text-base"
            placeholder="Card number"
            type="text"
          />
        </div>
        {/* Card holder name */}
        <div>
          <label className="block text-[#008080] text-[18px] font-semibold mb-3">
            Card holder name
          </label>
          <input
            className="w-full rounded-md border-none bg-[#F3F3F3] text-gray-500 px-4 py-2 text-base"
            placeholder="Name"
            type="text"
          />
        </div>
        {/* Expiry date */}
        <div>
          <label className="block text-[#008080] text-[18px] font-semibold mb-3">
            Expiry date
          </label>
          <input
            className="w-full rounded-md border-none bg-[#F3F3F3] text-gray-500 px-4 py-2 text-base"
            placeholder="DD-MM-YYYY"
            type="text"
          />
        </div>
        {/* CVV */}
        <div>
          <label className="block text-[#008080] text-[18px] font-semibold mb-3">
            CVV
          </label>
          <input
            className="w-full rounded-md border-none bg-[#F3F3F3] text-gray-500 px-4 py-2 text-base"
            placeholder="Address"
            type="text"
          />
        </div>
        {/* Shipment address */}
        <div className="col-span-1 md:col-span-1">
          <label className="block text-[#008080] text-[18px] font-semibold mb-3">
            Shipment address
          </label>
          <input
            className="w-full rounded-md border-none bg-[#F3F3F3] text-gray-500 px-4 py-2 text-base"
            placeholder="Address"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}
