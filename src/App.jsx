import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";

import TwoStepVerification from "./pages/TwoStepVerification";
import ResetPassword from "./pages/ResetPassword";
import SetPassword from "./pages/SetPassword";
import PasswordSuccess from "./pages/PasswordSuccess";
import "./App.css";
import SelectProfileType from "./pages/Selectprofiletype";
import CreateProfile from "./pages/Createprofile";
import AddCareRecipient from "./pages/Addcarerecipient";
import ShareHealthInfo from "./pages/Sharehealthinfo";
import AllCareRecipients from "./pages/Allcarerecipients";
import EmergencyContacts from "./pages/Emergencycontacts";
import PaymentMethod from "./pages/Paymentmethod";
import SignUp from "./pages/SIgnUp";
import DashboardLayout from "./components/layout/Dashboard";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Welcome & Auth */}
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/two-step-verification"
          element={<TwoStepVerification />}
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/password-success" element={<PasswordSuccess />} />

        {/* Sign Up Flow */}
        <Route path="/select-profile-type" element={<SelectProfileType />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/add-care-recipient" element={<AddCareRecipient />} />
        <Route path="/share-health-info" element={<ShareHealthInfo />} />
        <Route path="/all-care-recipients" element={<AllCareRecipients />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        {/* Dashboard */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="bookings" element={<BookingsPage />} />
          <Route path="interviews" element={<InterviewsPage />} />
          <Route path="settings" element={<SettingsPage />} /> */}
        </Route>

        {/* Redirect any unknown routes to welcome page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
