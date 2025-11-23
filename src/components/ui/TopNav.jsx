// import React from "react";
// import { Search, Bell, Phone, MessageSquare, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const TopNav = () => {
//   const navigate = useNavigate();
//   return (
//     <header className="bg-white border-b border-gray-200 px-8 py-4">
//       <div className="flex items-center justify-between">
//         {/* Search Bar */}
//         <div className="flex-1 max-w-xl">
//           <div className="relative">
//             <Search
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
//               size={20}
//             />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//             />
//             <img
//               className="absolute right-2 top-2 "
//               src="/assets/icons/search-filter.svg"
//             />
//           </div>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center gap-3 ml-6">
//           <button
//             onClick={() => navigate("/notifications")}
//             className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors relative"
//           >
//             <Bell size={20} className="text-gray-700" />
//             <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
//           </button>

//           <button
//             onClick={() => navigate("/emergency-call")}
//             className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             <Phone size={20} className="text-gray-700" />
//           </button>

//           <button
//             onClick={() => navigate("/chat")}
//             className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             <MessageSquare size={20} className="text-gray-700" />
//           </button>

//           {/* User Profile */}
//           <div
//             onClick={() => navigate("/welcome")}
//             className="flex items-center cursor-pointer gap-3 ml-3 pl-3 border-l border-gray-200"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
//               alt="Jack Jameson"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div className="text-left">
//               <div className="font-semibold text-gray-900">Jack Jameson</div>
//             </div>
//             <ChevronRight size={18} className="text-gray-400" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopNav;
import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Example user — replace with your real data
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Jack Jameson",
    roles: ["patient-and-family", "caregiver"], // fallback
  };

  const activeRole = localStorage.getItem("activeRole") || user.roles[0];
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen((p) => !p);

  const handleRoleSwitch = (role) => {
    localStorage.setItem("activeRole", role);

    // reload routes instantly
    window.location.reload();
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <img
              className="absolute right-2 top-2"
              src="/assets/icons/search-filter.svg"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 ml-6">
          <button
            onClick={() => navigate("/notifications")}
            className="p-3 bg-gray-100 rounded-lg relative"
          >
            <Bell
              size={20}
              className="text-gray-700"
            />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button
            onClick={() => navigate("/emergency-call")}
            className="p-3 bg-gray-100 rounded-lg"
          >
            <Phone
              size={20}
              className="text-gray-700"
            />
          </button>

          <button
            onClick={() => navigate("/chat")}
            className="p-3 bg-gray-100 rounded-lg"
          >
            <MessageSquare
              size={20}
              className="text-gray-700"
            />
          </button>

          {/* Avatar */}
          <div
            ref={menuRef}
            className="relative"
          >
            <div
              onClick={toggleMenu}
              className="flex items-center cursor-pointer gap-3 ml-3 pl-3 border-l border-gray-200"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">{user.name}</div>
                <div className="text-xs text-gray-500 capitalize">
                  {activeRole.replace(/-/g, " ")}
                </div>
              </div>
              <ChevronRight
                size={18}
                className="text-gray-400"
              />
            </div>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-2">
                <div className="font-semibold text-gray-700 text-sm mb-1">
                  Switch Profile
                </div>

                {user.roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => handleRoleSwitch(role)}
                    className={`w-full text-left px-3 py-2 rounded-md capitalize ${
                      role === activeRole
                        ? "bg-teal-50 text-teal-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {role.replace(/-/g, " ")}
                  </button>
                ))}

                <hr className="my-2" />

                <button
                  onClick={() => navigate("/settings/profile")}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100"
                >
                  Profile Settings
                </button>

                <button
                  onClick={() => navigate("/sign-in")}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100 text-red-500"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
