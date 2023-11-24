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
import PostsPage from "./pages/posts/PostsPage";
import { PostsCreate } from "./components/posts/PostsCreate";
import { PostsDetails } from "./components/posts/PostsDetails";
import { PostsEdit } from "./components/posts/PostsEdit";
import { PostCreateDesc } from "./components/posts/postsDesc/PostCreateDesc";
import { PostEditDesc } from "./components/posts/postsDesc/PostEditDesc";

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

      <Route path="/posts" element={<PostsPage />} />
      <Route path="/add-post" element={<PostsCreate />} />
      <Route path="/details-post/:id" element={<PostsDetails />} />
      <Route path="/edit-post/:id" element={<PostsEdit />} />
      <Route path="/add-post-desc/:id" element={<PostCreateDesc />} />
      <Route path="/edit-post-desc/:id" element={<PostEditDesc />} />
    </Routes>
  );
};

export default MainRoutes;
