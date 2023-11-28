import React from "react";
import { IProject } from "../../store/projects/projectsTypes";

const ProfileProjects = ({ projects }: { projects: [] }) => {
  return (
    <div className="mr-5">
      {projects.length ? (
        projects.map((project: IProject) => (
          <div className="border-2 border-black mb-1" key={project.id}>
            <p>{project.name_project}</p>
            <p>{project.link}</p>
          </div>
        ))
      ) : (
        <p>No Projects</p>
      )}
    </div>
  );
};

export default ProfileProjects;
