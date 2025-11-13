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

const notes = [
  {
    title: "Prescription",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 10,2025",
  },
  {
    title: "Prescription",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 10,2025",
  },
  {
    title: "Prescription",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 10,2025",
  },
];

const photos = [
  {
    url: "/visit1.png", // Replace with your asset
    title: "Title",
    date: "Jan 10,2025",
  },
  {
    url: "/visit2.png", // Replace with your asset
    title: "Title",
    date: "Jan 10,2025",
  },
];

export default function DrBookingPage() {
  const [tab, setTab] = useState("info");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(4);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main */}
      <div className="w-full mx-auto py-6 px-8 flex flex-col gap-4">
        {/* Doctor Info + Actions */}
        <div className="flex flex-col md:flex-row gap-6 items-end">
          {/* Left: Profile */}
          <div className="flex flex-col md:flex-row md:items-center gap-5 flex-1">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-40 h-40 rounded-full object-cover  shadow-md"
            />
            <div className="flex flex-col gap-4">
              <div className="flex  items-center gap-3">
                <h2 className="text-3xl font-semibold">{doctor.name}</h2>
                <div className="bg-[#008080CC] px-5 py-1 rounded-2xl">
                  <h2 className="text-[16px] text-white font-semibold">
                    Already booked
                  </h2>
                </div>
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
          <div className="flex flex-col items-end gap-4 min-w-[350px]">
            <button
              onClick={() => navigate("/dashboard/schedule-interview")}
              className="cursor-pointer w-full px-4 py-3 rounded-[16px] bg-gradient-to-r from-[#115B8A] to-[#008080] shadow-[0_0_15.6px_0_rgba(0,0,0,0.10)]  text-white font-semibold hover:bg-[#026C68] transition"
            >
              Reschedule
            </button>
            <button
              onClick={() => navigate("/dashboard/schedule-interview")}
              className="cursor-pointer w-full px-4 py-3 rounded-[16px] bg-[#F85E61] shadow-[0_0_15.6px_0_rgba(0,0,0,0.10)]  text-white font-semibold hover:bg-[#026C68] transition"
            >
              Cancel Booking
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
          <button
            className={`px-6 py-2 font-semibold text-gray-700 transition ${
              tab === "visit"
                ? "border-b-2 border-[#007C79] text-[#007C79]"
                : "hover:text-[#007C79]"
            }`}
            onClick={() => setTab("visit")}
          >
            Visits
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
        ) : tab === "schedule" ? (
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
        ) : (
          <div className="w-full mx-auto py-6 px-2">
            {/* Special Notes */}
            <div className="bg-[#F3F3F3] rounded-2xl p-6 mb-6">
              <div className="font-semibold text-xl text-[#0D2F2F] mb-4">
                Special notes
              </div>
              {notes.map((n, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between  mb-2"
                >
                  <div>
                    <div className="font-bold text-[15px] text-[#0D2F2F] mb-2">
                      {n.title}
                    </div>
                    <div className="text-[#7F7F7F] text-[14px] leading-snug max-w-3xl">
                      {n.desc}
                    </div>
                  </div>
                  <div className="text-[#7F7F7F] text-[13px] mt-2 min-w-[90px] text-right">
                    {n.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Photos */}
            <div className="bg-[#F3F3F3] rounded-2xl p-6 mb-6">
              <div className="font-semibold text-xl text-[#193B36] mb-4">
                Photos
              </div>
              {photos.map((photo, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between mb-4"
                >
                  <div>
                    <div className="font-semibold text-[#193B36] mb-2">
                      {photo.title}
                    </div>
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-[230px] h-[130px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="text-[#7C857D] text-[13px] mt-2 min-w-[90px] text-right">
                    {photo.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Write reviews */}
            <div>
              <div className="font-bold text-[16px] text-[#005F5D] mb-1">
                Write reviews
              </div>
              <textarea
                className="w-full h-24 rounded-lg bg-[#F6F8FA] border border-[#E2E8F0] text-[#193B36] px-4 py-3 mb-4 resize-none focus:outline-none"
                placeholder="Type here.."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              {/* Star rating */}
              <div className="flex items-center justify-center mb-4 gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`w-5 h-5 cursor-pointer ${
                      rating >= star ? "text-[#008080]" : "text-[#B3CBCB]"
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
              <div className="flex justify-end">
                <button className="px-8 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#007C79] to-[#00A79D] hover:from-[#006B69] hover:to-[#009C93]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
