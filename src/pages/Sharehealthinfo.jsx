import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
// import Textarea from '../components/ui/Textarea';
import Button from "../components/ui/Button";
import Textarea from "../components/ui/TextArea";

const ShareHealthInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    healthConcerns: "",
    alzheimers: "",
    mobilityIssues: "",
    mobilityComments: "",
    allergies: "",
    medicalHistory: "",
    currentMedications: "",
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
    console.log("Health info:", formData);
    navigate("/all-care-recipients");
  };

  return (
    <div className="min-h-screen mx-20 ">
      {/* Main Content */}
      <div className=" pb-24">
        <div className=" flex gap-5 py-10 items-start ">
          <button
            onClick={() => navigate(-1)}
            className=" hover:bg-gray-100 rounded-lg mt-3 transition-colors"
          >
            <img
              src="/assets/icons/back-arrow.svg"
              alt=""
            />
          </button>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Share Health Information
            </h1>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Health Concerns"
              type="text"
              name="healthConcerns"
              placeholder="Specific disease"
              value={formData.healthConcerns}
              onChange={handleChange}
            />

            <Select
              label="Alzheimer's disease?"
              name="alzheimers"
              value={formData.alzheimers}
              onChange={handleChange}
              placeholder="Select"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "unsure", label: "Unsure" },
              ]}
            />

            <div className="md:col-span-2">
              <Select
                label="Mobility issues"
                name="mobilityIssues"
                value={formData.mobilityIssues}
                onChange={handleChange}
                placeholder="Select"
                options={[
                  { value: "none", label: "None" },
                  { value: "walker", label: "Uses Walker" },
                  { value: "wheelchair", label: "Wheelchair Bound" },
                  { value: "bedridden", label: "Bedridden" },
                  { value: "limited", label: "Limited Mobility" },
                ]}
              />
            </div>

            <div className="md:col-span-2">
              <Textarea
                label=""
                name="mobilityComments"
                placeholder="Comments"
                value={formData.mobilityComments}
                onChange={handleChange}
                rows={3}
              />
            </div>

            <div className="md:col-span-2">
              <Textarea
                label="Allergies"
                name="allergies"
                placeholder="Allergies"
                value={formData.allergies}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <Textarea
              label="Medical History"
              name="medicalHistory"
              placeholder="Medical History"
              value={formData.medicalHistory}
              onChange={handleChange}
              rows={5}
            />

            <Textarea
              label="Current Medications"
              name="currentMedications"
              placeholder="Current Medications"
              value={formData.currentMedications}
              onChange={handleChange}
              rows={5}
            />
          </div>

          {/* Next Button */}
          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              size="lg"
              className="min-w-[200px]"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareHealthInfo;
