import React from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function SettingsLayout() {
  const location = useLocation();
  // Show prompt only on parent route, not on children
  const isParent = location.pathname === "/settings";

  return (
    <div>
      {isParent ? (
        <div>Select a setting option from the sidebar.</div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
