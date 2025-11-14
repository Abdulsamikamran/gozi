import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";

const PersonalInformation = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    careType: "",
    seekingFor: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const selectedType = localStorage.getItem("profileType");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile data:", formData);
    if (selectedType === "care-seeker") {
      navigate("/add-care-recipient");
    } else {
      navigate("/experience");
    }
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
            Professional information
          </h1>
          <p className="text-gray-600 mb-8">
            Tell us about your professional background — whether you're
            CNA-certified, have elder care experience, or other relevant skills.
            This helps match you with families who need what you offer.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto  pb-24">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Section */}

          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-5">
            <Select
              label="Caregiver Type"
              name="careType"
              value={formData.careType}
              onChange={handleChange}
              placeholder="Select"
              options={[
                {
                  value: "certified-nursing-assistant",
                  label: "Certified Nursing Assistant",
                },
                { value: "home-health-aide", label: "Home Health Aide" },
                { value: "personal-care-aide", label: "Personal Care Aide" },
              ]}
              required
            />
            <Input
              label="Year(s) of Experience"
              type="text"
              name="fullName"
              placeholder="Year of Experience"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <Select
              label="Languages Spoken"
              name="Languages Spoken"
              value={formData.seekingFor}
              onChange={handleChange}
              placeholder="Languages Spoken"
              //   options={[
              //     { value: "self", label: "Myself" },
              //     { value: "family", label: "Family Member" },
              //     { value: "other", label: "Other" },
              //   ]}
              required
            />

            <Input
              label="License/Registration Number"
              type="text"
              name="License/Registration Number"
              placeholder="License/Registration Number"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />

            <Select
              label="Smoker/Non-Smoker"
              name="Smoker/Non-Smoker"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Smoker/Non-Smoker"
              options={[
                { value: "smoker", label: "Smoker" },
                { value: "non-smoker", label: "Non-smoker" },
              ]}
              required
            />

            <Input
              label="Vaccinations: Flu "
              type="text"
              name="Vaccinations: Flu "
              placeholder="Yes/No"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <Input
              label="Emergency Contact Name"
              type="text"
              name="Emergency Contact Name"
              placeholder="Emergency Contact Name"
              value={formData.state}
              onChange={handleChange}
              required
            />
            <Input
              label="Emergency Contact Number"
              type="text"
              name="Emergency Contact Number"
              placeholder="Emergency Contact Number"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
            <Input
              label="Relationship"
              type="text"
              name="Relationship"
              placeholder="Relationship"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          {/* Next Button */}
          <div className="flex justify-end pt-4">
            <Button type="submit" size="lg" className="min-w-[200px]">
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
