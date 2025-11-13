import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: "/assets/icons/home-icon.svg",
      iconW: "/assets/icons/homeW-icon.svg",
    },
    {
      path: "/bookings",
      label: "My bookings",
      icon: "/assets/icons/booking.svg",
      iconW: "/assets/icons/bookingW-icon.svg",
    },
    {
      path: "/interviews",
      label: "Interviews",
      icon: "/assets/icons/interview.svg",
      iconW: "/assets/icons/interviewW-icon.svg",
    },
  ];

  const settingsSubmenu = [
    {
      path: "/settings/profile",
      label: "Profile settings",
      icon: "/assets/icons/profile-icon.svg",
      iconW: "/assets/icons/profileW-icon.svg",
    },
    {
      path: "/settings/wallet",
      label: "Wallet",
      icon: "/assets/icons/wallet.svg",
      iconW: "/assets/icons/walletW.svg",
    },
    {
      path: "/settings/payment",
      label: "Payment method",
      icon: "/assets/icons/payment.svg",
      iconW: "/assets/icons/paymentW.svg",
    },
    {
      path: "/settings/privacy",
      label: "Privacy policy",
      icon: "/assets/icons/privacy.svg",
      iconW: "/assets/icons/privacyW.svg",
    },
    {
      path: "/settings/terms",
      label: "Terms & conditions",
      icon: "/assets/icons/t&c.svg",
      iconW: "/assets/icons/t&cW.svg",
    },
  ];

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

      {/* Navigation */}
      <nav className="flex-1 px-3 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? "bg-white text-[#007C79]"
                  : "text-white hover:bg-[#007C79]/80"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? item.icon : item.iconW}
                  alt={item.label}
                  className="w-5 h-5"
                />
                <span className="font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}

        {/* Settings Section */}
        <div className="mb-2">
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${
              isSettingsOpen ? "bg-white text-[#007C79]" : "bg-none text-white"
            }  font-medium`}
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
            {/* <img
              src={isSettingsOpen ? ChevronDown : ChevronRight}
              alt="Toggle"
              className="ml-auto w-4 h-4"
            /> */}
          </button>

          {/* Submenu */}
          {isSettingsOpen && (
            <div className="mt-2 bg-[#ffffff1a] rounded-lg py-2">
              {settingsSubmenu.map((sub) => (
                <NavLink
                  key={sub.path}
                  to={sub.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-white text-[#007C79]"
                        : "text-white hover:bg-[#007C79]/60"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <img
                        src={isActive ? sub.icon : sub.iconW}
                        alt={sub.label}
                        className="w-5 h-5"
                      />
                      <span className="text-sm font-medium">{sub.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
