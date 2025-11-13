import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className=" mx-auto px-5 pt-8 pb-20 text-[#183C3C]">
      <h1 className="text-2xl font-bold text-[#008080] mb-3">Privacy policy</h1>
      <div className="text-[15px] text-[#183C3C]">
        <div className="mb-5">
          <div className="font-medium">Last Updated: May 4, 2025</div>
          <div>(Previous versions: N/A)</div>
        </div>
        <p className="mb-3">
          This Privacy Statement explains how Gozi, Inc. ("Gozi," "we," or "us")
          collects, uses, and discloses your personal information in connection
          with the services we provide ("Services"). It applies to information
          collected when you use our website, mobile applications, or other
          related platforms connecting caregivers and care seekers for in-home
          care.
        </p>
        <p className="mb-3">
          <span className="font-semibold">Note:</span> Some Gozi affiliates may
          maintain separate privacy notices. This Privacy Statement does not
          apply to third-party websites or services unless specifically stated.
        </p>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-3 font-semibold">Table of Contents</div>
        <ul className="list-disc pl-6 mb-5 space-y-1">
          <li>How Do We Collect Your Information?</li>
          <li>How Do We Use Your Information?</li>
          <li>How Do We Disclose Your Information?</li>
          <li>Information Security</li>
          <li>Information Retention</li>
          <li>Your Choices | Privacy Management Center</li>
          <li>Changes to this Privacy Statement</li>
          <li>Contact Us</li>
        </ul>
        <hr className="my-4 border-t border-gray-300" />
        {/* Sections */}
        <div className="mb-5">
          <h2 className="font-semibold mb-1 text-[#008080] text-[17px]">
            How Do We Collect Your Information?
          </h2>
          <div className="font-medium mt-2 mb-1">
            Information You Provide to Us
          </div>
          <p>We collect personal details you give directly, including:</p>
          <ul className="list-disc pl-7 mb-2">
            <li>
              <b>Account Information:</b> Name, email, phone number, date of
              birth, and account credentials.
            </li>
            <li>
              <b>Caregiver & Patient Details:</b> Medical needs, caregiving
              preferences, service availability, and background.
            </li>
            <li>
              <b>Payment Information:</b> Billing details and payment methods,
              processed securely via third-party services.
            </li>
          </ul>
          <div className="font-medium mb-1">
            Information We Collect Automatically
          </div>
          <ul className="list-disc pl-7 mb-2">
            <li>
              <b>Device & Usage Info:</b> IP address, browser, device ID,
              interactions (e.g., time spent on pages).
            </li>
            <li>
              <b>Location Data:</b> Used for caregiver matching and service
              optimization.
            </li>
            <li>
              <b>Cookies & Tracking:</b> Used for performance and
              personalization (see our Cookie Policy).
            </li>
          </ul>
          <div className="font-medium mb-1">Information from Third Parties</div>
          <ul className="list-disc pl-7">
            <li>
              <b>Social Logins:</b> If you use third-party platforms (e.g.,
              Facebook, Google), we may collect associated profile data, based
              on your privacy settings on those platforms.
            </li>
          </ul>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-5">
          <h2 className="font-semibold mb-1 text-[#008080] text-[17px]">
            How Do We Use Your Information?
          </h2>
          <p>We use your data to:</p>
          <ul className="list-disc pl-7 mb-2">
            <li>
              Provide &amp; Improve Services: Manage accounts, enable caregiver
              connections, and support functionality.
            </li>
            <li>
              Communicate: Respond to inquiries, send updates, or deliver
              marketing content.
            </li>
            <li>
              Process Payments: Handle transactions, refunds, and caregiver
              payouts.
            </li>
            <li>
              Offer Promotions: Run personalized promotions or rewards programs.
            </li>
            <li>
              Security &amp; Compliance: Detect fraud, protect users, and comply
              with applicable laws.
            </li>
          </ul>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-5">
          <h2 className="font-semibold mb-1 text-[#008080] text-[17px]">
            How Do We Disclose Your Information?
          </h2>
          <p>Your personal data may be shared with:</p>
          <ul className="list-disc pl-7 mb-2">
            <li>
              Caregivers &amp; Care Seekers: To facilitate service matching and
              communication.
            </li>
            <li>
              Service Providers: Partners like customer service platforms or
              payment processors.
            </li>
            <li>
              Legal Authorities: When required by law or legal process, or to
              protect Gozi’s rights.
            </li>
            <li>
              In Business Transfers: Information may be part of a merger,
              acquisition, or sale of assets.
            </li>
          </ul>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-5">
          <h2 className="font-semibold mb-1 text-[#008080] text-[17px]">
            Information Security
          </h2>
          <p>
            We follow industry standards to protect your data. That said, no
            system is entirely foolproof. You’re encouraged to use strong,
            unique passwords and protect your login credentials.
          </p>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-5">
          <h2 className="font-semibold mb-1 text-[#008080] text-[17px]">
            Information Retention
          </h2>
          <p>
            We retain your data as long as needed to fulfill our services,
            resolve disputes, meet legal obligations, or support product
            improvement.
          </p>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-5">
          <h2 className="font-semibold mb-1 text-[#008080] text-[17px]">
            Your Choices | Privacy Management Center
          </h2>
          <p>You can manage your information and preferences by:</p>
          <ul className="list-disc pl-7 mb-2">
            <li>
              Accessing &amp; Updating Info: Edit personal info through your
              Gozi account.
            </li>
            <li>
              Deleting Your Data: Submit a deletion request (subject to legal
              limits).
            </li>
            <li>
              Marketing Preferences: Opt out via account settings or unsubscribe
              links.
            </li>
            <li>Location Settings: Manage in-app or device permissions.</li>
          </ul>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="mb-5">
          <h2 className="font-semibold mb-1 text-[#008080] text-[17px]">
            Changes to this Privacy Statement
          </h2>
          <p>
            We may revise this Privacy Statement as laws evolve or services
            change. Updates will be posted on this page and indicated by the
            "Last Updated" date.
          </p>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div>
          <h2 className="font-semibold mb-1 text-[#008080] text-[17px]">
            Contact Us
          </h2>
          <p>
            If you have questions or wish to exercise your privacy rights,
            contact us at:
          </p>
          <div className="mt-3 mb-2">
            <div>Gozi, Inc. – Privacy Team</div>
            <div>📍 6650 Rivers Ave Ste 105 PMB 25206</div>
            <div>North Charleston, SC 29406-4829, USA</div>
            <div>
              📧{" "}
              <a
                className="text-[#008080] underline"
                href="mailto:info@gozicare.com"
              >
                info@gozicare.com
              </a>
            </div>
            <div>📞 +1 (555) 123-4567 (Update if needed)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
