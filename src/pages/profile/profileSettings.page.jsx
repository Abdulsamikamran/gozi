import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Tab list for navigation
const tabs = ["Profile", "Preferences", "Emergency Contact"];

export default function ProfileSettingsPage() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <div className=" mx-auto px-5 pt-10">
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
          <div className="ml-auto">
            <button className="px-5 py-2 bg-[#007C79] text-white rounded-[8px] font-semibold flex items-center gap-2 text-[16px]">
              For Family Member
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step 1: Profile */}
        {step === 0 && (
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
                  State
                </label>
                <input
                  type="text"
                  placeholder="State"
                  className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
                  disabled
                />
              </div>
            </div>
            <div className="flex justify-end mt-7">
              <button className="w-[180px] h-[44px] rounded-[10px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white text-[17px] font-semibold">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Preferences */}
        {step === 1 && (
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
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
                  id="w3review"
                  name="w3review"
                  rows="2"
                  cols="50"
                  placeholder="Comments"
                  className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] mt-2 outline-none"
                />
              </div>
              <div>
                <label className="block text-[#008080] text-[18px] font-semibold mb-3">
                  Allergies
                </label>
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  className="w-full bg-[#EDEDED] rounded-[7px] px-4 py-2 text-[16px] outline-none"
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
            </div>
            <div className="flex justify-end mt-7">
              <button className="w-[180px] h-[44px] rounded-[10px] bg-gradient-to-r from-[#115B8A] to-[#008080] text-white text-[17px] font-semibold">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Emergency Contact */}
        {step === 2 && (
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
        )}
      </div>
    </div>
  );
}
