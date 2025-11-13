import { Star, MapPin, ChevronDown } from "lucide-react";
import { IoArrowBackSharp } from "react-icons/io5";
import SuccessModal from "../../components/modal/successModal";
import { useState } from "react";

export default function CheckoutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className=" bg-white">
      <div className=" mx-auto pt-6 px-6">
        {/* Top: Back and Title */}
        <div
          className="flex items-center gap-1 mb-4 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <button className="p-2 rounded-full hover:bg-gray-100">
            <IoArrowBackSharp className="w-6 h-6 text-[#183C3C]" />
          </button>
          <h2 className="text-[32px] font-semibold text-[#183C3C]">Checkout</h2>
        </div>

        {/* Doctor Card */}
        <div className="flex items-center justify-between rounded-[16px] bg-white shadow-[0_0_24px_0_rgba(16,30,54,0.08)] px-5 py-3 mb-4">
          <div className="flex items-center gap-4">
            <img
              src="/avatar/checkout-avatar.png"
              alt="Doctor"
              className="w-[110px] h-[110px] object-cover rounded-[12px]"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[18px] text-[#183C3C]">
                Adam brew
              </span>
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-[#FFC72C]" />
                <span className="text-[15px] text-[#636363] font-semibold">
                  4.8
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00A79D]" />
                <span className="text-[14px] text-[#9CA3AF] font-medium">
                  1234 Main St, Anytown.
                </span>
              </div>
            </div>
          </div>
          <div className="font-semibold text-[22px] text-[#0D2F2F]">
            $40
            <span className="text-[16px] font-medium text-[#636363]">/h</span>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-[16px] bg-[#F3F3F3] px-8 py-5 mb-7 flex flex-col gap-2">
          <div className="flex justify-between mb-1">
            <span className="text-[16px] text-[#232323]">Rates</span>
            <span className="text-[16px] text-[#232323] font-semibold">
              $5
              <span className="text-[14px] font-medium text-[#636363]">/h</span>
            </span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="text-[16px] text-[#232323]">Fee</span>
            <span className="text-[16px] text-[#232323] font-semibold">$2</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[18px] text-[#232323] font-bold">Total</span>
            <span className="text-[18px] text-[#183C3C] font-extrabold">
              $7
              <span className="text-[14px] font-semibold text-[#636363]">
                /h
              </span>
            </span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <label className="block text-[#008080] text-[16px] font-semibold mb-2">
            Select Payment Method
          </label>
          <div className="relative">
            <select
              className="w-full h-[44px] bg-[#F3F4F7] border-none rounded-[8px] pl-4 pr-10 text-[#232323] text-[16px] font-medium appearance-none"
              defaultValue=""
            >
              <option
                value=""
                disabled
              >
                Select
              </option>
              <option value="stripe">Stripe</option>
              <option value="paypal">PayPal</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#636363] w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Request Assignment Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setModalOpen(true)}
            className="w-[240px] h-[44px] rounded-[10px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white text-[17px] font-semibold shadow-[0_0_15.6px_0_rgba(0,0,0,0.10)]"
          >
            Request Assignment
          </button>
        </div>
      </div>
      <SuccessModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Request Sent"
        imageSrc="/modalIcon.svg"
        buttonText="Done"
      />
    </div>
  );
}
