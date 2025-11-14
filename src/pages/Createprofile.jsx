import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";

const CreateProfile = () => {
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
            Create your profile
          </h1>
          <p className="text-gray-600 mb-8">
            This is your info as the care seeker. You can add others needing
            care next.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto  pb-24">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Profile Picture
                </h3>
                <Button variant="primary" size="md" className="max-w-[200px]">
                  {" "}
                  Upload photo
                </Button>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              placeholder="Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <Select
              label="What type of care do you need?"
              name="careType"
              value={formData.careType}
              onChange={handleChange}
              placeholder="Select"
              options={[
                { value: "elderly", label: "Elderly Care" },
                { value: "child", label: "Child Care" },
                { value: "disability", label: "Disability Care" },
                { value: "medical", label: "Medical Care" },
              ]}
              required
            />

            <Select
              label="Are you seeking care for your self or another person?"
              name="seekingFor"
              value={formData.seekingFor}
              onChange={handleChange}
              placeholder="Patient/Family member"
              options={[
                { value: "self", label: "Myself" },
                { value: "family", label: "Family Member" },
                { value: "other", label: "Other" },
              ]}
              required
            />

            <Input
              label="Date of birth"
              type="text"
              name="dateOfBirth"
              placeholder="DD-MM-YYYY"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />

            <Select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Gender"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
                { value: "prefer-not-to-say", label: "Prefer not to say" },
              ]}
              required
            />

            <Input
              label="Address"
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="State"
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />

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

export default CreateProfile;
