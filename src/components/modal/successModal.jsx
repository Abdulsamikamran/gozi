import React from "react";

export default function SuccessModal({
  open,
  onClose,
  title = "Request Sent",
  imageSrc = "/modalIcon.svg",
  buttonText = "Done",
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)]"
      onClick={onClose} // click overlay closes
    >
      <div
        className="bg-white rounded-[32px] px-10 py-8 w-[350px] flex flex-col items-center shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking modal
      >
        <h2 className="text-[22px] font-semibold text-[#183C3C] mb-4 text-center">
          {title}
        </h2>
        <img
          src={imageSrc}
          alt={title}
          className="w-[110px] h-[110px] object-contain mb-7"
        />
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-[10px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white text-[17px] font-semibold shadow-[0_0_15.6px_0_rgba(0,0,0,0.10)]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
