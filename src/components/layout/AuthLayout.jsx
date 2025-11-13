import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import TopNav from "../ui/TopNav";

const AuthLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        {/* <TopNav /> */}

        {/* Dynamic Content Area - This will be replaced by each page */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
