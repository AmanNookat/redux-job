import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RegistrationPage from "./pages/users/RegistrationPage";
import AuthorizationPage from "./pages/users/AuthorizationPage";
import ChatRoomsPage from "./pages/chats/ChatRoomsPage";
import ChatPage from "./pages/chats/ChatPage";
import ProjectsPage from "./pages/projects/ProjectsPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<RegistrationPage />} />
      <Route path="/sign-in" element={<AuthorizationPage />} />
      <Route path="/chatrooms" element={<ChatRoomsPage />} />
      <Route path="/chat/:id" element={<ChatPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};

export default MainRoutes;
