import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import ProjectDetails from "./components/projects/ProjectDetails";
import ProjectEdit from "./components/projects/ProjectEdit";
import ForumPage from "./pages/forum/ForumPage";
import ForumPostAdd from "./components/forum/ForumPostAdd";
import ForumPostDetails from "./components/forum/ForumPostDetails";
import ForumEditPost from "./components/forum/ForumEditPost";
import OneProfile from "./components/profiles/OneProfile";
import Er_codePage from "./pages/er_code/Er_codePage";
import Er_codeEdit from "./components/er_code/Er_codeEdit";
import Er_codeAdd from "./components/er_code/Er_codeAdd";
import Er_codeDetails from "./components/er_code/Er_codeDetails";
import RoadMapFront from "./components/roadmaps/roadMapFront/RoadMapFront";
import RoadMapBack from "./components/roadmaps/roadMapBack/RoadMapBack";
import Education from "./components/education/Education";

import MyPost from "./components/profiles/myPosts/MyPost";
import MyProjects from "./components/profiles/myProjects/MyProjects";
import MyResume from "./components/profiles/myResume/MyResume";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<RegistrationPage />} />
      <Route path="/sign-in" element={<AuthorizationPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/resume" element={<CreateResume />} />
      <Route path="/roadmaps" element={<RoadmapsMain />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/add-post" element={<PostsCreate />} />
      <Route path="/details-post/:id" element={<PostsDetails />} />
      <Route path="/edit-post/:id" element={<PostsEdit />} />
      <Route path="/add-post-desc/:id" element={<PostCreateDesc />} />
      <Route path="/edit-post-desc/:id" element={<PostEditDesc />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/project-edit/:id" element={<ProjectEdit />} />
      <Route path="/forum" element={<ForumPage />} />
      <Route path="/forum-add-post" element={<ForumPostAdd />} />
      <Route path="/forum/:id" element={<ForumPostDetails />} />
      <Route path="/forum-edit-post/:id" element={<ForumEditPost />} />
      <Route path="/profiles/:id" element={<OneProfile />} />
      <Route path="/er_code" element={<Er_codePage />} />
      <Route path="/er_code-add" element={<Er_codeAdd />} />
      <Route path="/er_code/:id" element={<Er_codeDetails />} />
      <Route path="/er_code-edit/:id" element={<Er_codeEdit />} />
      <Route path="/roadmaps/frontend" element={<RoadMapFront />} />
      <Route path="/roadmaps/backend" element={<RoadMapBack />} />
      <Route path="/chats" element={<ChatRoomsPage />} />
      <Route path="/chatrooms" element={<ChatRoomsPage />} />
      <Route path="/chat/:id" element={<ChatPage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/education" element={<Education />} />
      <Route path="/roadmaps/frontend" element={<RoadMapFront />} />
      <Route path="/roadmaps/backend" element={<RoadMapBack />} />
      <Route path="/myPosts" element={<MyPost />} />
      <Route path="/myProjects" element={<MyProjects />} />
      <Route path="/myResume" element={<MyResume />} />
    </Routes>
  );
};

export default MainRoutes;
