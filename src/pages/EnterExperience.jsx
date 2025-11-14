import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { Trash2 } from "lucide-react";

const EnterExperience = () => {
  const navigate = useNavigate();

  const selectedType = localStorage.getItem("selectedType");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile data:", formData);
  };
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      facility: "",
      position: "",
      startDate: "",
      endDate: "",
      experience: "",
    },
  ]);

  const years = Array.from(
    { length: 50 },
    (_, i) => new Date().getFullYear() - i
  );

  // Handlers
  const handleChange = (id, field, value) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const handleAddNew = () => {
    const newId = experiences.length + 1;
    setExperiences((prev) => [
      ...prev,
      {
        id: newId,
        facility: "",
        position: "",
        startDate: "",
        endDate: "",
        experience: "",
      },
    ]);
  };

  const handleDelete = (id) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };
  const handleNext = () => {
    navigate("/certifications");
  };
  return (
    <div className="min-h-screen mx-20">
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
            Enter Experience{" "}
          </h1>
          <p className="text-gray-600 mb-8">
            This is your info as the care seeker. You can add others needing
            care next.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto pb-28">
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.id}>
              {/* Form Fields */}
              <div className="space-y-6">
                {/* Facility and Position Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Input
                    label="Facility / Establishment"
                    type="text"
                    name="fullName"
                    placeholder="Facility / Establishment"
                    // value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    label="                      Position/Title
"
                    type="text"
                    name="fullName"
                    placeholder="Position/Title"
                    // value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                  {/* Start Date and End Date Row */}
                  <div>
                    <label className="block text-teal-600 font-medium mb-2">
                      Start Date
                    </label>
                    <div className="relative">
                      <select
                        value={experience.startDate}
                        onChange={(e) =>
                          handleChange(
                            experience.id,
                            "startDate",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
                      >
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-teal-600 font-medium mb-2">
                      End Date
                    </label>
                    <div className="relative">
                      <select
                        value={experience.endDate}
                        onChange={(e) =>
                          handleChange(experience.id, "endDate", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
                      >
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Experience Textarea */}
                <div>
                  <label className="block text-teal-600 font-medium mb-2">
                    Experience
                  </label>
                  <textarea
                    placeholder="Experience"
                    value={experience.experience}
                    onChange={(e) =>
                      handleChange(experience.id, "experience", e.target.value)
                    }
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    // onClick={() => handleDelete(experience.id)}
                    disabled={experiences.length === 1}
                    className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-colors ${
                      experiences.length === 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-red-500 text-white hover:bg-red-600"
                    }`}
                  >
                    <Trash2 size={20} />
                    Delete
                  </button>
                  <button
                    // onClick={handleAddNew}
                    className="flex items-center gap-2 px-6 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                  >
                    Add New
                  </button>
                </div>
              </div>

              {/* Separator between multiple experiences */}
              {index < experiences.length - 1 && (
                <div className="border-t border-gray-200 mt-8 pt-8 -mx-8" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-auto ">
        <Button onClick={handleNext} size="lg" className="min-w-[200px]">
          Next
        </Button>
      </div>
    </div>
  );
};

export default EnterExperience;
