// export default Sidebar;
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import routes from "../../routes"; // <-- Make sure path is correct

const Sidebar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const location = useLocation();
  const activeRole = localStorage.getItem("activeRole") || "patient-and-family";

  // Filter admin layout routes for this role
  const sidebarRoutes = routes.filter(
    (r) =>
      r.layout === "/admin" &&
      r.show === true &&
      (!r.role || r.role.includes(activeRole))
  );

  // Settings children (special case)
  const settingsRoute = routes.find((r) => r.path === "/settings");

  const settingsChildren =
    settingsRoute?.children?.map((child) => ({
      ...child,
      fullPath: `/settings/${child.path}`,
    })) || [];

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
        {/* -------------------- AUTO MAPPED ROUTES -------------------- */}
        {sidebarRoutes.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
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
                {item.icon && (
                  <span className="w-5 h-5 flex items-center justify-center">
                    {item.icon}
                  </span>
                )}
                <span className="font-medium">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}

        {/* -------------------- SETTINGS COLLAPSE -------------------- */}
        {settingsRoute && (
          <div className="mb-2 mt-5">
            <button
              onClick={() => setIsSettingsOpen((o) => !o)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${
                isSettingsOpen ? "bg-white text-[#007C79]" : "text-white"
              } font-medium`}
            >
              {settingsRoute.icon}
              Settings
              {isSettingsOpen ? (
                <ChevronDown className="ml-auto w-4 h-4" />
              ) : (
                <ChevronRight className="ml-auto w-4 h-4" />
              )}
            </button>

            {isSettingsOpen && (
              <div className="mt-2 bg-[#ffffff1a] rounded-lg py-2 w-[90%] mx-auto p-1">
                {settingsChildren.map((child) => (
                  <NavLink
                    key={child.fullPath}
                    to={child.fullPath}
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
                        <span className="w-5 h-5 flex items-center justify-center">
                          {child.icon}
                        </span>
                        <span className="text-sm font-medium">
                          {child.name}
                        </span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
