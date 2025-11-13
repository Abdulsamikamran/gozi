import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";

const AddCareRecipient = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    country: "",
    relation: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Care recipient data:", formData);
    navigate("/share-health-info");
  };

  return (
    <div className="min-h-screen mx-20 bg-white">
      {/* Main Content */}
      <div className=" pb-24">
        <div className=" flex gap-5 py-10 items-start ">
          <button
            onClick={() => navigate(-1)}
            className=" hover:bg-gray-100 rounded-lg mt-3 transition-colors"
          >
            <img src="/assets/icons/back-arrow.svg" alt="" />
          </button>
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Add Care Recipient
            </h1>
            <p className="text-gray-600 mb-8">
              Tell us who you're helping so we can match the right care.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 rounded-md overflow-hidden bg-gray-100 shrink-0">
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

            <Input
              label="Date of birth"
              type="text"
              name="dateOfBirth"
              placeholder="DD-MM-YYYY"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />

            <Input
              label="Gender"
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
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

            <Input
              label="Country"
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />

            <Select
              label="Relation"
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              placeholder="Select"
              options={[
                { value: "parent", label: "Parent" },
                { value: "spouse", label: "Spouse" },
                { value: "child", label: "Child" },
                { value: "sibling", label: "Sibling" },
                { value: "grandparent", label: "Grandparent" },
                { value: "other", label: "Other" },
              ]}
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

export default AddCareRecipient;
