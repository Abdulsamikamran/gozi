import { ChevronLeft, ChevronDown } from "lucide-react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function ScheduleInterviewPage() {
  const navigate = useNavigate();
  return (
    <div className="">
      {/* Top bar (optional, not included here, add if needed) */}

      <div className="mx-auto pt-6 px-6">
        {/* Page Title */}
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

        {/* Preferred Interview Time */}
        <div className="mb-7">
          <label className="block text-[#008080] text-[16px] font-semibold mb-2">
            Preferred Interview Time
          </label>
          <div className="relative">
            <select
              className="w-full h-[44px] bg-[#E9E8E8] border-none rounded-[6px] pl-4 pr-10 text-[#232323] text-[16px] font-medium appearance-none"
              defaultValue=""
            >
              <option
                value=""
                disabled
              >
                Select
              </option>
              <option value="9am">9:00 AM</option>
              <option value="10am">10:00 AM</option>
              <option value="2pm">2:00 PM</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#636363] w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Preferred Interview Day */}
        <div className="mb-12">
          <label className="block text-[#008080] text-[15px] font-semibold mb-3">
            Preferred Interview Day
          </label>
          <div className="flex gap-2">
            <button className="px-2 py-2 rounded-[6px] bg-[#007C79] text-white font-[400] text-sm shadow-sm">
              Sun
            </button>
            <button className="px-2 py-2 rounded-[6px] bg-[#E9E8E8] text-[#232323] font-[400] text-sm">
              Mon
            </button>
            <button className="px-2 py-2 rounded-[6px] bg-[#E9E8E8] text-[#232323] font-[400] text-sm">
              Tue
            </button>
            <button className="px-2 py-2 rounded-[6px] bg-[#E9E8E8] text-[#232323] font-[400] text-sm">
              Wed
            </button>
            <button className="px-2 py-2 rounded-[6px] bg-[#E9E8E8] text-[#232323] font-[400] text-sm">
              Thu
            </button>
            <button className="px-2 py-2 rounded-[6px] bg-[#E9E8E8] text-[#232323] font-[400] text-sm">
              Fri
            </button>
            <button className="px-2 py-2 rounded-[6px] bg-[#E9E8E8] text-[#232323] font-[400] text-sm">
              Sat
            </button>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/dashboard/schedule-interview/success")}
            className=" cursor-pointer w-[200px] h-[44px] rounded-[10px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white text-[17px] font-semibold shadow-[0_0_15.6px_0_rgba(0,0,0,0.10)]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
