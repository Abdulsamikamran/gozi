import React from "react";
import { FaClipboard, FaCreditCard, FaUser } from "react-icons/fa";
import { MdShield } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoSettingsSharp, IoTicket } from "react-icons/io5";
import { IoMdWallet } from "react-icons/io";
import { BsPersonFillGear } from "react-icons/bs";
import SettingsLayout from "./components/layout/layoutSettings";

// Lazy-loaded components
const lazyLoad = (importFn) => React.lazy(importFn);

const pages = {
  // Auth pages
  auth: {
    Welcome: lazyLoad(() => import("./pages/Welcome")),
    SignIn: lazyLoad(() => import("./pages/SignIn")),
    SignUp: lazyLoad(() => import("./pages/SIgnUp")),
    OTP: lazyLoad(() => import("./pages/OTP")),
    ResetPassword: lazyLoad(() => import("./pages/ResetPassword")),
    SetPassword: lazyLoad(() => import("./pages/SetPassword")),
    PasswordSuccess: lazyLoad(() => import("./pages/PasswordSuccess")),
    TwoStepVerification: lazyLoad(() => import("./pages/TwoStepVerification")),
  },
  // Profile setup
  profile: {
    SelectProfileType: lazyLoad(() => import("./pages/Selectprofiletype")),
    CreateProfile: lazyLoad(() => import("./pages/Createprofile")),
    PersonalInformation: lazyLoad(() => import("./pages/PersonalInformation")),
    AddCareRecipient: lazyLoad(() => import("./pages/Addcarerecipient")),
    AllCareRecipients: lazyLoad(() => import("./pages/Allcarerecipients")),
    ShareHealthInfo: lazyLoad(() => import("./pages/Sharehealthinfo")),
    EmergencyContacts: lazyLoad(() => import("./pages/Emergencycontacts")),
    PaymentMethod: lazyLoad(() => import("./pages/Paymentmethod")),
  },
  // Caregiver setup
  caregiver: {
    Certifications: lazyLoad(() => import("./pages/Certifications")),
    Availability: lazyLoad(() => import("./pages/Availability")),
    BackgroundCheck: lazyLoad(() => import("./pages/BackgroundCheck")),
    EnterExperience: lazyLoad(() => import("./pages/EnterExperience")),
  },
  // Dashboard
  dashboard: {
    PatientHome: lazyLoad(() => import("./pages/Home")),
    CaregiverHome: lazyLoad(() => import("./pages/CareGiverDashboard")),
    CareGiverDocProfile: lazyLoad(() =>
      import("./pages/home/careGiverDocProfile")
    ),
    DrProfile: lazyLoad(() => import("./pages/home/docProfilePage")),
    PreCheckIn: lazyLoad(() => import("./pages/PreCheckIn")),
  },
  // Bookings & Interviews
  bookings: {
    Bookings: lazyLoad(() => import("./pages/bookings/bookingsPage")),
    DocBooking: lazyLoad(() => import("./pages/bookings/docBookingPage")),
    Interviews: lazyLoad(() => import("./pages/Interviews")),
    ScheduleInterview: lazyLoad(() =>
      import("./pages/home/scheduleInterviewPage")
    ),
    ScheduleInterviewSuccess: lazyLoad(() =>
      import("./pages/home/scheduleInterviewSuccess")
    ),
    Checkout: lazyLoad(() => import("./pages/home/checkout")),
  },
  // Communication
  communication: {
    Chat: lazyLoad(() => import("./pages/chat/chatPage")),
    Notifications: lazyLoad(() => import("./pages/NotificationPage")),
    EmergencyCall: lazyLoad(() => import("./pages/EmergencyCall")),
  },
  // Settings
  settings: {
    ProfileSettings: lazyLoad(() =>
      import("./pages/profile/profileSettings.page")
    ),
    Wallet: lazyLoad(() => import("./pages/profile/walletPage")),
    WalletTransactions: lazyLoad(() =>
      import("./pages/profile/walletTransactions")
    ),
    WithdrawMoney: lazyLoad(() => import("./pages/profile/withdrawMoney")),
    DepositMoney: lazyLoad(() => import("./pages/profile/dipositMoney")),
    PaymentMethod: lazyLoad(() => import("./pages/profile/paymentMethod")),
    AddPaymentMethod: lazyLoad(() =>
      import("./pages/profile/addPaymentMethod")
    ),
    PrivacyPolicy: lazyLoad(() => import("./pages/misc/privacyPolicy")),
    TermsAndConditions: lazyLoad(() =>
      import("./pages/misc/termsAndConditions")
    ),
  },
};

