import { FaStar, FaCheckCircle } from "react-icons/fa";

export function ReviewsCard({ reviews }) {
  return (
    <div className="bg-[#F3F3F3] rounded-[28px] px-8 py-6 mt-2">
      <h3 className="font-semibold text-2xl mb-6 text-[#183C3C]">Reviews</h3>
      <div className="flex flex-col gap-8">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="flex items-start justify-between gap-3"
          >
            {/* Left: Name + Comment */}
            <div>
              <div className="font-semibold text-[18px] leading-6 text-[#183C3C] mb-1">
                {review.user}
              </div>
              <div className="text-[#7F7F7F] text-[14px] leading-relaxed">
                {review.text}
              </div>
            </div>
            {/* Right: Star + check + rating */}
            <div className="flex flex-col items-end min-w-[70px]">
              {i === 0 && (
                <FaCheckCircle
                  className="text-[#00A79D] w-5 h-5 mb-1"
                  title="Verified"
                />
              )}
              <div className="flex items-center gap-1">
                <FaStar className="text-[#FFC72C] w-4 h-4" />
                <span className="text-[#636363] text-base font-semibold">
                  {review.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
