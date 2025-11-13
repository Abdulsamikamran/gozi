import { ChevronLeft } from "lucide-react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// Bell Icon SVG (Figma style)
const BellIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="12"
      r="12"
      fill="#00A79D"
    />
    <path
      d="M12 7V9M17 13V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V13L5.29289 14.7071C5.10536 14.8946 5 15.1496 5 15.4142V16C5 16.5523 5.44772 17 6 17H18C18.5523 17 19 16.5523 19 16V15.4142C19 15.1496 18.8946 14.8946 18.7071 14.7071L17 13Z"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function NotificationsPage() {
  const navigate = useNavigate();
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
            Notifications
          </h2>
        </div>

        {/* Notification cards */}
        <div className="space-y-4">
          {/* First notification (with profile image, "New" badge) */}
          <div className="flex items-center justify-between bg-white rounded-[16px] shadow-[0_0_24px_0_rgba(16,30,54,0.08)] px-4 py-4">
            <div className="flex items-center gap-4">
              <img
                src="/avatar/checkout-avatar.png"
                alt="Adam Brew"
                className="w-[44px] h-[44px] object-cover rounded-[12px]"
              />
              <div>
                <div className="font-semibold text-[16px] text-[#183C3C]">
                  Adam Brew
                </div>
                <div className="text-[#636363] text-[14px] flex items-center">
                  <span
                    role="img"
                    aria-label="wave"
                    className="mr-1"
                  >
                    👋
                  </span>
                  Hey there! How are you feeling today?
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end min-w-[80px]">
              <span className="text-[13px] text-[#636363] font-semibold mb-2">
                12:20PM
              </span>
              <span className="px-3 py-1 rounded-full bg-[#007C79] text-white text-xs font-semibold">
                New
              </span>
            </div>
          </div>
          {/* Second notification (with bell icon) */}
          <div className="flex items-center justify-between bg-white rounded-[16px] shadow-[0_0_24px_0_rgba(16,30,54,0.08)] px-4 py-4">
            <div className="flex items-center gap-4">
              {/* <BellIcon className="w-[36px] h-[36px]" /> */}
              <NotificationIcon />
              <div>
                <div className="font-semibold text-[16px] text-[#183C3C]">
                  Booking Reminder
                </div>
                <div className="text-[#A4A4A6] text-[14px]">
                  Booking with Adam Brew at
                </div>
                <div className="text-[#A4A4A6] text-[14px] mt-1">01:40PM</div>
              </div>
            </div>
            <span className="text-[13px] text-[#A4A4A6] font-semibold">
              12:00PM
            </span>
          </div>
          {/* Third notification (with bell icon) */}
          <div className="flex items-center justify-between bg-white rounded-[16px] shadow-[0_0_24px_0_rgba(16,30,54,0.08)] px-4 py-4">
            <div className="flex items-center gap-4">
              <NotificationIcon />

              <div>
                <div className="font-semibold text-[16px] text-[#183C3C]">
                  Interview Reminder
                </div>
                <div className="text-[#A4A4A6] text-[14px]">
                  Interview with Adam Brew at
                </div>
                <div className="text-[#A4A4A6] text-[14px] mt-1">01:40PM</div>
              </div>
            </div>
            <span className="text-[13px] text-[#A4A4A6] font-semibold">
              1 Day Ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const NotificationIcon = () => {
  return (
    <svg
      width="19"
      height="23"
      viewBox="0 0 19 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.1784 19.5888C12.8281 19.5236 13.2671 20.2133 12.9602 20.7716C12.7439 21.165 12.439 21.5084 12.0739 21.7897C11.7015 22.0765 11.2694 22.2966 10.8059 22.4444C10.3423 22.5924 9.8499 22.6672 9.35575 22.6672C8.8616 22.6672 8.36924 22.5924 7.90555 22.4444C7.44207 22.2966 7.01004 22.0765 6.63766 21.7897C6.27247 21.5084 5.96761 21.165 5.75135 20.7716C5.44443 20.2133 5.88343 19.5236 6.53318 19.5888C6.73583 19.6091 8.3218 19.7642 9.35575 19.7642C10.3897 19.7642 11.9757 19.6091 12.1784 19.5888Z"
        fill="#008080"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.56654 0.8849C7.95317 -0.25677 10.7499 -0.295611 13.1699 0.779302L13.3862 0.875371C15.922 2.00171 17.5455 4.44204 17.5455 7.12719V8.45888C17.5455 9.52933 17.7881 10.5869 18.2567 11.5579L18.5364 12.1378C19.8213 14.8013 18.148 17.9145 15.1445 18.4482L14.9752 18.4782C11.2596 19.1384 7.44953 19.1384 3.73395 18.4782C0.690097 17.9375 -0.920236 14.7004 0.552698 12.0834L0.792016 11.6582C1.38276 10.6086 1.69211 9.43404 1.69211 8.24068V6.89817C1.69211 4.34949 3.19279 2.02038 5.56654 0.8849Z"
        fill="#008080"
      />
    </svg>
  );
};