// Constants
const LAYOUTS = {
  AUTH: "/auth",
  ADMIN: "/admin",
};

const ROLES = {
  PATIENT: "patient-and-family",
  CAREGIVER: "caregiver",
  ALL: ["patient-and-family", "caregiver"],
};

// Helper functions
const createRoute = ({
  name,
  path,
  component,
  role = ROLES.ALL,
  layout = LAYOUTS.ADMIN,
  icon = null,
  isProtected = true,
  show = false,
  children = null,
}) => ({
  name,
  role: Array.isArray(role) ? role : [role],
  layout,
  path,
  icon,
  component,
  isProtected,
  show,
  ...(children && { children }),
});

const createAuthRoute = (name, path, component) =>
  createRoute({
    name,
    path,
    component,
    layout: LAYOUTS.AUTH,
    isProtected: false,
    show: false,
  });

const createAdminRoute = (name, path, component, icon, role, show = true) =>
  createRoute({
    name,
    path,
    component,
    icon,
    role,
    layout: LAYOUTS.ADMIN,
    isProtected: true,
    show,
  });

// Route definitions
const authRoutes = [
  createAuthRoute("Welcome", "/welcome", <pages.auth.Welcome />),
  createAuthRoute("Sign In", "/sign-in", <pages.auth.SignIn />),
  createAuthRoute("Sign Up", "/sign-up", <pages.auth.SignUp />),
  createAuthRoute("OTP", "/otp", <pages.auth.OTP />),
  createAuthRoute(
    "Reset Password",
    "/reset-password",
    <pages.auth.ResetPassword />
  ),
  createAuthRoute("Set Password", "/set-password", <pages.auth.SetPassword />),
  createAuthRoute(
    "Password Success",
    "/password-success",
    <pages.auth.PasswordSuccess />
  ),
  createAuthRoute(
    "Two-step Verification",
    "/two-step-verification",
    <pages.auth.TwoStepVerification />
  ),
];

const profileSetupRoutes = [
  createAuthRoute(
    "Select Profile Type",
    "/select-profile-type",
    <pages.profile.SelectProfileType />
  ),
  createAuthRoute(
    "Create Profile",
    "/create-profile",
    <pages.profile.CreateProfile />
  ),
  createAuthRoute(
    "Personal Information",
    "/personal-information",
    <pages.profile.PersonalInformation />
  ),
  createAuthRoute(
    "Add Care Recipient",
    "/add-care-recipient",
    <pages.profile.AddCareRecipient />
  ),
  createAuthRoute(
    "All Care Recipients",
    "/all-care-recipients",
    <pages.profile.AllCareRecipients />
  ),
  createAuthRoute(
    "Health Info",
    "/share-health-info",
    <pages.profile.ShareHealthInfo />
  ),
  createAuthRoute(
    "Emergency Contact",
    "/emergency-contacts",
    <pages.profile.EmergencyContacts />
  ),
  createAuthRoute(
    "Payment Method",
    "/payment-method",
    <pages.profile.PaymentMethod />
  ),
];

const caregiverSetupRoutes = [
  createAuthRoute(
    "Certifications",
    "/certifications",
    <pages.caregiver.Certifications />
  ),
  createAuthRoute(
    "Availability",
    "/availability",
    <pages.caregiver.Availability />
  ),
  createAuthRoute(
    "Background Check",
    "/background-check",
    <pages.caregiver.BackgroundCheck />
  ),
  createAuthRoute(
    "Enter Experience",
    "/experience",
    <pages.caregiver.EnterExperience />
  ),
];

const dashboardRoutes = [
  createAdminRoute(
    "Home",
    "/dashboard",
    <pages.dashboard.PatientHome />,
    <TbLayoutDashboardFilled />,
    ROLES.PATIENT
  ),
  createAdminRoute(
    "Home",
    "/dashboard",
    <pages.dashboard.CaregiverHome />,
    <TbLayoutDashboardFilled />,
    ROLES.CAREGIVER
  ),
  createAdminRoute(
    "Home",
    "/dashboard/doc",
    <pages.dashboard.CareGiverDocProfile />,
    <TbLayoutDashboardFilled />,
    ROLES.CAREGIVER,
    false
  ),
  createAdminRoute(
    "Doctor Profile",
    "/dashboard/doctor-profile",
    <pages.dashboard.DrProfile />,
    <TbLayoutDashboardFilled />,
    ROLES.PATIENT,
    false
  ),
  createAdminRoute(
    "Pre Check in",
    "/dashboard/pre-check-in",
    <pages.dashboard.PreCheckIn />,
    <TbLayoutDashboardFilled />,
    ROLES.PATIENT,
    false
  ),
];

