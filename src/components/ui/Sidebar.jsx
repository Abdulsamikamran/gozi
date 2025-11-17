import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const location = useLocation();
  const selectedType = localStorage.getItem("profileType"); //care-seeker care-partner
  console.log("Sidebar profile type:", selectedType);

  // Helper to check active route
  const isActiveRoute = (routePath) => location.pathname === routePath;

  return (
    <div className="w-[280px] bg-[#007C79] text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 flex justify-center items-center">
        <img
          src="/assets/images/full-logo.svg"
          alt="Gavari Logo"
          className="w-[185px] h-auto"
        />
      </div>

      <nav className="flex-1 px-6 mt-4">
        {/* ---------------------- TOP LEVEL LINKS ---------------------- */}
        {/* HOME */}
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${
              isActive
                ? "bg-white text-[#007C79]"
                : "text-white hover:bg-[#007C79]/80"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={
                  isActive
                    ? "/assets/icons/home-icon.svg"
                    : "/assets/icons/homeW-icon.svg"
                }
                alt="Home"
                className="w-5 h-5"
              />
              <span className="font-medium">Home</span>
            </>
          )}
        </NavLink>

        {/* MY BOOKINGS */}
        {selectedType === "care-seeker" && (
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${
                isActive
                  ? "bg-white text-[#007C79]"
                  : "text-white hover:bg-[#007C79]/80"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive
                      ? "/assets/icons/booking.svg"
                      : "/assets/icons/bookingW-icon.svg"
                  }
                  alt="My Bookings"
                  className="w-5 h-5"
                />
                <span className="font-medium">My Bookings</span>
              </>
            )}
          </NavLink>
        )}

        {/* INTERVIEWS */}
        <NavLink
          to="/interviews"
          className={({ isActive }) =>
            `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${
              isActive
                ? "bg-white text-[#007C79]"
                : "text-white hover:bg-[#007C79]/80"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={
                  isActive
                    ? "/assets/icons/interview.svg"
                    : "/assets/icons/interviewW-icon.svg"
                }
                alt="Interviews"
                className="w-5 h-5"
              />
              <span className="font-medium">Interviews</span>
            </>
          )}
        </NavLink>

        {/* ---------------------- SETTINGS COLLAPSE ---------------------- */}
        <div className="mb-2">
          <button
            onClick={() => setIsSettingsOpen((o) => !o)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${
              isSettingsOpen ? "bg-white text-[#007C79]" : "text-white"
            } font-medium`}
            aria-expanded={isSettingsOpen}
          >
            <img
              src={
                isSettingsOpen
                  ? "/assets/icons/settings-icon.svg"
                  : "/assets/icons/settingsW-icon.svg"
              }
              alt="Settings"
              className="w-5 h-5"
            />
            Settings
            {isSettingsOpen ? (
              <ChevronDown className="ml-auto w-4 h-4" />
            ) : (
              <ChevronRight className="ml-auto w-4 h-4" />
            )}
          </button>
          {isSettingsOpen && (
            <div className="mt-2 bg-[#ffffff1a] rounded-lg py-2 w-[90%] mx-auto p-1">
              {/* PROFILE SETTINGS */}
              <NavLink
                to="/settings/profile"
                className={({ isActive }) =>
                  `flex items-center gap-3 mb-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#007C79]"
                      : "text-white hover:bg-[#007C79]/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/assets/icons/profile-icon.svg"
                          : "/assets/icons/profileW-icon.svg"
                      }
                      className="w-5 h-5"
                      alt=""
                    />
                    <span className="text-sm font-medium">
                      Profile Settings
                    </span>
                  </>
                )}
              </NavLink>

              {/* WALLET */}
              <NavLink
                to="/settings/wallet"
                className={({ isActive }) =>
                  `flex items-center gap-3 mb-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#007C79]"
                      : "text-white hover:bg-[#007C79]/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/assets/icons/wallet.svg"
                          : "/assets/icons/walletW.svg"
                      }
                      className="w-5 h-5"
                      alt=""
                    />
                    <span className="text-sm font-medium">Wallet</span>
                  </>
                )}
              </NavLink>

              {/* PAYMENT METHOD */}
              <NavLink
                to="/settings/payment"
                className={({ isActive }) =>
                  `flex items-center gap-3 mb-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#007C79]"
                      : "text-white hover:bg-[#007C79]/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/assets/icons/payment.svg"
                          : "/assets/icons/paymentW.svg"
                      }
                      className="w-5 h-5"
                      alt=""
                    />
                    <span className="text-sm font-medium">Payment Method</span>
                  </>
                )}
              </NavLink>

              {/* PRIVACY POLICY */}
              <NavLink
                to="/settings/privacy"
                className={({ isActive }) =>
                  `flex items-center gap-3 mb-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#007C79]"
                      : "text-white hover:bg-[#007C79]/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/assets/icons/privacy.svg"
                          : "/assets/icons/privacyW.svg"
                      }
                      className="w-5 h-5"
                      alt=""
                    />
                    <span className="text-sm font-medium">Privacy Policy</span>
                  </>
                )}
              </NavLink>

              {/* TERMS & CONDITIONS */}
              <NavLink
                to="/settings/terms"
                className={({ isActive }) =>
                  `flex items-center gap-3 mb-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#007C79]"
                      : "text-white hover:bg-[#007C79]/60"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={
                        isActive
                          ? "/assets/icons/t&c.svg"
                          : "/assets/icons/t&cW.svg"
                      }
                      className="w-5 h-5"
                      alt=""
                    />
                    <span className="text-sm font-medium">
                      Terms & Conditions
                    </span>
                  </>
                )}
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
