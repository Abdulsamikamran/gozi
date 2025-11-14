import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { Trash2 } from "lucide-react";

const Certifications = () => {
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
      <div className=" mx-auto h-full  pb-24">
        <form onSubmit={handleSubmit} className="space-y-6 h-full">
          {/* Profile Picture Section */}

          {/* Form Fields */}
          <div className="flex justify-between">
            <Input
              className="max-w-[600px]"
              label="Year(s) of Experience"
              type="text"
              name="fullName"
              placeholder="Year of Experience"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <div className="flex flex-col justify-end gap-3 pt-4">
              <div className="border border-gray-200 rounded-md p-4">
                <div className="flex items-center gap-4">
                  <button
                    // onClick={handleAddNew}
                    className="flex items-center whitespace-nowraps gap-2 px-6 py-2 bg-purple-800 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                  >
                    Upload Photo
                  </button>
                  <p className="text-gray-400 whitespace-nowrap">
                    Upload ID Photos (Front and Back)
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-4">
                <button
                  // onClick={() => handleDelete(experience.id)}
                  className="flex items-center gap-2 px-6 bg-red-500 text-white py-3 hover:bg-red-600  rounded-lg font-medium transition-colors "
                >
                  <Trash2 size={20} />
                  Delete
                </button>
                <button
                  // onClick={handleAddNew}
                  className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  Add New
                </button>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end items-end pt-4 mt-auto">
            <Button type="submit" size="lg" className="min-w-[200px]">
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Certifications;