const bookingRoutes = [
  createAdminRoute(
    "My Bookings",
    "/bookings",
    <pages.bookings.Bookings />,
    <IoTicket />,
    ROLES.PATIENT
  ),
  createAdminRoute(
    "Dr Bookings",
    "/bookings/doc",
    <pages.bookings.DocBooking />,
    <TbLayoutDashboardFilled />,
    ROLES.ALL,
    false
  ),
  createAdminRoute(
    "Interviews",
    "/interviews",
    <pages.bookings.Interviews />,
    <BsPersonFillGear />,
    ROLES.ALL
  ),
  createAdminRoute(
    "Schedule Interview",
    "/dashboard/schedule-interview",
    <pages.bookings.ScheduleInterview />,
    <TbLayoutDashboardFilled />,
    ROLES.ALL,
    false
  ),
  createAdminRoute(
    "Schedule Interview Success",
    "/dashboard/schedule-interview/success",
    <pages.bookings.ScheduleInterviewSuccess />,
    <TbLayoutDashboardFilled />,
    ROLES.ALL,
    false
  ),
  createAdminRoute(
    "Checkout",
    "/dashboard/schedule-interview/checkout",
    <pages.bookings.Checkout />,
    <TbLayoutDashboardFilled />,
    ROLES.ALL,
    false
  ),
];

const communicationRoutes = [
  createAdminRoute(
    "Chat",
    "/chat",
    <pages.communication.Chat />,
    <BsPersonFillGear />,
    ROLES.ALL,
    false
  ),
  createAdminRoute(
    "Notifications",
    "/notifications",
    <pages.communication.Notifications />,
    <TbLayoutDashboardFilled />,
    ROLES.ALL,
    false
  ),
  createAdminRoute(
    "EmergencyCall",
    "/emergency-call",
    <pages.communication.EmergencyCall />,
    <TbLayoutDashboardFilled />,
    ROLES.ALL,
    false
  ),
];

const settingsRoutes = [
  createAdminRoute(
    "Wallet Transactions",
    "/settings/wallet/transactions",
    <pages.settings.WalletTransactions />,
    <TbLayoutDashboardFilled />,
    ROLES.PATIENT,
    false
  ),
  createAdminRoute(
    "Wallet Transactions",
    "/settings/wallet/withdraw",
    <pages.settings.WithdrawMoney />,
    <TbLayoutDashboardFilled />,
    ROLES.ALL,
    false
  ),
  createAdminRoute(
    "Deposit Money",
    "/settings/wallet/deposit",
    <pages.settings.DepositMoney />,
    <TbLayoutDashboardFilled />,
    ROLES.ALL,
    false
  ),

  createAdminRoute(
    "Add Payment Method",
    "/settings/payment/add",
    <pages.settings.AddPaymentMethod />,
    <TbLayoutDashboardFilled />,
    ROLES.ALL,
    false
  ),
  createRoute({
    name: "Settings",
    layout: LAYOUTS.ADMIN,
    role: ROLES.ALL,
    path: "/settings",
    icon: <IoSettingsSharp />,
    component: <SettingsLayout />,
    show: false,
    children: [
      {
        name: "Profile Settings",
        path: "profile",
        icon: <FaUser />,
        component: <pages.settings.ProfileSettings />,
        role: ROLES.ALL,
      },
      {
        name: "Wallet",
        path: "wallet",
        icon: <IoMdWallet />,
        component: <pages.settings.Wallet />,
        role: ROLES.ALL,
      },
      {
        name: "Payment Method",
        path: "payment",
        component: <pages.settings.PaymentMethod />,
        icon: <FaCreditCard />,
        role: ROLES.ALL,
      },
      {
        name: "Privacy Policy",
        path: "privacy",
        component: <pages.settings.PrivacyPolicy />,
        icon: <MdShield />,
        role: ROLES.ALL,
      },
      {
        name: "Terms & Conditions",
        path: "terms",
        component: <pages.settings.TermsAndConditions />,
        icon: <FaClipboard />,
        role: ROLES.ALL,
      },
    ],
  }),
];

const routes = [
  ...authRoutes,
  ...profileSetupRoutes,
  ...caregiverSetupRoutes,
  ...dashboardRoutes,
  ...bookingRoutes,
  ...communicationRoutes,
  ...settingsRoutes,
];

export default routes;
