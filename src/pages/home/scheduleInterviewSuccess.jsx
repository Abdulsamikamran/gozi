import { ChevronLeft } from "lucide-react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function ScheduleInterviewSuccess() {
  const navigate = useNavigate();
  return (
    <div className=" ">
      <div className=" mx-auto pt-6 px-6">
        {/* Top: Back and Title */}
        <div
          className="flex items-center gap-1 mb-7 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <button className="p-2 rounded-full hover:bg-gray-100">
            <IoArrowBackSharp className="w-6 h-6 text-[#183C3C]" />
          </button>
          <h2 className="text-[32px] font-semibold text-[#183C3C]">
            Schedule Interview
          </h2>
        </div>
        {/* Subtext */}
        <div className="text-[#232323] text-[15px] mb-2 ml-11">
          Your interview has been scheduled for{" "}
          <span className="font-semibold text-[#183C3C]">
            Tuesday at 3:10 PM
          </span>
        </div>
        {/* Main illustration & button */}
        <div className="flex flex-col items-center justify-center mt-8 gap-10">
          {/* Illustration */}
          <img
            src="/interview-success.png" // replace with actual image asset path
            alt="Success phone illustration"
            className="w-[248px] h-[340px] object-contain"
          />
          {/* Done button */}
          <div className=" ml-auto flex flex-col justify-center items-center ml-8 mt-16">
            <button
              onClick={() => navigate("/dashboard/schedule-interview/checkout")}
              className="w-[240px] h-[44px] rounded-[10px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white text-[17px] font-semibold shadow-[0_0_15.6px_0_rgba(0,0,0,0.10)]"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
