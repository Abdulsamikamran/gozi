import React, { useState } from "react";
import {
  CalendarDays,
  MessageCircle,
  Phone,
  Video,
  User,
  Search,
  Clock,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { ReviewsCard } from "../../components/cards/reviewCard";
import { useNavigate } from "react-router-dom";

// Dummy Data (replace with props/api)
const doctor = {
  name: "Dr.Janefa Cooper",
  avatar: "/avatar/doc.png", // swap with your asset
  rating: 4.8,
  distance: "2KM",
  licensure: true,
  patients: 500,
  rate: 5,
  about:
    "I'm Dr. Janefa Cooper, a dedicated and compassionate medical professional committed to providing personalized, evidence-based care to every patient. With years of clinical experience and a deep passion for promoting health and wellness, I focus on building trust and empowering individuals to take charge of their health. Whether guiding patients through complex treatments or offering preventive care, I strive to make every interaction meaningful and supportive.",
  license: [
    "Caregiver Training Certificate",
    "First Aid & CPR Certification",
    "Home Care Aide (HCA) Registration",
    "Certified Nursing Assistant (CNA) License (optional)",
    "Home Health Aide (HHA) Certification (optional)",
    "Background Check Clearance",
    "TB Test & Immunization Record",
  ],
  reviews: [
    {
      user: "Adam brew",
      rating: 4.8,
      text: "Janefa was incredibly kind and attentive to my mother’s needs. She went above and beyond to make sure she was comfortable and safe every day. Truly a blessing!Janefa was incredibly kind and attentive to my mother’s needs. She went above and beyond to make sure she was comfortable and safe every day. Truly a blessing!",
    },
    {
      user: "Adam brew",
      rating: 4.8,
      text: "Professional, punctual, and compassionate. Dr. Janefa treated my elderly father with great respect and care. Highly recommend her services!",
    },
    {
      user: "Adam brew",
      rating: 4.8,
      text: "We felt at ease knowing Janefa was taking care of our grandmother. She's knowledgeable, patient, and always keeps us updated. Wonderful experience.",
    },
  ],
  availability: "Aug 22,2025 • 10:00 AM - 12:00PM",
};

const slots = [
  { time: "1:20 PM", disabled: false },
  { time: "1:20 PM", disabled: false },
  { time: "1:20 PM", disabled: false },
  { time: "1:20 PM", disabled: true },
];

export default function DrProfilePage() {
  const [tab, setTab] = useState("info");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main */}
      <div className="w-full mx-auto py-6 px-8 flex flex-col gap-4">
        {/* Doctor Info + Actions */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Profile */}
          <div className="flex flex-col md:flex-row md:items-center gap-5 flex-1">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-40 h-40 rounded-full object-cover  shadow-md"
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-semibold">{doctor.name}</h2>
              </div>
              <div className="flex flex-row gap-6">
                <span
                  className="flex items-center gap-1 px-4 py-1 rounded-full bg-white text-gray-700 text-xs"
                  style={{
                    boxShadow: "0 0 15.6px 0 rgba(0,0,0,0.10)",
                  }}
                >
                  <FaStar className="w-4 h-4 text-black" />
                  {doctor.rating}
                </span>
                <span
                  className="flex items-center gap-1 px-4 py-1 rounded-full bg-white text-gray-700 text-xs"
                  style={{
                    boxShadow: "0 0 15.6px 0 rgba(0,0,0,0.10)",
                  }}
                >
                  <FaMapMarkerAlt className="w-4 h-4 text-black" />
                  {doctor.distance}
                </span>
                <span
                  className="px-4 py-1 rounded-full bg-white text-[#0D2F2F] text-xs font-medium"
                  style={{
                    boxShadow: "0 0 15.6px 0 rgba(0,0,0,0.10)",
                  }}
                >
                  Licensure
                </span>
              </div>
              <div className="flex items-center gap-4 mt-3 w-full">
                <div className="w-full text-center bg-[#F3F3F3] p-4 rounded-[12px]">
                  <div className="text-lg font-bold">{doctor.patients}</div>
                  <div className="text-xs text-gray-500">Patients</div>
                </div>
                <div className="w-full text-center  bg-[#F3F3F3] p-4 rounded-[12px]">
                  <div className="text-lg font-bold">${doctor.rate}/h</div>
                  <div className="text-xs text-gray-500">Rates</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Availability & Actions */}
          <div className="flex flex-col items-end gap-4 min-w-[250px]">
            <button className="flex gap-4 items-center px-4 py-2 rounded-[16px] bg-[#008080] border border-gray-200 text-white font-semibold shadow-sm max-w-[170px]">
              Chat
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0642 14.2238C20.0571 12.093 20.2676 9.68048 19.6587 7.4099C19.0499 5.13933 17.6605 3.15584 15.7347 1.80774C13.8088 0.459628 11.4696 -0.166914 9.12779 0.0381257C6.78595 0.243166 4.59121 1.26668 2.92894 2.92894C1.26668 4.59121 0.243166 6.78595 0.0381257 9.12779C-0.166914 11.4696 0.459628 13.8088 1.80774 15.7347C3.15584 17.6605 5.13933 19.0499 7.4099 19.6587C9.68048 20.2676 12.093 20.0571 14.2238 19.0642L17.7448 19.9438C18.0486 20.0196 18.3668 20.0156 18.6686 19.9319C18.9703 19.8483 19.2452 19.688 19.4666 19.4666C19.688 19.2452 19.8483 18.9703 19.9319 18.6686C20.0156 18.3668 20.0196 18.0486 19.9438 17.7448L19.0642 14.2238ZM6.39826 11.839C6.03957 11.839 5.68894 11.7326 5.3907 11.5333C5.09246 11.334 4.86001 11.0508 4.72275 10.7194C4.58548 10.388 4.54957 10.0234 4.61954 9.67158C4.68952 9.31978 4.86225 8.99664 5.11588 8.74301C5.36951 8.48937 5.69266 8.31665 6.04445 8.24667C6.39625 8.17669 6.7609 8.21261 7.09228 8.34987C7.42367 8.48714 7.70691 8.71959 7.90618 9.01783C8.10546 9.31607 8.21182 9.6667 8.21182 10.0254C8.21182 10.5064 8.02075 10.9677 7.68064 11.3078C7.34053 11.6479 6.87925 11.839 6.39826 11.839ZM13.6525 11.839C13.2938 11.839 12.9432 11.7326 12.645 11.5333C12.3467 11.334 12.1143 11.0508 11.977 10.7194C11.8397 10.388 11.8038 10.0234 11.8738 9.67158C11.9438 9.31978 12.1165 8.99664 12.3701 8.74301C12.6238 8.48937 12.9469 8.31665 13.2987 8.24667C13.6505 8.17669 14.0152 8.21261 14.3465 8.34987C14.6779 8.48714 14.9612 8.71959 15.1604 9.01783C15.3597 9.31607 15.4661 9.6667 15.4661 10.0254C15.4661 10.5064 15.275 10.9677 14.9349 11.3078C14.5948 11.6479 14.1335 11.839 13.6525 11.839Z"
                  fill="white"
                />
              </svg>
            </button>

            <div className="flex gap-4 items-center w-full max-w-[420px] rounded-[20px] px-5 py-4 bg-gradient-to-r from-[#115B8A] to-[#008080] shadow-[0_0_15.6px_0_rgba(0,0,0,0.10)] mb-1">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 1.5C33.6491 1.5 37.7733 1.50156 40.9932 1.8291C44.1876 2.15409 46.3255 2.78738 48.0557 3.94336C49.6389 5.00126 50.9987 6.36108 52.0566 7.94434C53.2126 9.67448 53.8459 11.8124 54.1709 15.0068C54.4984 18.2267 54.5 22.3509 54.5 28C54.5 33.6491 54.4984 37.7733 54.1709 40.9932C53.8459 44.1876 53.2126 46.3255 52.0566 48.0557C50.9987 49.6389 49.6389 50.9987 48.0557 52.0566C46.3255 53.2126 44.1876 53.8459 40.9932 54.1709C37.7733 54.4984 33.6491 54.5 28 54.5C22.3509 54.5 18.2267 54.4984 15.0068 54.1709C11.8124 53.8459 9.67448 53.2126 7.94434 52.0566C6.36108 50.9987 5.00126 49.6389 3.94336 48.0557C2.78738 46.3255 2.15409 44.1876 1.8291 40.9932C1.50156 37.7733 1.5 33.6491 1.5 28C1.5 22.3509 1.50156 18.2267 1.8291 15.0068C2.15409 11.8124 2.78738 9.67448 3.94336 7.94434C5.00126 6.36108 6.36108 5.00126 7.94434 3.94336C9.67448 2.78738 11.8124 2.15409 15.0068 1.8291C18.2267 1.50156 22.3509 1.5 28 1.5Z"
                  fill="#008080"
                  stroke="#8EBDBD"
                  stroke-width="3"
                />
                <path
                  d="M36.9583 20.9723V20.75C36.9583 18.7478 35.3355 17.125 33.3333 17.125C31.3311 17.125 29.7083 18.7478 29.7083 20.75H27.2917C27.2917 18.7478 25.6689 17.125 23.6667 17.125C21.6645 17.125 20.0417 18.7478 20.0417 20.75V20.9723C18.6388 21.4738 17.625 22.8018 17.625 24.375V35.25C17.625 37.2486 19.2514 38.875 21.25 38.875H35.75C37.7486 38.875 39.375 37.2486 39.375 35.25V24.375C39.375 22.8018 38.3612 21.4738 36.9583 20.9723ZM32.125 20.75C32.125 20.083 32.6651 19.5417 33.3333 19.5417C34.0015 19.5417 34.5417 20.083 34.5417 20.75V23.1667C34.5417 23.8337 34.0015 24.375 33.3333 24.375C32.6651 24.375 32.125 23.8337 32.125 23.1667V20.75ZM22.4583 20.75C22.4583 20.083 22.9985 19.5417 23.6667 19.5417C24.3349 19.5417 24.875 20.083 24.875 20.75V23.1667C24.875 23.8337 24.3349 24.375 23.6667 24.375C22.9985 24.375 22.4583 23.8337 22.4583 23.1667V20.75ZM36.9583 35.25C36.9583 35.9158 36.417 36.4583 35.75 36.4583H21.25C20.583 36.4583 20.0417 35.9158 20.0417 35.25V28H36.9583V35.25Z"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col gap-2 text-white">
                Earliest Availability
                <span className=" font-semibold text-xs">
                  {doctor.availability}
                </span>
              </div>
              <ChevronRight className="w-7 h-7 text-white ml-4" />
            </div>
            <button
              onClick={() => navigate("/dashboard/schedule-interview")}
              className="cursor-pointer w-full px-4 py-4 rounded-[16px] bg-gradient-to-r from-[#115B8A] to-[#008080] shadow-[0_0_15.6px_0_rgba(0,0,0,0.10)]  text-white font-semibold hover:bg-[#026C68] transition"
            >
              Schedule Interview
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-200 ">
          <button
            className={`px-6 py-2 font-semibold text-gray-700 transition ${
              tab === "info"
                ? "border-b-2 border-[#007C79] text-[#007C79]"
                : "hover:text-[#007C79]"
            }`}
            onClick={() => setTab("info")}
          >
            Information
          </button>
          <button
            className={`px-6 py-2 font-semibold text-gray-700 transition ${
              tab === "schedule"
                ? "border-b-2 border-[#007C79] text-[#007C79]"
                : "hover:text-[#007C79]"
            }`}
            onClick={() => setTab("schedule")}
          >
            Schedule
          </button>
        </div>

        {/* Tab Content */}
        {tab === "info" ? (
          <div className="grid md:grid-cols-1 gap-8 ">
            {/* Left: About/License */}
            <div>
              <h3 className="text-[22px] font-[600] leading-[20px] mb-2 text-[#183C3C]">
                About Me
              </h3>
              <p className="text-[#7F7F7F] text-[14px] mb-5">{doctor.about}</p>
              <h3 className="text-[22px] font-[600] leading-[20px] mb-2">
                License
              </h3>
              <ul className="list-disc pl-6 text-[#7F7F7F] text-[14px] space-y-1">
                {doctor.license.map((lic, i) => (
                  <li key={i}>{lic}</li>
                ))}
              </ul>
            </div>
            {/* Right: Reviews */}
            <ReviewsCard reviews={doctor.reviews} />
          </div>
        ) : (
          // Schedule tab
          <div className="w-full mx-auto">
            <div className="flex w-full flex-row items-center justify-between">
              <h3 className="font-semibold text-[22px] text-[#183C3C] mb-1">
                Calendar
              </h3>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-full bg-[#008080] text-white text-sm font-semibold shadow-sm transition">
                  Once
                </button>
                <button className="px-4 py-2 rounded-full bg-[#F3F4F7] text-[#232323] text-sm font-semibold">
                  Repeat
                </button>
              </div>
            </div>
            <div className="bg-white rounded-[28px] py-3">
              {/* Date row */}
              <div className="flex flex-col md:flex-row md:items-center w-full gap-3 mb-8">
                {/* Select Date */}
                <div className="flex-1 min-w-[180px]">
                  <div className="bg-[#F3F4F7] flex justify-between items-center rounded-[18px] px-5 py-3 w-full text-[#232323] font-medium text-[16px]">
                    Select Date
                    <button className="flex items-center gap-2 ml-2 px-3 py-2 rounded-full bg-[#F3F4F7] text-[#232323] text-sm font-semibold">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="3"
                          fill="#EAF7F6"
                          stroke="#43A7AE"
                          strokeWidth="2"
                        />
                        <rect
                          x="7"
                          y="8"
                          width="10"
                          height="8"
                          rx="2"
                          fill="#43A7AE"
                        />
                      </svg>
                      Jan, 2025
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Once/Repeat */}

                {/* Month Selector */}
              </div>

              {/* Slots */}
              <h4 className="font-semibold text-[22px] text-[#183C3C] mb-2">
                Select time slots
              </h4>
              <div className="flex flex-col gap-4">
                <button className="flex items-center gap-3 w-full px-5 py-4 rounded-[14px] border border-[#43A7AE] bg-[#F3F4F7] text-[16px] font-semibold text-[#115B8A] transition">
                  <svg
                    className="w-5 h-5 text-[#43A7AE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#43A7AE"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6v6l4 2"
                      stroke="#43A7AE"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>1:20 PM</span>
                </button>
                <button className="flex items-center gap-3 w-full px-5 py-4 rounded-[14px] border border-transparent bg-[#F3F4F7] text-[16px] font-semibold text-[#232323] transition hover:border-[#43A7AE]">
                  <svg
                    className="w-5 h-5 text-[#232323]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#232323"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6v6l4 2"
                      stroke="#232323"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>1:20 PM</span>
                </button>
                <button className="flex items-center gap-3 w-full px-5 py-4 rounded-[14px] border border-transparent bg-[#F3F4F7] text-[16px] font-semibold text-[#232323] transition hover:border-[#43A7AE]">
                  <svg
                    className="w-5 h-5 text-[#232323]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#232323"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6v6l4 2"
                      stroke="#232323"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>1:20 PM</span>
                </button>
                <button
                  disabled
                  className="flex items-center gap-3 w-full px-5 py-4 rounded-[14px] border border-transparent bg-[#F3F4F7] text-[16px] font-semibold text-gray-400 cursor-not-allowed"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="gray"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6v6l4 2"
                      stroke="gray"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>1:20 PM</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
