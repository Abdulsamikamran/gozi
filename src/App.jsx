import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "./routes";
// import AuthLayout from "./components/layout/AuthLayout";
import DashboardLayout from "./components/layout/Dashboard";
import AuthLayout from "./components/layout/AuthLayout";

// Loader fallback while lazy components load
const Loader = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route element={<AuthLayout />}>
            {routes
              .filter((r) => r.layout === "/auth") // should be /auth
              .map(({ path, component }, idx) => (
                <Route
                  key={idx}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>{component}</Suspense>
                  }
                />
              ))}
          </Route>

          <Route element={<DashboardLayout />}>
            {routes
              .filter((r) => r.layout === "/admin")
              .map(({ path, component, children }, idx) => (
                <Route key={idx} path={path} element={component}>
                  {/* Nested Child Routes */}
                  {children &&
                    children.map((child, cIdx) => (
                      <Route
                        key={cIdx}
                        path={child.path}
                        element={
                          <Suspense fallback={<Loader />}>
                            {child.component}
                          </Suspense>
                        }
                      />
                    ))}
                </Route>
              ))}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
