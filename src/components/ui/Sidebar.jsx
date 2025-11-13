import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import routes from "../../routes"; // Adjust path as needed

const Sidebar = () => {
  // admin|caregiver
  const userRole = "caregiver";
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const location = useLocation();

  // 🔹 Filter top-level routes for sidebar (not hidden, match user role)
  const visibleNavItems = routes.filter(
    (r) =>
      r.show !== false && // Default true if not defined
      r.layout === "/admin" &&
      (!r.role || r.role.includes(userRole)) &&
      !r.children // Only top-level navs, not parent with children
  );

  // 🔹 Find Settings route (the one with children)
  const settingsRoute = routes.find(
    (r) =>
      r.layout === "/admin" &&
      r.children &&
      (!r.role || r.role.includes(userRole))
  );

  // 🔹 Prepare settings submenu items
  const settingsSubmenu =
    settingsRoute?.children
      ?.filter((c) => c.show !== false) // If you add show to children later
      .map((c) => ({
        ...c,
        path: `/settings/${c.path}`,
      })) || [];

  // Helper: checks if path matches current location (for submenus)
  const isActiveRoute = (routePath) => {
    // Support for nested routes like /settings/profile
    return location.pathname === routePath;
  };

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
        {/* Main Nav Items */}
        {visibleNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
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
                {/* icon in config can be React node OR path to img */}
                {typeof item.icon === "string" ? (
                  <img
                    src={isActive ? item.icon : item.iconW}
                    alt={item.label}
                    className="w-5 h-5"
                  />
                ) : (
                  item.icon
                )}
                <span className="font-medium">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}

        {/* Settings Collapsible Section */}
        {settingsRoute && (
          <div className="mb-2">
            <button
              onClick={() => setIsSettingsOpen((o) => !o)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${
                isSettingsOpen
                  ? "bg-white text-[#007C79]"
                  : "bg-none text-white"
              } font-medium`}
              aria-expanded={isSettingsOpen}
            >
              {/* If your icon is a path, use img. If it's a node, render directly */}
              {typeof settingsRoute.icon === "string" ? (
                <img
                  src={
                    isSettingsOpen
                      ? "/assets/icons/settings-icon.svg"
                      : "/assets/icons/settingsW-icon.svg"
                  }
                  alt="Settings"
                  className="w-5 h-5"
                />
              ) : (
                settingsRoute.icon
              )}
              Settings
              {isSettingsOpen ? (
                <ChevronDown className="ml-auto w-4 h-4" />
              ) : (
                <ChevronRight className="ml-auto w-4 h-4" />
              )}
            </button>
            {isSettingsOpen && (
              <div className="mt-2 bg-[#ffffff1a] rounded-lg py-2 w-[90%] mx-auto p-1">
                {settingsSubmenu.map((sub) => (
                  <NavLink
                    key={sub.path}
                    to={sub.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 mb-2 px-3 py-2 rounded-md transition-colors ${
                        isActiveRoute(sub.path)
                          ? "bg-white text-[#007C79]"
                          : "text-white hover:bg-[#007C79]/60"
                      }`
                    }
                  >
                    {/* Only use icons if defined in children */}
                    {sub.icon ? sub.icon : null}
                    <span className="text-sm font-medium">{sub.name}</span>
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
