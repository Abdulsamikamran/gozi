import React, { useState } from "react";
import CaretakerCard from "../components/ui/CaretakerCard";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  MessageCircle,
  Phone,
  Star,
  Camera,
  ChevronDown,
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();
  const selectedType = localStorage.getItem("profileType"); //care-seeker care-partner
  const [tabs, setTabs] = useState(["Active Bookings", "History"]);
  const [activeTab, setActiveTab] = useState("Active Bookings");

  const caretakers = [
    {
      id: 1,
      name: "Janefa Cooper",
      rating: 4.8,
      address: "1234 Main St, Anytown.",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      mapPosition: { top: "35%", left: "52%" },
    },
    {
      id: 2,
      name: "John Mack",
      rating: 4.8,
      address: "1234 Main St, Anytown.",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      mapPosition: { top: "28%", left: "45%" },
    },
    {
      id: 3,
      name: "Adam brew",
      rating: 4.8,
      address: "1234 Main St, Anytown.",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
      mapPosition: { top: "42%", left: "55%" },
    },
  ];

  return (
    <>
      {selectedType === "care-seeker" ? (
        <div>
          <img
            src="/assets/images/map.svg"
            alt="Map"
            className="w-full  object-cover"
          />

          {/* Top Caretakers Section */}
          <div className="p-8">
            <h2 className="text-3xl semi-bold text-gray-900 mb-6">
              Top Caretakers
            </h2>
            <div
              className="space-y-4"
              onClick={() => navigate("/dashboard/doctor-profile")}
            >
              {caretakers.map((caretaker) => (
                <CaretakerCard key={caretaker.id} caretaker={caretaker} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="   p-8 ">
          <div className="flex items-end gap-6 mb-6">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                className={`text-[30px] font-semibold transition ${
                  activeTab === tab
                    ? "text-[#183C3C]"
                    : "text-[#BFBFBF] font-normal"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeTab === "Active Bookings" ? (
            <div className="flex items-start rounded-xl shadow-lg p-6 justify-between gap-6">
              {/* Profile Section */}
              <div className="flex gap-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
                  alt="Sophia Lark"
                  className="w-[173px] h-[173px] rounded-3xl object-cover"
                />

                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Sophia Lark
                  </h2>

                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-5 h-5" />
                    <span>1234 Main St, Anytown.</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-5 h-5" />
                    <span>Saturday | Jan 25, 2025</span>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        10:00 AM- 12:00 PM
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">
                      $40<span className="text-lg text-gray-500">/h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 max-w-[250px]">
                <button className="flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors">
                  <img src="/assets/icons/send.svg" alt="Message" />
                  Send
                </button>
                <button
                  onClick={() => navigate("/dashboard/pre-check-in")}
                  className="bg-gradient-to-r from-[#115B8A] px-6 py-3 rounded-xl font-medium to-teal-600 hover:bg-teal-600 w-[250px] text-white focus:ring-teal-700"
                >
                  Accept
                </button>
                <button className="bg-red-400 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-500 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-6 ">
              {/* Profile Section */}
              <div className="flex gap-6 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
                  alt="Sophia Lark"
                  className="w-56 h-56 rounded-3xl object-cover"
                />

                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Sophia Lark
                  </h2>

                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-5 h-5" />
                    <span>1234 Main St, Anytown.</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-5 h-5" />
                    <span>Saturday | Jan 25, 2025</span>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        10:00 AM- 12:00 PM
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">
                      $40<span className="text-lg text-gray-500">/h</span>
                    </div>
                  </div>
                  <div className=" pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Reviews
                      </h3>
                      <span className="text-gray-400">A month ago</span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Janefa was incredibly kind and attentive to my mother's
                      needs. She went above and beyond to make sure she was
                      comfortable and safe every day. Truly a blessing!Janefa
                      was incredibly kind and attentive to my mother's needs.
                      She went above and beyond to make sure she was comfortable
                      and safe every day. Truly a blessing!
                    </p>

                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          className="w-6 h-6 fill-teal-600 text-teal-600"
                        />
                      ))}
                      <Star className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
