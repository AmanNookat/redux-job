import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RegistrationPage from "./pages/users/RegistrationPage";
import AuthorizationPage from "./pages/users/AuthorizationPage";
import ChatRoomsPage from "./pages/chats/ChatRoomsPage";
import ChatPage from "./pages/chats/ChatPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import CreateResume from "./components/resume/CreateResume";
import RoadmapsMain from "./components/roadmaps/RoadmapsMain";
import ProjectDetails from "./components/projects/ProjectDetails";
import ProjectEdit from "./components/projects/ProjectEdit";
import ForumPage from "./pages/forum/ForumPage";
import ForumPostAdd from "./components/forum/ForumPostAdd";
import ForumPostDetails from "./components/forum/ForumPostDetails";
import ForumEditPost from "./components/forum/ForumEditPost";
import Er_codePage from "./pages/er_code/Er_codePage";
import Er_codeEdit from "./components/er_code/Er_codeEdit";
import Er_codeAdd from "./components/er_code/Er_codeAdd";
import Er_codeDetails from "./components/er_code/Er_codeDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<RegistrationPage />} />
      <Route path="/sign-in" element={<AuthorizationPage />} />
      <Route path="/chatrooms" element={<ChatRoomsPage />} />
      <Route path="/chat/:id" element={<ChatPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/chats" element={<ChatRoomsPage />} />
      <Route path="/resume" element={<CreateResume />} />
      <Route path="/roadmaps" element={<RoadmapsMain />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/project-edit/:id" element={<ProjectEdit />} />
      <Route path="/forum" element={<ForumPage />} />
      <Route path="/forum-add-post" element={<ForumPostAdd />} />
      <Route path="/forum/:id" element={<ForumPostDetails />} />
      <Route path="/forum-edit-post/:id" element={<ForumEditPost />} />
      <Route path="/er_code" element={<Er_codePage />} />
      <Route path="/er_code-add" element={<Er_codeAdd />} />
      <Route path="/er_code/:id" element={<Er_codeDetails />} />
      <Route path="/er_code-edit/:id" element={<Er_codeEdit />} />
    </Routes>
  );
};

export default MainRoutes;
