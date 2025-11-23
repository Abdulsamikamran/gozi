// src/pages/CareGiverDocProfile.jsx
import React, { useState } from "react";
import {
  PhoneCall,
  Send,
  X,
  MapPin,
  CalendarDays,
  Clock4,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
} from "lucide-react";
import { FaComments } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CareGiverDocProfile = () => {
  const [status, setStatus] = useState("before"); // before | checkedIn | checkedOut
  const [showExtend, setShowExtend] = useState(false);
  const navigate = useNavigate();

  const handleCheckIn = () => setStatus("checkedIn");
  const handleCheckOut = () => setStatus("checkedOut");

  return (
    <div className="w-full  min-h-screen">
      {/* PAGE WRAPPER */}
      <div className=" mx-auto px-6 pt-8 pb-16">
        {/* TOP ROW: AVATAR + NAME + ACTIONS */}
        <div className="flex items-start justify-between gap-6">
          {/* Avatar + Name */}
          <div className="flex items-center gap-4">
            <div className="w-[152px] h-[152px] rounded-full overflow-hidden shadow-sm border border-[#E5E7EB]">
              <img
                src="/care-giver.png"
                alt="Sophia Lark"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold text-[#183C3C]">
                Sophia Lark
              </h1>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col gap-3">
            {status === "before" && (
              <>
                <div className="flex flex-col gap-3 min-w-[250px]">
                  <div className="w-full flex gap-2">
                    <button
                      onClick={() => navigate("/emergency-call")}
                      className=" w-[30%] flex items-center justify-center gap-2 bg-[#F85E61] hover:bg-[#ff7d7f] text-white font-semibold py-2 rounded-xl"
                    >
                      <BiPhoneCall />
                    </button>
                    <button
                      onClick={() => navigate("/chat")}
                      className="w-full flex items-center justify-center gap-2 bg-[#008080] hover:bg-[#006E6E] text-white font-semibold py-2 rounded-xl text-lg"
                    >
                      <FaComments />
                      Send
                    </button>
                  </div>

                  <button
                    onClick={handleCheckIn}
                    className="bg-gradient-to-r from-[#115B8A] to-[#008080] text-white font-semibold py-2 rounded-xl text-lg"
                  >
                    Check In
                  </button>
                  <button className="bg-[#FF6C6C] hover:bg-[#d74242] transition text-white text-lg font-semibold py-2 rounded-[12px] shadow-sm">
                    Cancel
                  </button>
                </div>
              </>
            )}

            {status === "checkedIn" && (
              <>
                <div className="flex flex-col gap-3 min-w-[250px]">
                  <button
                    onClick={handleCheckOut}
                    className="bg-gradient-to-r from-[#115B8A] to-[#008080] text-white font-semibold py-2 text-lg rounded-xl"
                  >
                    Check out
                  </button>
                  <button className="bg-[#FF6C6C] hover:bg-[#d74242] transition text-white text-lg font-semibold py-2 rounded-[12px] shadow-sm">
                    Cancel
                  </button>
                </div>
              </>
            )}

            {status === "checkedOut" && (
              <button className="w-full min-w-[250px] bg-[#FF6C6C] hover:bg-[#d74242] transition text-white text-lg font-semibold py-2 rounded-[12px] shadow-sm">
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* PERSONAL INFO + DISEASE DETAIL */}
        <section className="mt-8 space-y-4">
          <div>
            <h2 className="text-[22px] font-semibold text-[#0D2F2F]">
              Personal info
            </h2>
            <p className="mt-1 text-[18px] leading-relaxed text-[#7F7F7F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <h2 className="text-[22px] font-semibold text-[#0D2F2F]">
              Disease detail
            </h2>
            <p className="mt-1 text-[18px] leading-relaxed text-[#7F7F7F]">
              Care Services Needed, Care requests, Add if patient has mobility
              issues and Alzheimer's – if those are highlighted as YES on the
              profile then highlight those in red.
            </p>
          </div>
        </section>

        {/* LOCATION */}
        <section className="mt-6">
          <h2 className="text-[22px] font-semibold text-[#0D2F2F] mb-3">
            Location
          </h2>

          <div className="inline-block rounded-[16px] border border-[#C5E6E6] bg-white p-0 shadow-sm">
            <div className="relative w-[350px] h-[160px] rounded-xl overflow-hidden">
              <img
                src="/small-map.png"
                alt="Map"
                className="w-full h-full object-cover"
              />
              {/* Avatar marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] flex flex-col items-center">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="/avatar/checkout-avatar.png"
                    alt="Sophia Lark"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-1 rounded-full bg-[#008080] px-3 py-[2px] text-[11px] font-medium text-white shadow-sm">
                  Sophia
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[11px] text-[#6B7280]">
            <MapPin className="w-3 h-3 text-[#008080]" />
            <span>1234 Main St, Anytown.</span>
          </div>
        </section>

        {/* TIME SLOTS */}
        <section className="mt-8">
          <h2 className="text-sm font-semibold text-[#183C3C] mb-2">
            Time slots
          </h2>

          <div className="overflow-hidden rounded-xl bg-[#F3F4F6] border border-[#E5E7EB]">
            <div className="flex items-center justify-between px-4 py-3 text-sm text-[#111827] border-b border-[#E5E7EB]">
              <div className="flex items-center gap-2 text-[#4B5563]">
                <CalendarDays className="w-4 h-4" />
                <span>Thu | Jan 4, 2025</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Clock4 className="w-4 h-4 text-[#6B7280]" />
                <span>10:00 AM–12:00 PM</span>
              </div>
              <button className="ml-3 rounded-full bg-[#00A79D] px-4 py-1 text-xs font-semibold text-white">
                Reschedule?
              </button>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-sm text-[#111827]">
              <div className="flex items-center gap-2 text-[#4B5563]">
                <CalendarDays className="w-4 h-4" />
                <span>Thu | Jan 4, 2025</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <Clock4 className="w-4 h-4 text-[#6B7280]" />
                <span>10:00 AM–12:00 PM</span>
              </div>
            </div>
          </div>
        </section>

        {/* RATE OFFER + CHECKED IN + FORMS */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[260px,minmax(0,1fr)] gap-6 items-start">
          {/* RATE OFFER CARD */}
          <section>
            <h2 className="text-sm font-semibold text-[#183C3C] mb-2">
              Rate offer
            </h2>
            <div className="rounded-2xl bg-white border border-[#E5E7EB] shadow-sm px-6 py-4 w-[260px]">
              <div className="flex justify-between text-sm text-[#4B5563] mb-2">
                <span>Rates</span>
                <span className="font-semibold text-[#111827]">
                  $5<span className="text-xs align-top">/h</span>
                </span>
              </div>
              <div className="flex justify-between text-sm text-[#4B5563] mb-2">
                <span>Fee</span>
                <span className="font-semibold text-[#111827]">$2</span>
              </div>
              <div className="mt-3 pt-3 border-t border-[#E5E7EB] flex justify-between text-sm text-[#111827] font-semibold">
                <span>Total</span>
                <span>
                  $7<span className="text-xs align-top">/h</span>
                </span>
              </div>
            </div>

            {/* CHECKED IN / CHECKED OUT SMALL CARDS (LEFT COLUMN ON TALL LAYOUT) */}
            {(status === "checkedIn" || status === "checkedOut") && (
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-[#183C3C] mb-2">
                  Checked in
                </h2>
                <div className="inline-flex items-center gap-3 rounded-full bg-[#F3F4F6] px-4 py-2 text-xs text-[#111827]">
                  <span className="inline-flex h-3 w-3 rounded-full bg-[#00A79D]" />
                  <CalendarDays className="w-3 h-3 text-[#6B7280]" />
                  <span>Thu | Jan 4, 2025</span>
                  <span className="text-[10px] text-[#6B7280] ml-2">
                    10:14 AM
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowExtend((v) => !v)}
                  className="mt-3 flex items-center gap-1 text-xs font-medium text-[#00A79D]"
                >
                  Extend time?
                  {showExtend ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </button>
              </div>
            )}

            {status === "checkedOut" && (
              <div className="mt-8">
                <h2 className="text-sm font-semibold text-[#183C3C] mb-2">
                  Checked out
                </h2>
                <div className="inline-flex flex-col gap-1 rounded-xl bg-[#F3F4F6] px-4 py-3 text-xs text-[#111827] w-[220px]">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-3 w-3 rounded-full bg-[#00A79D]" />
                    <CalendarDays className="w-3 h-3 text-[#6B7280]" />
                    <span>Thu | Jan 4, 2025</span>
                    <span className="text-[10px] text-[#6B7280] ml-auto">
                      10:14 AM
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#6B7280] mt-1 pt-1 border-t border-[#E5E7EB]">
                    <span>Total time</span>
                    <span className="font-semibold text-[#111827]">
                      1h 28min
                    </span>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* RIGHT COLUMN: FORMS */}
          <section className="space-y-6">
            {status === "before" && (
              <p className="text-xs text-[#9CA3AF]">
                Once you check in, visit notes and other fields will appear
                here.
              </p>
            )}

            {(status === "checkedIn" || status === "checkedOut") && (
              <>
                {/* SERVICE PROVIDED (collapsed style like select) */}
                <div>
                  <label className="block text-sm font-semibold text-[#183C3C] mb-2">
                    Service provided
                  </label>
                  <div className="relative">
                    <select className="w-full rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] px-4 py-3 text-sm text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#00A79D]">
                      <option>Option1, Option2</option>
                      <option>Companionship</option>
                      <option>Physical assistance</option>
                      <option>Medication reminder</option>
                    </select>
                  </div>
                </div>

                {/* VISIT NOTES */}
                <div>
                  <label className="block text-sm font-semibold text-[#183C3C] mb-2">
                    Visit Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Type here.."
                    className="w-full rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] px-4 py-3 text-sm text-[#4B5563] resize-none focus:outline-none focus:ring-2 focus:ring-[#00A79D]"
                  />
                </div>

                {/* VISIT CONCERNS (only in second screenshot – you can keep or remove) */}
                {status === "checkedIn" && (
                  <div>
                    <label className="block text-sm font-semibold text-[#183C3C] mb-2">
                      Visit Concerns
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Type here.."
                      className="w-full rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] px-4 py-3 text-sm text-[#4B5563] resize-none focus:outline-none focus:ring-2 focus:ring-[#00A79D]"
                    />
                  </div>
                )}

                {/* PICTURES UPLOAD */}
                <div>
                  <label className="block text-sm font-semibold text-[#183C3C] mb-2">
                    Pictures
                  </label>
                  <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#C5E6E6] bg-[#F3F4F6] px-4 py-10 text-center">
                    <ImageIcon className="w-8 h-8 text-[#9CA3AF] mb-3" />
                    <p className="text-xs text-[#6B7280]">
                      Max size 50MB, JPG, PNG or Doc
                    </p>
                  </div>
                </div>

                {/* SUBMIT */}
                {status === "checkedIn" && (
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleCheckOut}
                      className="inline-flex items-center justify-center rounded-full bg-[#00A79D] px-12 py-3 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(0,167,157,0.35)]"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CareGiverDocProfile;
