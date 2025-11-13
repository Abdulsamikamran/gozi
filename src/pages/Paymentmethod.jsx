import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("stripe");
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
    shipmentAddress: "",
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
    console.log("Payment method:", selectedMethod, formData);
    // Navigate to dashboard or completion screen
    navigate("/dashboard");
  };

  const paymentProviders = [
    { id: "stripe", name: "Stripe", logo: "stripe" },
    { id: "mastercard", name: "Mastercard", logo: "mastercard" },
    { id: "visa", name: "Visa", logo: "visa" },
  ];

  return (
    <div className="min-h-screen mx-20 bg-white">
      {/* Main Content */}
      <div className="pb-24">
        <div className=" flex gap-5 py-10 items-start ">
          <button
            onClick={() => navigate(-1)}
            className=" hover:bg-gray-100 rounded-lg mt-3 transition-colors"
          >
            <img src="/assets/icons/back-arrow.svg" alt="" />
          </button>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Payment method
            </h1>
            <p className="text-gray-600 mb-8">
              Add your preferred payment method
            </p>
          </div>
        </div>

        {/* Payment Provider Selection */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {paymentProviders.map((provider) => (
            <button
              key={provider.id}
              onClick={() => setSelectedMethod(provider.id)}
              className={`p-6 rounded-xl shadow-lg transition-all ${
                selectedMethod === provider.id
                  ? "border-teal-600 border-2 bg-teal-60"
                  : " bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                {/* Logo placeholder */}
                <div className="h-12 flex items-center justify-center">
                  {provider.logo === "stripe" && (
                    <img src="/assets/icons/stripe.svg" alt="Stripe" />
                  )}
                  {provider.logo === "mastercard" && (
                    <img src="/assets/icons/mastercard.svg" alt="mastercard" />
                  )}
                  {provider.logo === "visa" && (
                    <img src="/assets/icons/visa.svg" alt="visa" />
                  )}
                </div>
                <span className="text-teal-600 font-medium">
                  {provider.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Card number"
              type="text"
              name="cardNumber"
              placeholder="Card number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />

            <Input
              label="Card holder name"
              type="text"
              name="cardholderName"
              placeholder="Name"
              value={formData.cardholderName}
              onChange={handleChange}
              required
            />

            <Input
              label="Expiry date"
              type="text"
              name="expiryDate"
              placeholder="DD-MM-YYYY"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />

            <Input
              label="CVV"
              type="text"
              name="cvv"
              placeholder="Address"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Shipment address"
            type="text"
            name="shipmentAddress"
            placeholder="Address"
            value={formData.shipmentAddress}
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

export default PaymentMethod;
