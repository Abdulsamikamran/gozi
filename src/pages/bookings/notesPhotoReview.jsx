import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

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
    url: "/assets/images/doctor1.jpg", // Replace with your asset
    title: "Title",
    date: "Jan 10,2025",
  },
  {
    url: "/assets/images/doctor2.jpg", // Replace with your asset
    title: "Title",
    date: "Jan 10,2025",
  },
];

export default function NotesPhotosReviews() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(4);

  return (
    <div className="max-w-4xl mx-auto py-6 px-2">
      {/* Special Notes */}
      <div className="bg-[#F6F8FA] rounded-2xl p-6 mb-6">
        <div className="font-semibold text-xl text-[#193B36] mb-4">
          Special notes
        </div>
        {notes.map((n, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between mb-2"
          >
            <div>
              <div className="font-bold text-[15px] text-[#193B36] mb-1">
                {n.title}
              </div>
              <div className="text-[#193B36] text-[14px] leading-snug max-w-3xl">
                {n.desc}
              </div>
            </div>
            <div className="text-[#7C857D] text-[13px] mt-2 min-w-[90px] text-right">
              {n.date}
            </div>
          </div>
        ))}
      </div>

      {/* Photos */}
      <div className="bg-[#F6F8FA] rounded-2xl p-6 mb-6">
        <div className="font-semibold text-xl text-[#193B36] mb-4">Photos</div>
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
  );
}
