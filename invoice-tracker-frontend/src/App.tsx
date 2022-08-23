import React from "react";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import HrPage from "./pages/HrPage";
import EmployeePage from "./pages/EmployeePage";
import PrivateRoute from "./components/PrivateRoute";
import { useAppSelector } from "./hooks/toolkit-types";
import AbsenceHistoryAccordionList from "./components/absence-history-accordion/absence-history-accordion-list";
import Navbar from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/password/ForgotPassword";
import ResetPassword from "./pages/password/ResetPassword";
import EmployeesList from "./pages/EmployeesList/EMployeesList";
import EmployeesHub from "./pages/EmployeesHub/EmployeesHub";
import AbsenceHistory from "./pages/AbsenceHistory";

function App() {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  );
  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        {/* protected user page */}
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user" element={<UserPage />} />
        </Route>

        <Route path="/team/:teamId" element={<EmployeesList />} />
        <Route path="/empList" element={<EmployeesHub />} />
        {/* reset password routes */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />

        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        <Route path="absencehistory" element={<AbsenceHistory />} />

        {/* protected user page */}

        <Route path="/hr" element={<PrivateRoute />}>
          <Route path="/hr" element={<HrPage />} />
        </Route>
        {/* protected admin page */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
        {/* protected employee page */}
        <Route path="/employee" element={<PrivateRoute />}>
          <Route path="/employee" element={<EmployeePage />} />
        </Route>
        {isAuthenticated ? (
          <Route path="*" element={<Navigate to="/employee" replace />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
