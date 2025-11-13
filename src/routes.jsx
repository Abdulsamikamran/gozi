import React from "react";
import { FaUser, FaUsersCog } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaMoneyBills } from "react-icons/fa6";
import { IoSettings, IoSettingsSharp } from "react-icons/io5";
import { TiTicket } from "react-icons/ti";
import { IoWallet } from "react-icons/io5";
import SettingsLayout from "./components/layout/layoutSettings";
import { IoMdWallet } from "react-icons/io";

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
const ResetPasswordPage = React.lazy(() => import("./pages/ResetPassword"));
const DrProfilePage = React.lazy(() => import("./pages/home/docProfilePage"));
const ScheduleInterviewPage = React.lazy(() =>
  import("./pages/home/scheduleInterviewPage")
);
const ScheduleInterviewSuccessPage = React.lazy(() =>
  import("./pages/home/scheduleInterviewSuccess")
);
const CheckoutPage = React.lazy(() => import("./pages/home/checkout"));
const NotificationsPage = React.lazy(() => import("./pages/NotificationPage"));
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

const routes = [
  //auth + welcom flow
  //  ________________________________________________
  {
    name: "Welcome",
    role: ["admin"],
    layout: "/auth",
    path: "/welcome",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <WelcomPage />,
    isProtected: false,
    show: false,
  },
  {
    name: "Sign In",
    role: ["admin"],
    layout: "/auth",
    path: "/sign-in",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <SignInPage />,
    isProtected: false,
    show: false,
  },
  {
    name: "Sign Up",
    role: ["admin"],
    layout: "/auth",
    path: "/sign-up",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <SignUpPage />,
    isProtected: false,
    show: false,
  },
  {
    name: "Select Profile Type",
    role: ["admin"],
    layout: "/auth",
    path: "/select-profile-type",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <SelectProfileType />,
    isProtected: false,
    show: false,
  },
  {
    name: "Create Profile",
    role: ["admin"],
    layout: "/auth",
    path: "/create-profile",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <CreatProfilePage />,
    isProtected: false,
    show: false,
  },
  {
    name: "Add Care Recipient",
    role: ["admin"],
    layout: "/auth",
    path: "/add-care-recipient",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <AddCareRecipient />,
    isProtected: false,
    show: false,
  },
  {
    name: "Health Info",
    role: ["admin"],
    layout: "/auth",
    path: "/share-health-info",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <ShareHealthInfo />,
    isProtected: false,
    show: false,
  },
  {
    name: "Health Info",
    role: ["admin"],
    layout: "/auth",
    path: "/all-care-recipients",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <AllCareRecipients />,
    isProtected: false,
    show: false,
  },
  {
    name: "Emergency Contact",
    role: ["admin"],
    layout: "/auth",
    path: "/emergency-contacts",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <EmergencyContacts />,
    isProtected: false,
    show: false,
  },
  {
    name: "Payment Method",
    role: ["admin"],
    layout: "/auth",
    path: "/payment-method",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <PaymentMethod />,
    isProtected: false,
    show: false,
  },
  {
    name: "Reset Password",
    role: ["admin"],
    layout: "/auth",
    path: "/reset-password",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
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
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <HomePage />,
    isProtected: true,
    show: true,
  },
  {
    name: "Doctor Profile",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard/doctor-profile",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <DrProfilePage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Schedule Interview",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard/schedule-interview",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <ScheduleInterviewPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Schedule Interview Success",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard/schedule-interview/success",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <ScheduleInterviewSuccessPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Checkout",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard/schedule-interview/checkout",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <CheckoutPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Checkout",
    role: ["admin"],
    layout: "/admin",
    path: "/dashboard/schedule-interview/checkout",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <CheckoutPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Notifications",
    role: ["admin"],
    layout: "/admin",
    path: "/notifications",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <NotificationsPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Wallet Transactions",
    role: ["admin"],
    layout: "/admin",
    path: "/settings/wallet/transactions",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <WalletTransactionsPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Wallet Transactions",
    role: ["admin"],
    layout: "/admin",
    path: "/settings/wallet/withdraw",
    icon: (
      <TbLayoutDashboardFilled
        w="20px"
        h="20px"
      />
    ),
    component: <WithdrawMoneyPage />,
    isProtected: true,
    show: false,
  },
  {
    name: "Settings",
    layout: "/admin",
    role: ["admin"],
    path: "/settings",
    icon: (
      <IoSettingsSharp
        w="20px"
        h="20px"
      />
    ),
    // component: <div>Select a setting option from the sidebar.</div>,
    component: <SettingsLayout />,
    show: false,
    children: [
      {
        name: "Profile Settings",
        path: "profile",
        icon: (
          <FaUser
            w="20px"
            h="20px"
          />
        ),
        component: <ProfileSettingsPage />,
      },
      {
        name: "Wallet",
        path: "wallet",
        icon: (
          <IoMdWallet
            w="20px"
            h="20px"
          />
        ),
        component: <WalletPage />,
      },
      {
        name: "Payment Method",
        path: "payment",
        component: <HomePage />,
      },
      {
        name: "Privacy Policy",
        path: "privacy",
        component: <HomePage />,
      },
      {
        name: "Terms & Conditions",
        path: "terms",
        component: <HomePage />,
      },
    ],
  },
];

export default routes;
