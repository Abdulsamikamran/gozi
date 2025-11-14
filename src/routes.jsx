import React from "react";
import { FaClipboard, FaCreditCard, FaUser, FaUsersCog } from "react-icons/fa";
import { MdHome, MdShield } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoSettings, IoSettingsSharp, IoTicket } from "react-icons/io5";
import SettingsLayout from "./components/layout/layoutSettings";
import { IoMdWallet } from "react-icons/io";
import { BsPersonFillGear } from "react-icons/bs";

const HomePage = React.lazy(() => import("./pages/Home"));
const WelcomPage = React.lazy(() => import("./pages/Welcome"));
const SignInPage = React.lazy(() => import("./pages/SignIn"));
const SignUpPage = React.lazy(() => import("./pages/SIgnUp"));
const SelectProfileType = React.lazy(() => import("./pages/Selectprofiletype"));
const AddCareRecipient = React.lazy(() => import("./pages/Addcarerecipient"));
const ShareHealthInfo = React.lazy(() => import("./pages/Sharehealthinfo"));
const AllCareRecipients = React.lazy(() => import("./pages/Allcarerecipients"));
const EmergencyContacts = React.lazy(() => import("./pages/Emergencycontacts"));
const PaymentMethod = React.lazy(() => import("./pages/Paymentmethod"));
const CreatProfilePage = React.lazy(() => import("./pages/Createprofile"));
const Certifications = React.lazy(() => import("./pages/Certifications"));

const PersonalInformation = React.lazy(() =>
  import("./pages/PersonalInformation")
);
const ResetPasswordPage = React.lazy(() => import("./pages/ResetPassword"));
const EnterExperience = React.lazy(() => import("./pages/EnterExperience"));

const DrProfilePage = React.lazy(() => import("./pages/home/docProfilePage"));
const OTPPage = React.lazy(() => import("./pages/OTP"));
const PasswordSuccessPage = React.lazy(() => import("./pages/PasswordSuccess"));
const SetPasswordPage = React.lazy(() => import("./pages/SetPassword"));
const TwoStepVerificationPage = React.lazy(() =>
  import("./pages/TwoStepVerification")
);
const ScheduleInterviewPage = React.lazy(() =>
  import("./pages/home/scheduleInterviewPage")
);
const ScheduleInterviewSuccessPage = React.lazy(() =>
  import("./pages/home/scheduleInterviewSuccess")
);
const CheckoutPage = React.lazy(() => import("./pages/home/checkout"));
const NotificationsPage = React.lazy(() => import("./pages/NotificationPage"));
const EmergencyCall = React.lazy(() => import("./pages/EmergencyCall"));

const ProfileSettingsPage = React.lazy(() =>
  import("./pages/profile/profileSettings.page")
);
const WalletPage = React.lazy(() => import("./pages/profile/walletPage"));
const WalletTransactionsPage = React.lazy(() =>
  import("./pages/profile/walletTransactions")
);
const WithdrawMoneyPage = React.lazy(() =>
  import("./pages/profile/withdrawMoney")
);
const PaymentMethodPage = React.lazy(() =>
  import("./pages/profile/paymentMethod")
);
const AddPaymentMethod = React.lazy(() =>
  import("./pages/profile/addPaymentMethod")
);
const PrivacyPolicyPage = React.lazy(() =>
  import("./pages/misc/privacyPolicy")
);
const TermsAndConditionsPage = React.lazy(() =>
  import("./pages/misc/termsAndConditions")
);
const BookingsPage = React.lazy(() => import("./pages/bookings/bookingsPage"));
const DocBookingPage = React.lazy(() =>
  import("./pages/bookings/docBookingPage")
);
const InterViewPage = React.lazy(() => import("./pages/Interviews"));
const ChatPage = React.lazy(() => import("./pages/chat/chatPage"));

