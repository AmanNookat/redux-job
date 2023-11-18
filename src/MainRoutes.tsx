import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RegistrationPage from "./pages/users/RegistrationPage";
import AuthorizationPage from "./pages/users/AuthorizationPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<RegistrationPage />} />
      <Route path="/sign-in" element={<AuthorizationPage />} />
    </Routes>
  );
};

export default MainRoutes;
