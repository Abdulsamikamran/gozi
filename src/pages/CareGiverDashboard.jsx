import React, { useState } from "react";
import { MapPin, Star, Calendar, Clock } from "lucide-react";
import { FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CareGiverDashboard() {
  const [tab, setTab] = useState("active");
  const navigate = useNavigate();

  const activeBookings = [
    {
      id: 1,
      name: "Sophia Lark",
      img: "/care-giver.png",
      location: "1234 Main St, Anytown.",
      date: "Saturday | Jan 25, 2025",
      time: "10:00 AM–12:00 PM",
      price: 40,
    },
    {
      id: 2,
      name: "Sophia Lark",
      img: "/care-giver.png",
      location: "1234 Main St, Anytown.",
      date: "Saturday | Jan 25, 2025",
      time: "10:00 AM–12:00 PM",
      price: 40,
    },
  ];

  const historyBookings = [
    {
      id: 1,
      name: "Sophia Lark",
      img: "/care-giver.png",
      location: "1234 Main St, Anytown.",
      date: "Saturday | Jan 25, 2025",
      time: "10:00 AM–12:00 PM",
      price: 40,
      review:
        "Janefa was incredibly kind and attentive to my mother’s needs. She went above and beyond to make sure she was comfortable and safe every day. Truly a blessing!",
      rating: 4,
      timeAgo: "A month ago",
    },
    {
      id: 2,
      name: "Sophia Lark",
      img: "/care-giver.png",
      location: "1234 Main St, Anytown.",
      date: "Saturday | Jan 25, 2025",
      time: "10:00 AM–12:00 PM",
      price: 40,
      review:
        "Janefa was incredibly kind and attentive to my mother’s needs. She went above and beyond to make sure she was comfortable and safe every day. Truly a blessing!",
      rating: 4,
      timeAgo: "A month ago",
    },
  ];

  const data = tab === "active" ? activeBookings : historyBookings;

  return (
    <div className="w-full mx-auto pt-6 px-4">
      {/* ---------- TAB HEADER ---------- */}
      <div className="flex items-center gap-6 mb-6">
        <button
          onClick={() => setTab("active")}
          className={`text-[32px] font-semibold ${
            tab === "active" ? "text-[#0D2F2F]" : "text-[#A4A4A6]"
          }`}
        >
          Active Bookings
        </button>

        <button
          onClick={() => setTab("history")}
          className={`text-[32px] font-semibold ${
            tab === "history" ? "text-[#0D2F2F]" : "text-[#A4A4A6]"
          }`}
        >
          History
        </button>
      </div>

      {/* ---------- LIST ---------- */}
      <div className="flex flex-col gap-6 pb-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#E5E5E5] rounded-2xl shadow-sm px-6 py-6"
          >
            <div className="flex items-start gap-6">
              {/* PROFILE PIC */}
              <img
                src={item.img}
                alt={item.name}
                className="w-[173px] h-[160px] rounded-2xl object-cover"
              />

              {/* TEXT CONTENT */}
              <div className="flex-1">
                <div className="font-semibold text-[18px] text-[#0D2F2F]">
                  {item.name}
                </div>

                <div className="flex items-center gap-2 mt-2 text-[#A4A4A6] text-[14px]">
                  <MapPin className="w-4 h-4 text-[#008080] " />
                  {item.location}
                </div>
                <div className="flex items-center gap-2 mt-2 text-[#A4A4A6] text-[14px]">
                  <Calendar className="w-4 h-4 text-[#008080]" />
                  {item.date}
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-2 bg-[#F3F3F3] text-[#0D2F2F] px-2 py-1 rounded-full text-[14px]">
                    <Clock className="w-4 h-4 text-[#0D2F2F]" />
                    {item.time}
                  </div>

                  <div className="text-xl font-bold text-[#193B36]">
                    ${item.price}
                    <span className="text-base font-medium">/h</span>
                  </div>
                </div>

                {/* -------- HISTORY -------- */}
                {tab === "history" && (
                  <div className="mt-6">
                    <div className="font-semibold text-[16px] text-[#193B36] mb-1">
                      Reviews
                    </div>

                    <p className="text-[#7F7F7F] text-[14px] max-w-3xl leading-relaxed mt-10">
                      {item.review}
                    </p>

                    <div className="flex items-center gap-6 mt-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i <= item.rating
                              ? "text-[#008080] fill-[#008080]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-400 ml-auto">
                        {item.timeAgo}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* -------- ACTION BUTTONS (ACTIVE) -------- */}
              {tab === "active" && (
                <div className="flex flex-col gap-3 min-w-[250px]">
                  <button
                    onClick={() => navigate("/chat")}
                    className="flex items-center justify-center gap-2 bg-[#008080] hover:bg-[#006E6E] text-white font-semibold py-2 rounded-xl"
                  >
                    <FaComments />
                    Chat
                  </button>

                  <button
                    onClick={() => navigate("/dashboard/doc")}
                    className="bg-gradient-to-r from-[#115B8A] to-[#008080] text-white font-semibold py-2 rounded-xl"
                  >
                    Accept
                  </button>
                  <button className="bg-[#FF6C6C] hover:bg-[#d74242] transition text-white text-lg font-semibold py-2 rounded-[12px] shadow-sm">
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
