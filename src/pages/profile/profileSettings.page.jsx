import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Profile Tab Component
const ProfileTab = ({ role }) => (
  <div className="w-full bg-white py-7 mb-8">
    {/* Profile picture */}
    <div className="flex items-center gap-6 mb-7 border border-[#E6E6E6] rounded-[10px] p-5">
      <img
        src="https://randomuser.me/api/portraits/men/55.jpg"
        alt="Profile"
        className="w-[149px] h-[149px] rounded-[28px] object-cover"
      />
      <div>
        <div className="text-[24px] font-semibold text-[#183C3C] mb-3">
          Profile Picture
        </div>
        <button className="bg-gradient-to-r from-[#115B8A] to-[#008080] px-7 py-2 rounded-[8px] text-white font-semibold text-[18px]">
          Upload photo
        </button>
      </div>
    </div>

    {/* Form */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
      <div>
        <label className="block text-[#008080] text-[18px] font-semibold mb-3">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
          disabled
        />
      </div>

      {role === "caregiver" && (
        <div>
          <label className="block text-[#008080] text-[18px] font-semibold mb-3">
            What type of care do you need?
          </label>
          <div className="relative">
            <select
              className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none appearance-none"
              disabled
            >
              <option>Select</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      )}

      {role === "caregiver" && (
        <div>
          <label className="block text-[#008080] text-[18px] font-semibold mb-3">
            Are you seeking care for your self or another person?
          </label>
          <input
            type="text"
            placeholder="Patient/Family member"
            className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
            disabled
          />
        </div>
      )}

      <div>
        <label className="block text-[#008080] text-[18px] font-semibold mb-3">
          Date of birth
        </label>
        <input
          type="text"
          placeholder="DD-MM-YYYY"
          className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
          disabled
        />
      </div>

      <div>
        <label className="block text-[#008080] text-[18px] font-semibold mb-3">
          Gender
        </label>
        <input
          type="text"
          placeholder="Gender"
          className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
          disabled
        />
      </div>

      <div>
        <label className="block text-[#008080] text-[18px] font-semibold mb-3">
          Address
        </label>
        <input
          type="text"
          placeholder="Address"
          className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
          disabled
        />
      </div>
      {role !== "caregiver" && (
        <div>
          <label className="block text-[#008080] text-[18px] font-semibold mb-3">
            State
          </label>
          <input
            type="text"
            placeholder="State"
            className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
            disabled
          />
        </div>
      )}

      {role === "caregiver" && (
        <>
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Country
            </label>
            <input
              type="text"
              placeholder="Country"
              className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
              disabled
            />
          </div>
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Ocupation
            </label>
            <input
              type="text"
              placeholder="Ocupation"
              className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
              disabled
            />
          </div>
        </>
      )}
    </div>

    <div className="flex justify-end mt-7">
      <button className="w-[180px] h-[44px] rounded-[10px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white text-[17px] font-semibold">
        Update
      </button>
    </div>
  </div>
);

// Preferences Tab Component
const PreferencesTab = ({ role }) => (
  <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
      {role === "caregiver" ? (
        <>
          {/* Caregiver Preferences */}
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Care Types You Provide
            </label>
            <div className="relative">
              <select
                className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none appearance-none"
                disabled
              >
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Preferred Work Schedule
            </label>
            <div className="relative">
              <select
                className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none appearance-none"
                disabled
              >
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Maximum Travel Distance
            </label>
            <input
              type="text"
              placeholder="Miles"
              className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
              disabled
            />
          </div>
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Special Skills/Certifications
            </label>
            <textarea
              placeholder="List your certifications"
              className="w-full min-h-[76px] bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none resize-none"
              disabled
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Bio/About Me
            </label>
            <textarea
              placeholder="Tell us about yourself"
              rows="4"
              className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
              disabled
            />
          </div>
        </>
      ) : (
        <>
          {/* Patient Preferences */}
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Health Concerns
            </label>
            <input
              type="text"
              placeholder="Specific disease"
              className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
              disabled
            />
          </div>
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Alzheimer's disease?
            </label>
            <div className="relative">
              <select
                className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none appearance-none"
                disabled
              >
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Mobility issues
            </label>
            <div className="relative">
              <select
                className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none appearance-none"
                disabled
              >
                <option>Select</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            <textarea
              rows="2"
              placeholder="Comments"
              className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] mt-2 outline-none"
              disabled
            />
          </div>
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Allergies
            </label>
            <textarea
              rows="4"
              className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
              disabled
            />
          </div>
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Medical History
            </label>
            <textarea
              placeholder="Medical History"
              className="w-full min-h-[76px] bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none resize-none"
              disabled
            />
          </div>
          <div>
            <label className="block text-[#008080] text-[18px] font-semibold mb-3">
              Current Medications
            </label>
            <textarea
              placeholder="Current Medications"
              className="w-full min-h-[76px] bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none resize-none"
              disabled
            />
          </div>
        </>
      )}
    </div>
    <div className="flex justify-end mt-7">
      <button className="w-[180px] h-[44px] rounded-[10px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white text-[17px] font-semibold">
        Next
      </button>
    </div>
  </div>
);

