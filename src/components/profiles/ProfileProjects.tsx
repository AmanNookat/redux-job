import React from "react";
import { IProject } from "../../store/projects/projectsTypes";

const ProfileProjects = ({ projects }: { projects: [] }) => {
  return (
    <div className="mr-5">
      {projects ? (
        projects.map((projects: IProject) => (
          <div className="border-2 border-black mb-1">
            <p>{projects.name_project}</p>
            <p>{projects.link}</p>
          </div>
        ))
      ) : (
        <p>No Projects</p>
      )}
    </div>
  );
};

export default ProfileProjects;
