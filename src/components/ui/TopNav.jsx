import React from "react";
import { Search, Bell, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-3 ml-6">
          <img src="/assets/icons/search-filter.svg" />

          <button
            onClick={() => navigate("/notifications")}
            className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors relative"
          >
            <Bell
              size={20}
              className="text-gray-700"
            />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Phone
              size={20}
              className="text-gray-700"
            />
          </button>

          <button
            onClick={() => navigate("/chat")}
            className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <MessageSquare
              size={20}
              className="text-gray-700"
            />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 ml-3 pl-3 border-l border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Jack Jameson"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Jack Jameson</div>
            </div>
            <ChevronRight
              size={18}
              className="text-gray-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
