import { ChevronLeft } from "lucide-react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function EmergencyCall() {
  const navigate = useNavigate();
  const contacts = [
    { id: 1, number: "+1213456879" },
    { id: 2, number: "+1213456879" },
  ];
  return (
    <div className=" bg-white">
      <div className=" mx-auto pt-6 px-4">
        {/* Header */}
        <div
          className="flex items-center gap-1 mb-4 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <button className="p-2 rounded-full hover:bg-gray-100">
            <IoArrowBackSharp className="w-6 h-6 text-[#183C3C]" />
          </button>
          <h2 className="text-[32px] font-semibold text-[#183C3C]">
            Emergency Call
          </h2>
        </div>

        {/* Notification cards */}
        <div className="flex justify-center flex-col gap-10 items-center">
          <img src="/assets/images/call.svg" alt="" />
          <div className="flex gap-4 ">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                {/* Number Badge */}
                <div className="flex items-center  gap-2">
                  <span className="text-2xl font-bold text-gray-800">
                    •{contact.id}
                  </span>

                  {/* Phone Icon */}

                  <img
                    src="/assets/icons/phone-icon.svg"
                    alt="Phone Icon"
                    className="w-6 h-6"
                  />
                </div>

                {/* Contact Info */}
                <div>
                  <div className="text-xl font-semibold text-gray-800 mb-1">
                    {contact.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    Call your this emergency contact no?
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
