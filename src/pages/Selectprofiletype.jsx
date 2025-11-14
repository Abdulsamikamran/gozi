import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const SelectProfileType = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("care-seeker");

  // Load stored value when component mounts
  useEffect(() => {
    const saved = localStorage.getItem("profileType");
    if (saved) {
      setSelectedType(saved);
    }
  }, []);

  // Save to localStorage whenever the user selects a type
  const handleSelect = (type) => {
    setSelectedType(type);
    localStorage.setItem("profileType", type);
  };

  const handleNext = () => {
    console.log("Selected type:", selectedType);
    navigate("/create-profile");
  };

  return (
    <div className="min-h-screen px-20 bg-white">
      {/* Header with Back Button */}
      <div className=" flex gap-6 py-10 items-start mb-10">
        <button
          onClick={() => navigate(-1)}
          className=" hover:bg-gray-100 mt-3 rounded-lg transition-colors"
        >
          <img src="/assets/icons/back-arrow.svg" alt="" />
        </button>
        <div>
          <h1 className="text-5xl font-bold text-gray-900 ">
            Select profile type
          </h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col ">
        {/* Profile Type Cards */}
        <div className="grid md:grid-cols-2 justify-center items-center gap-6 mb-8">
          {/* Care Seeker Card */}
          <button
            onClick={() => handleSelect("care-seeker")}
            className={`p-8 rounded-2xl border-2 shadow-lg transition-all text-left ${
              selectedType === "care-seeker"
                ? "border-teal-600 "
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center">
                <img src="/assets/images/seeker.svg" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  I'm a Care Seeker or Family
                </h3>
                <p className="text-gray-600 text-sm">
                  I'm looking for trusted help for myself or a loved one.
                </p>
              </div>
            </div>
          </button>

          {/* Care Partner Card */}
          <button
            onClick={() => handleSelect("care-partner")}
            className={`p-8 rounded-2xl border-2 shadow-lg transition-all text-left ${
              selectedType === "care-partner"
                ? "border-teal-600 "
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center">
                <img src="/assets/images/giver.svg" alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  I'm a Care Partner
                </h3>
                <p className="text-gray-600 text-sm">
                  Ready to connect with families and grow my care business.
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Next Button */}
        <div className="flex justify-center">
          <Button onClick={handleNext} size="lg">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectProfileType;
