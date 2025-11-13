import React from "react";
import CaretakerCard from "../components/ui/CaretakerCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
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
    <div>
      {/* Map Section */}
      {/* <MapView caretakers={caretakers} /> */}
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
            <CaretakerCard
              key={caretaker.id}
              caretaker={caretaker}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
