import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const EmergencyContacts = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    contact1Name: "",
    contact1Number: "",
    relationship1: "",
    contact2Name: "",
    contact2Number: "",
    relationship2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Emergency contacts:", formData);
    navigate("/payment-method");
  };

  return (
    <div className="flex flex-col min-h-screen  mx-20">
      {/* Header */}
      <div className="flex gap-5 py-10 items-start">
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-gray-100 rounded-lg mt-3 transition-colors"
        >
          <img src="/assets/icons/back-arrow.svg" alt="" />
        </button>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            All Care Recipients
          </h1>
          <p className="text-gray-600 mb-8">
            These are the care profiles you've added. Select one to manage care.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className=" pb-24">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Emergency Contact 1 */}
            <Input
              label="Emergency Contact 1"
              type="text"
              name="contact1Name"
              placeholder="Contact Name"
              value={formData.contact1Name}
              onChange={handleChange}
              required
            />

            <Input
              label="Emergency Cell Number 1"
              type="tel"
              name="contact1Number"
              placeholder="Contact Number"
              value={formData.contact1Number}
              onChange={handleChange}
              required
            />

            <Input
              label="Relationship 1"
              type="text"
              name="relationship1"
              placeholder="Relationship"
              value={formData.relationship1}
              onChange={handleChange}
              required
            />

            {/* Emergency Contact 2 */}
            <Input
              label="Emergency Cell Name 2"
              type="text"
              name="contact2Name"
              placeholder="Contact Name"
              value={formData.contact2Name}
              onChange={handleChange}
            />

            <Input
              label="Emergency Contact Number 2"
              type="tel"
              name="contact2Number"
              placeholder="Contact Number"
              value={formData.contact2Number}
              onChange={handleChange}
            />

            <Input
              label="Relationship 2"
              type="text"
              name="relationship2"
              placeholder="Relationship"
              value={formData.relationship2}
              onChange={handleChange}
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

export default EmergencyContacts;
