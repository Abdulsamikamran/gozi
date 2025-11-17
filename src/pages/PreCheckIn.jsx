import {
  MapPin,
  Calendar,
  MessageCircle,
  Phone,
  Star,
  Camera,
  ChevronDown,
} from "lucide-react";

const PreCheckIn = () => {
  return (
    <div className=" p-6 ">
      {/* Header */}
      <div className="flex items-start rounded-xl  p-6 justify-between gap-6">
        {/* Profile Section */}
        <div className="flex gap-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
            alt="Sophia Lark"
            className="w-[173px] h-[173px] rounded-full object-cover"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 max-w-[250px]">
          <div className="flex gap-2">
            <img src="/assets/icons/call-red.svg" alt="" />

            <button className="flex flex-1 items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors">
              <img src="/assets/icons/send.svg" alt="Message" />
              Send
            </button>
          </div>
          <button
            onClick={() => navigate("/dashboard/pre-check-in")}
            className="bg-gradient-to-r from-[#115B8A] px-6 py-3 rounded-xl font-medium to-teal-600 hover:bg-teal-600 w-[250px] text-white focus:ring-teal-700"
          >
            Accept
          </button>
          <button className="bg-red-400 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-500 transition-colors">
            Cancel
          </button>
        </div>
      </div>

      {/* Personal Info */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2 text-[22px]">
          Personal info
        </h3>
        <p className="text-md text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Disease Detail */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2 text-[22px]">
          Disease detail
        </h3>
        <p className="text-md text-gray-600">
          Care Services Needed, Care requests, Add if patient has mobility
          issues and Alzheimer's - if those are highlighted as YES on the
          profile then highlight those in red.
        </p>
      </section>

      {/* Location */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2 text-[22px]">
          Location
        </h3>
        <div className="bg-gray-100 rounded-lg p-4 mb-2">
          <img
            src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s+0ea5e9(-74.006,40.7128)/-74.006,40.7128,12,0/400x200@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
            alt="Map"
            className="w-full h-32 object-cover rounded"
          />
        </div>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          1234 Main St, Anytown.
        </p>
      </section>

      {/* Time Slots */}
      <section className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Time slots</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-md font-medium">Thu | Jan 4, 2025</span>
            </div>
            <span className="text-md text-gray-600">10:00 AM- 12:00 PM</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-md font-medium">Thu | Jan 4, 2025</span>
            </div>
            <span className="text-md text-gray-600">10:00 AM- 12:00 PM</span>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button className="text-teal-600 text-md font-medium">
            Reschedule ?
          </button>
        </div>
      </section>

      {/* Rate Offer */}
      <section>
        <h3 className="font-semibold text-gray-900 mb-3">Rate offer</h3>
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-md">
            <span className="text-gray-600">Rates</span>
            <span className="font-medium">$5/h</span>
          </div>
          <div className="flex justify-between text-md">
            <span className="text-gray-600">Fee</span>
            <span className="font-medium">$2</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span>$7/h</span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PreCheckIn;
