import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const transactions = Array(7).fill({
  title: "Booking - Janefa Cooper",
  date: "Jan 25, 2025",
  amount: 35.0,
});

const WalletTransactionsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto pt-6 px-6">
      <div
        className="flex items-center gap-1 mb-7 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <button className="p-2 rounded-full hover:bg-gray-100">
          <IoArrowBackSharp className="w-6 h-6 text-[#183C3C]" />
        </button>
        <h2 className="text-[32px] font-semibold text-[#183C3C]">
          Previous Transactions
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        {transactions.map((txn, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-[0_0_18px_0_rgba(16,30,54,0.08)] flex items-center justify-between px-7 py-4"
          >
            <div>
              <div className="font-[16px] font-[600] text-[#0D2F2F] mb-2">
                {txn.title}
              </div>
              <div className="text-[#7F7F7F] text-[12px]">{txn.date}</div>
            </div>
            <div>
              <span className="px-2 py-2 rounded-[12px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white font-semibold text-lg">
                ${txn.amount.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletTransactionsPage;
