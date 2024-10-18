import React from "react";
import Layout from "../components/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Expenses from "../Pages/Expenses";
import Income from "../Pages/Income";
import Investments from "../Pages/Investments";
import Subscription from "../Pages/Subscription";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import ForgotPassword from "../Pages/ForgotPassword";
import { ResetPassword } from "../Pages/ResetPassword";
import { isUserLoggedIn } from "../api/authService";
import { Profile } from "../Pages/Profile";
import PracticeScroll from "../Pages/Dashboard/practiceScroll";
import TestScroll from "../Pages/Dashboard/testScroll";
import PracticeChart from "../Pages/Dashboard/practiceChart";

function AuthenticatedRoute({ children }) {
  const isAuth = isUserLoggedIn();
  if (isAuth) {
    return children;
  }
  return <Navigate to="/signin" />;
}
function RouterContainer() {
  const isAuth = isUserLoggedIn();
  return (
    <Routes>
      <Route
        path="/"
        element={isAuth ? <Navigate to="/dashboard" /> : <SignIn />}
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/practice" element={<PracticeChart />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path={"/"} element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            <AuthenticatedRoute>
              <Dashboard />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/income"
          element={
            <AuthenticatedRoute>
              <Income />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/expense"
          element={
            <AuthenticatedRoute>
              <Expenses />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/investment"
          element={
            <AuthenticatedRoute>
              <Investments />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/subscription"
          element={
            <AuthenticatedRoute>
              <Subscription />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthenticatedRoute>
              <Profile />
            </AuthenticatedRoute>
          }
        />
        {/* <Route path="/setting" element={<Setting />} /> */}
      </Route>
    </Routes>
  );
}

export default RouterContainer;
