import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { Briefcase, Trash2, UserCheck } from "lucide-react";

const BackgroundCheck = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [consentChecked, setConsentChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("pay-now");
  const getHeaderDescription = () => {
    if (step === 1) {
      return "Before you can start accepting care requests, we’ll need to complete a background check.";
    }

    if (step === 2) {
      return "Whether you're seeking support for a loved one or providing compassionate care, choose the profile that describes you.";
    }

    if (step === 3) {
      if (selectedOption === "pay-now") {
        return "Payment made, you will receive an email to let you begin your care giving journey.";
      } else if (selectedOption === "care-partner") {
        return "Payment will be deducted from your first payment, you will receive an email to let you begin your care giving journey.";
      }
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/availability");
  };
  // Step 1: Consent Screen
  const ConsentScreen = () => (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <p>
            As part of our commitment to safety and trust, all care partners on
            our platform are required to complete a background check. This
            process helps ensure that families and patients can feel confident
            knowing they're working with verified, responsible professionals.
            It's an essential step toward building a secure and transparent
            caregiving environment.
          </p>

          <p>
            The background check will review key areas such as criminal history,
            identity verification, and eligibility to work. We partner with
            trusted screening services to handle this process efficiently and
            confidentially. Your privacy is important to us, and no information
            will be shared without your consent.
          </p>

          <p>
            Completing your background check not only helps you gain credibility
            but also increases your chances of being booked by clients. It shows
            that you are committed to providing safe and professional care. Once
            verified, a badge will be added to your profile to highlight your
            cleared status.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-5 h-5 accent-teal-600 rounded"
        />

        <label htmlFor="consent" className="text-gray-700 text-sm">
          I consent to a background check and agree to share my information for
          this process.
        </label>
      </div>
      <p className="text-red-600 text-xs -mt-2">
        You need to accept in order proceed with your profile creation
      </p>

      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          className="min-w-[200px]"
          onClick={() => setStep(2)}
        >
          Next
        </Button>
      </div>
    </div>
  );

  // Step 2: Payment Selection Screen
  const PaymentSelectionScreen = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Pay $35 Now Option */}
        <button
          onClick={() => setSelectedOption("pay-now")}
          className={`p-8 rounded-2xl border-2 transition-all ${
            selectedOption === "pay-now"
              ? "border-teal-600 "
              : "border-gray-200 bg-white hover:border-teal-300"
          }`}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-28 h-28 bg-gray-100 rounded-[18px] flex items-center justify-center">
              <img src="/assets/images/seeker.svg" alt="" />
            </div>

            <h3 className="text-xl font-bold text-gray-800">Pay $35 Now</h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              To get started immediately, you can pay the $35 background check
              fee upfront. This allows us to begin the verification process
              right away and fast-track your profile approval. Paying now helps
              you appear as a verified care partner sooner, increasing your
              chances of getting your first booking quickly.
            </p>
          </div>
        </button>

        {/* I'm a Care Partner Option */}
        <button
          onClick={() => setSelectedOption("care-partner")}
          className={`p-8 rounded-2xl border-2 transition-all ${
            selectedOption === "care-partner"
              ? "border-teal-600 "
              : "border-gray-200 bg-white hover:border-teal-300"
          }`}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-28 h-28 bg-gray-100 rounded-[18px] flex items-center justify-center">
              <img src="/assets/images/giver.svg" alt="" />
            </div>

            <h3 className="text-xl font-bold text-gray-800">
              I'm a Care Partner
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              If you prefer, you can choose to have the $35 background check fee
              deducted from your first successful booking and payment. This way,
              you can begin the process without any upfront cost. Once you
              receive your first payment through the platform, the fee will
              automatically be deducted before funds are released to you.
            </p>
          </div>
        </button>
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          size="lg"
          className="min-w-[200px]"
          onClick={() => setStep(3)}
        >
          Next
        </Button>
      </div>
    </div>
  );

  // Step 3: Confirmation Screen
  const ConfirmationScreen = () => (
    <div className="space-y-8">
      <div className="flex justify-center py-12">
        <img
          className="w-[316px] h-[409px]"
          src="assets/images/auth-success-icon.svg"
          alt=""
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          className="min-w-[200px]"
          onClick={() => navigate("/")}
        >
          Done
        </Button>
      </div>
    </div>
  );

  return (
    <div className="h-[75vh] mx-20">
      {/* Header */}

      <div className=" flex gap-5 py-10 items-start ">
        <button
          onClick={() => (step > 1 ? setStep(step - 1) : navigate(-1))}
          className=" hover:bg-gray-100 rounded-lg mt-3 transition-colors"
        >
          <img src="/assets/icons/back-arrow.svg" alt="" />
        </button>
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Background Check
          </h1>
          {getHeaderDescription()}
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto h-full flex flex-col  pb-24">
        {step === 1 && <ConsentScreen />}
        {step === 2 && <PaymentSelectionScreen />}
        {step === 3 && <ConfirmationScreen />}
      </div>
    </div>
  );
};

export default BackgroundCheck;