const routes = [
  //auth + welcom flow
  //  ________________________________________________
  {
    name: "OTP",
    layout: "/auth",
    path: "/otp",
    component: <OTPPage />,
    isProtected: false,
    show: false,
  },

  {
    name: "Password Success",
    layout: "/auth",
    path: "/password-success",
    component: <PasswordSuccessPage />,
    isProtected: false,
    show: false,
  },

  {
    name: "Set Password",
    layout: "/auth",
    path: "/set-password",
    component: <SetPasswordPage />,
    isProtected: false,
    show: false,
  },
  {
    name: "Certifications",
    layout: "/auth",
    path: "/certifications",
    component: <Certifications />,
    isProtected: false,
    show: false,
  },
  {
    name: "Personal Information",
    layout: "/auth",
    path: "/personal-information",
    component: <PersonalInformation />,
    isProtected: false,
    show: false,
  },

  {
    name: "Two-step Verification",
    layout: "/auth",
    path: "/two-step-verification",
    component: <TwoStepVerificationPage />,
    isProtected: false,
    show: false,
  },
  {
    name: "Enter Experience",
    layout: "/auth",
    path: "/experience",
    component: <EnterExperience />,
    isProtected: false,
    show: false,
  },

  {
    name: "Welcome",
    role: ["admin"],
    layout: "/auth",
    path: "/welcome",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <WelcomPage />,
    isProtected: false,
    show: false,
  },
  {
    name: "Sign In",
    role: ["admin"],
    layout: "/auth",
    path: "/sign-in",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <SignInPage />,
    isProtected: false,
    show: false,
  },
  {
    name: "Sign Up",
    role: ["admin"],
    layout: "/auth",
    path: "/sign-up",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <SignUpPage />,
    isProtected: false,
    show: false,
  },
  {
    name: "Select Profile Type",
    role: ["admin"],
    layout: "/auth",
    path: "/select-profile-type",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <SelectProfileType />,
    isProtected: false,
    show: false,
  },
  {
    name: "Create Profile",
    role: ["admin"],
    layout: "/auth",
    path: "/create-profile",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <CreatProfilePage />,
    isProtected: false,
    show: false,
  },
  {
    name: "Add Care Recipient",
    role: ["admin"],
    layout: "/auth",
    path: "/add-care-recipient",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <AddCareRecipient />,
    isProtected: false,
    show: false,
  },
  {
    name: "Health Info",
    role: ["admin"],
    layout: "/auth",
    path: "/share-health-info",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <ShareHealthInfo />,
    isProtected: false,
    show: false,
  },
  {
    name: "Health Info",
    role: ["admin"],
    layout: "/auth",
    path: "/all-care-recipients",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <AllCareRecipients />,
    isProtected: false,
    show: false,
  },
  {
    name: "Emergency Contact",
    role: ["admin"],
    layout: "/auth",
    path: "/emergency-contacts",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <EmergencyContacts />,
    isProtected: false,
    show: false,
  },
  {
    name: "Payment Method",
    role: ["admin"],
    layout: "/auth",
    path: "/payment-method",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <PaymentMethod />,
    isProtected: false,
    show: false,
  },
  {
    name: "Reset Password",
    role: ["admin"],
    layout: "/auth",
    path: "/reset-password",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <ResetPasswordPage />,
    isProtected: false,
    show: false,
  },
  // _____________________________________________________
  {
    name: "Home",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <HomePage />,
    isProtected: true,
    show: true,
  },
  {
    name: "My Bookings",
    role: ["admin", "caregiver"],
    layout: "/admin",
    path: "/bookings",
    icon: <IoTicket w="60px" h="60px" />,
    component: <BookingsPage />,
    isProtected: true,
    show: true,
  },
  {
    name: "Interviews",
    role: ["admin"],
    layout: "/admin",
    path: "/interviews",
    icon: <BsPersonFillGear w="60px" h="60px" />,
    component: <InterViewPage />,
    isProtected: true,
    show: true,
  },
  {
    name: "Chat",
    role: ["admin"],
    layout: "/admin",
    path: "/chat",
    icon: <BsPersonFillGear w="60px" h="60px" />,
    component: <ChatPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Dr Bookings",
    role: ["admin"],
    layout: "/admin",
    path: "/bookings/doc",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <DocBookingPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Doctor Profile",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard/doctor-profile",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <DrProfilePage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Schedule Interview",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard/schedule-interview",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <ScheduleInterviewPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Schedule Interview Success",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard/schedule-interview/success",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <ScheduleInterviewSuccessPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Checkout",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard/schedule-interview/checkout",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <CheckoutPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Checkout",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard/schedule-interview/checkout",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <CheckoutPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Notifications",
    role: ["admin"],
    layout: "/admin",
    path: "/notifications",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <NotificationsPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "EmergencyCall",
    role: ["admin"],
    layout: "/admin",
    path: "/emergency-call",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <EmergencyCall />,
    isProtected: true,
    show: false,
  },
  {
    name: "Wallet Transactions",
    role: ["admin"],
    layout: "/admin",
    path: "/settings/wallet/transactions",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <WalletTransactionsPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Wallet Transactions",
    role: ["admin"],
    layout: "/admin",
    path: "/settings/wallet/withdraw",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <WithdrawMoneyPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Add Payment Method",
    role: ["admin"],
    layout: "/admin",
    path: "/settings/payment/add",
    icon: <TbLayoutDashboardFilled w="60px" h="60px" />,
    component: <AddPaymentMethod />,
    isProtected: true,
    show: false,
  },

  {
    name: "Settings",
    layout: "/admin",
    role: ["admin"],
    path: "/settings",
    icon: <IoSettingsSharp w="60px" h="60px" />,
    // component: <div>Select a setting option from the sidebar.</div>,
    component: <SettingsLayout />,
    show: false,
    children: [
      {
        name: "Profile Settings",
        path: "profile",
        icon: <FaUser w="60px" h="60px" />,
        component: <ProfileSettingsPage />,
      },
      {
        name: "Wallet",
        path: "wallet",
        icon: <IoMdWallet w="60px" h="60px" />,
        component: <WalletPage />,
      },
      {
        name: "Payment Method",
        path: "payment",
        component: <PaymentMethodPage />,
        icon: <FaCreditCard w="60px" h="60px" />,
      },

      {
        name: "Privacy Policy",
        path: "privacy",
        component: <PrivacyPolicyPage />,
        icon: <MdShield w="60px" h="60px" />,
      },
      {
        name: "Terms & Conditions",
        path: "terms",
        component: <TermsAndConditionsPage />,
        icon: <FaClipboard w="60px" h="60px" />,
      },
    ],
  },
];

export default routes;
