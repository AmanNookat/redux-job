import React from "react";
import { IProject } from "../../store/projects/projectsTypes";
import { useNavigate } from "react-router-dom";
import style from "./project.module.css";

const ProjectCard = ({ project }: { project: IProject }) => {
  const navigate = useNavigate();

  return (
    <div key={project.id} className={style.project_card}>
      <div className={style.project_card_img}>
        <img
          src={project.image_project}
          alt="image"
        />
      </div>
      <div className={style.project_card_text}>
        <div>
          <h3 className="text-5xl mt-4">{project.name_project}</h3>
          <p className={style.project_card_scrol}>{project.description}</p>
        </div>
        <div>
          <p className="mt-4">{project.user}</p>
          <a
            href={project.link}
            target="_blanck"
            className="text-blue-500 underline mt-6"
          >
            here is my github go to find out more
          </a>
          <br />
          <button
            className={style.project_card_text_detail}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            click for details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
