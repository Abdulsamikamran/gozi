import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const AllCareRecipients = () => {
  const navigate = useNavigate();

  const recipients = [
    {
      id: 1,
      name: "Janefa Cooper",
      condition: "Heart Patient",
      relation: "Father",
      image: null,
    },
  ];

  const handleAddMore = () => navigate("/emergency-contacts");
  const handleNext = () => navigate("/payment-method");
  const handleSelectRecipient = (id) => console.log("Selected recipient:", id);

  return (
    <div className="flex flex-col min-h-screen bg-white mx-20">
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

      {/* Recipient List */}
      <div className="space-y-4 mb-6">
        {recipients.map((recipient) => (
          <button
            key={recipient.id}
            onClick={() => handleSelectRecipient(recipient.id)}
            className="w-full p-6 bg-white border-2 border-teal-600 rounded-xl hover:bg-teal-50 transition-all text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 shrink-0">
                {recipient.image ? (
                  <img
                    src={recipient.image}
                    alt={recipient.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {recipient.name}
                </h3>
                <p className="text-gray-600 mb-1">{recipient.condition}</p>
                <p className="text-teal-600 font-medium">
                  {recipient.relation}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Add More & Next Buttons */}
      {/* ...your main content above */}

      {/* Add More button (above Next) */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleAddMore}
          className="px-8 py-4 text-lg bg-teal-600/30 w-[470px] text-teal-600 font-medium rounded-[12px] transition-all duration-200 focus:outline-none focus:ring-2 cursor-pointer focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add more
        </button>
      </div>

      {/* Push the Next button to the bottom-right */}
      <div className="mt-auto flex justify-end pb-10">
        <Button onClick={handleNext} size="lg" className="min-w-[200px]">
          Next
        </Button>
      </div>
    </div>
  );
};

export default AllCareRecipients;
