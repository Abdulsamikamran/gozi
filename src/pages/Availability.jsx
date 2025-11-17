import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import SuccessModal from "../components/modal/successModal";

const Availability = () => {
  const navigate = useNavigate();

  const [offer24_7Care, setOffer24_7Care] = useState("");
  const [servicePricing, setServicePricing] = useState("");
  const [working, setWorking] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [workingHoursStart, setWorkingHoursStart] = useState("00:00");
  const [workingHoursEnd, setWorkingHoursEnd] = useState("00:00");
  const [selectedDates, setSelectedDates] = useState([
    4, 5, 8, 9, 10, 11, 12, 15, 16, 18, 19, 22, 23, 24, 25,
  ]);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5, 1)); // June 2025

  const daysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const toggleDate = (day) => {
    setSelectedDates((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const totalDays = daysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const renderCalendar = () => {
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Days of the month
    for (let day = 1; day <= totalDays; day++) {
      const isSelected = selectedDates.includes(day);
      days.push(
        <button
          key={day}
          onClick={() => toggleDate(day)}
          className={`h-12 rounded-full font-medium transition-all ${
            isSelected
              ? "bg-teal-600 text-white hover:bg-teal-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="h-[75vh] mx-20">
      {/* Header */}

      <div className=" flex gap-5 py-10 items-start ">
        <button
          onClick={() => navigate(-1)}
          className=" hover:bg-gray-100 rounded-lg mt-3 transition-colors"
        >
          <img src="/assets/icons/back-arrow.svg" alt="" />
        </button>
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Availability & Preferences
          </h1>
          <p className="text-gray-600 mb-8">
            Select your time and days that your available
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* 24-7 Care Option */}
          <div>
            <label className="block text-teal-600 font-medium mb-2">
              Do you offer 24-7 Care
            </label>
            <select
              value={offer24_7Care}
              onChange={(e) => setOffer24_7Care(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 border-none rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Yes/No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Calendar */}
          <div>
            <label className="block text-teal-600 font-medium mb-4">
              Select the days you would like to work
            </label>

            <div className="bg-white border border-gray-200 max-w-md rounded-lg p-4">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={previousMonth}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-medium text-gray-800">{monthName}</span>
                <button
                  onClick={nextMonth}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs text-gray-500 font-medium py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Service Pricing */}
          <div>
            <label className="block text-teal-600 font-medium mb-2">
              Service Pricing
            </label>
            <input
              type="text"
              value={servicePricing}
              onChange={(e) => setServicePricing(e.target.value)}
              placeholder="$/Hour"
              className="w-full px-4 py-3 bg-gray-100 border-none rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Working */}
          <div>
            <label className="block text-teal-600 font-medium mb-2">
              Working
            </label>
            <select
              value={working}
              onChange={(e) => setWorking(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 border-none rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Yes/No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Working Hours */}
          <div>
            <label className="block text-teal-600 font-medium mb-2">
              Working Hours
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="time"
                value={workingHoursStart}
                onChange={(e) => setWorkingHoursStart(e.target.value)}
                className="px-4 py-3 bg-gray-100 border-none rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="time"
                value={workingHoursEnd}
                onChange={(e) => setWorkingHoursEnd(e.target.value)}
                className="px-4 py-3 bg-gray-100 border-none rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end pt-4 mt-auto">
        <Button
          onClick={() => setShowModal(true)}
          size="lg"
          className="min-w-[200px]"
        >
          Next
        </Button>
      </div>
      <SuccessModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          navigate("/background-check");
        }}
        title="Profile request sent"
        imageSrc="/modalIcon.svg"
        buttonText="Done"
      />
    </div>
  );
};

export default Availability;
