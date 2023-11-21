import React from "react";
import { IProject } from "../../store/projects/projectsTypes";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div key={project.id} className="border-2 border-black w-[300px]">
      <img src={project.image_project} alt="image" width="100" />
      <h3>title: {project.name_project}</h3>
      <p>desc: {project.description}</p>
      <p>user: {project.user}</p>
      <a
        href={project.link}
        target="_blanck"
        className="text-blue-500 underline"
      >
        Ссылка
      </a>
    </div>
  );
};

export default ProjectCard;