// Emergency Contact Tab Component (for patients)
const EmergencyContactTab = () => (
  <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
      <div>
        <label className="block text-[#008080] text-[18px] font-semibold mb-3">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
          disabled
        />
      </div>
      <div>
        <label className="block text-[#008080] text-[18px] font-semibold mb-3">
          Date of birth
        </label>
        <input
          type="text"
          placeholder="DD-MM-YYYY"
          className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
          disabled
        />
      </div>
      <div>
        <label className="block text-[#008080] text-[18px] font-semibold mb-3">
          Gender
        </label>
        <input
          type="text"
          placeholder="Gender"
          className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
          disabled
        />
      </div>
      <div>
        <label className="block text-[#008080] text-[18px] font-semibold mb-3">
          Address
        </label>
        <input
          type="text"
          placeholder="Address"
          className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
          disabled
        />
      </div>
      <div>
        <label className="block text-[#008080] text-[18px] font-semibold mb-3">
          Country
        </label>
        <input
          type="text"
          placeholder="Country"
          className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
          disabled
        />
      </div>
      <div>
        <label className="block text-[#008080] text-[18px] font-semibold mb-3">
          Relation
        </label>
        <div className="relative">
          <select
            className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none appearance-none"
            disabled
          >
            <option>Select</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
    <div className="flex justify-end mt-7">
      <button className="w-[180px] h-[44px] rounded-[10px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white text-[17px] font-semibold">
        Next
      </button>
    </div>
  </div>
);

// Availability Tab Component (for Caregivers)
const AvailabilityTab = () => {
  const [selectedDays, setSelectedDays] = useState(["Sunday", "Thursday"]);
  const [workingHours, setWorkingHours] = useState({
    Sunday: { start: "", end: "" },
    Monday: { start: "", end: "" },
    Tuesday: { start: "", end: "" },
    Wednesday: { start: "", end: "" },
    Thursday: { start: "", end: "" },
    Friday: { start: "", end: "" },
    Saturday: { start: "", end: "" },
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [offers247Care, setOffers247Care] = useState("");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timeOptions = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const updateTime = (day, type, value) => {
    setWorkingHours({
      ...workingHours,
      [day]: {
        ...workingHours[day],
        [type]: value,
      },
    });
  };

  const handleSave = () => {
    const data = {
      selectedDays,
      workingHours,
      selectedDate,
      offers247Care,
    };
    console.log("Saved data:", data);
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen  p-8">
      <div className=" mx-auto rounded-lg  ">
        <h2 className="text-xl font-semibold text-teal-600 mb-6">
          Preferred Working Days and Hours
        </h2>

        <div className="space-y-3">
          {days.map((day) => (
            <div key={day} className="flex items-center justify-between gap-4">
              <button
                onClick={() => toggleDay(day)}
                className={`w-32 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedDays.includes(day)
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {day}
              </button>

              <div className="flex gap-4 max-w-[600px] flex-1">
                <select
                  value={workingHours[day].start}
                  onChange={(e) => updateTime(day, "start", e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  disabled={!selectedDays.includes(day)}
                >
                  <option value="">Select</option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>

                <select
                  value={workingHours[day].end}
                  onChange={(e) => updateTime(day, "end", e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  disabled={!selectedDays.includes(day)}
                >
                  <option value="">Select</option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <label className="block text-teal-600 font-semibold mb-2">
              Dates
            </label>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select</option>
              <option value="weekdays">Weekdays Only</option>
              <option value="weekends">Weekends Only</option>
              <option value="all">All Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          <div>
            <label className="block text-teal-600 font-semibold mb-2">
              Do you offer 24-7 Care
            </label>
            <select
              value={offers247Care}
              onChange={(e) => setOffers247Care(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Yes/No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="w-[180px] h-[44px] rounded-[10px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white text-[17px] font-semibold">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function ProfileSettingsPage() {
  const [step, setStep] = useState(0);
  const role = localStorage.getItem("activeRole") || "patient-and-family";
  console.log("Current Role:", role);
  // Define tabs based on role
  const tabs =
    role === "caregiver"
      ? ["Profile", "Preferences", "Availability"]
      : ["Profile", "Preferences", "Emergency Contact"];

  // Render content based on step and role
  const renderContent = () => {
    if (step === 0) {
      return <ProfileTab role={role} />;
    }
    if (step === 1) {
      return <PreferencesTab role={role} />;
    }
    if (step === 2) {
      return role === "caregiver" ? (
        <AvailabilityTab />
      ) : (
        <EmergencyContactTab />
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto px-5 pt-10">
        {/* Tabs */}
        <div className="flex items-end gap-6 mb-6">
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`text-[30px] font-semibold transition ${
                step === idx ? "text-[#183C3C]" : "text-[#BFBFBF] font-normal"
              }`}
              onClick={() => setStep(idx)}
            >
              {tab}
            </button>
          ))}
          {role !== "caregiver" && (
            <div className="ml-auto">
              <button className="px-5 py-2 bg-[#007C79] text-white rounded-[8px] font-semibold flex items-center gap-2 text-[16px]">
                For Family Member
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
}
