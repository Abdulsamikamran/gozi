import { MapPin, Star } from "lucide-react";
import React, { useState } from "react";
// Replace with your actual chat icon import
import { FaComments, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const bookingsData = Array(7).fill({
  id: 1,
  name: "Adam brew",
  rating: 4.8,
  location: "1234 Main St, Anytown.",
  price: 40,
  img: "/avatar/checkout-avatar.png", // Update with correct asset
});

export default function BookingsPage() {
  const [tab, setTab] = useState("active");
  const navigate = useNavigate();
  return (
    <div className=" mx-auto pt-6 px-4">
      {/* Tab header */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setTab("active")}
          className={`text-[32px] font-semibold ${
            tab === "active" ? "text-[#193B36]" : "text-[#A0A0A0]"
          } focus:outline-none`}
        >
          Active
        </button>
        <button
          onClick={() => setTab("requests")}
          className={`text-[32px] font-semibold ${
            tab === "requests" ? "text-[#193B36]" : "text-[#A0A0A0]"
          } focus:outline-none`}
        >
          Requests
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-6">
        {bookingsData.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white rounded-2xl shadow-sm border border-[#F1F1F1] px-6 py-5 gap-6"
          >
            {/* Avatar */}
            <img
              src={item.img}
              alt={item.name}
              className="w-[80px] h-[80px] rounded-xl object-cover border"
            />
            {/* Info */}
            {/* <div className="flex-1 min-w-0">
              <div className="font-semibold text-lg text-[#193B36]">
                {item.name}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <FaStar className="text-[#FFBE15] w-4 h-4" />
                <span className="font-semibold text-[#193B36] text-[15px]">
                  {item.rating}
                </span>
                <span className="flex items-center gap-1 text-[#49BDBA] text-sm font-medium ml-3">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  {item.location}
                </span>
              </div>
            </div> */}
            <div className="flex-1 min-w-0 flex-col">
              <span className="font-semibold text-[18px] text-[#183C3C]">
                {item.name}
              </span>
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-[#FFC72C]" />
                <span className="text-[15px] text-[#636363] font-semibold">
                  {item.rating}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00A79D]" />
                <span className="text-[14px] text-[#9CA3AF] font-medium">
                  {item.location}
                </span>
              </div>
            </div>
            {/* Price */}
            <div className="font-bold text-2xl text-[#193B36] whitespace-nowrap mr-4">
              ${item.price}
              <span className="text-lg font-medium text-[#193B36]/80">/h</span>
            </div>
            {/* Actions */}
            <div className="flex flex-col gap-2 min-w-[250px]">
              <button
                onClick={() => navigate("/bookings/doc")}
                className="min-w-[250px] flex items-center justify-center gap-2 bg-[#008080] hover:bg-[#007067] transition text-white text-lg font-semibold py-2 rounded-[12px] shadow-sm"
              >
                <FaComments className="w-5 h-5" />
                Send
              </button>
              <button className="bg-[#FF6C6C] hover:bg-[#d74242] transition text-white text-lg font-semibold py-2 rounded-[12px] shadow-sm">
                Accept
              </button>
              <button className="bg-[#FF6C6C] hover:bg-[#d74242] transition text-white text-lg font-semibold py-2 rounded-[12px] shadow-sm">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
