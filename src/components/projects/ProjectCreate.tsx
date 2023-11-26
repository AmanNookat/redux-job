import React, { useEffect, useState } from "react";
import { IProject } from "../../store/projects/projectsTypes";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../store/projects/projectsActions";
import { AppDispatch, RootState } from "../../store/store";
import style from "./project.module.css";

interface IModalProps {
  setModal: (value: boolean) => void;
}

const ProjectCreate = ({ setModal }: IModalProps) => {
  const [project, setProject] = useState<IProject>({
    name_project: "",
    description: "",
    image_project: "",
    link: "",
  });

  const { currentUser } = useSelector((state: RootState) => state.users);

  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    // for (let key in project) {
    //   if (!project[key as keyof typeof project].trim()) {
    //     return alert("Заполните все поля");
    //   }
    // }
    dispatch(createProject({ project }));
  };

  return (
    <div className={style.project_modal}>
      <div
        className="m-auto bg-white p-4 rounded-lg flex flex-col text-center items-center gap-5 w-[40rem] h-[40rem] border-black"
        style={{ position: "relative" }}
      >
        <button
          style={{
            position: "absolute",
            right: "15px",
            top: "10px",
            color: "black",
            fontSize: "2rem",
          }}
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </button>
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold mb-16">Add your project</h2>
          <input
            className="h-12 border-2 w-[60vh] mb-3"
            type="text"
            placeholder="name"
            onChange={(e) => {
              setProject({ ...project, name_project: e.target.value });
            }}
          />
          <input
            type="text"
            className="h-56 border-2 overflow-auto w-[60vh] mb-3"
            placeholder="description"
            onChange={(e) => {
              setProject({ ...project, description: e.target.value });
            }}
          />
          <input
            className="h-12 border-2 w-[60vh] mb-3"
            type="text"
            placeholder="link"
            onChange={(e) => {
              setProject({ ...project, link: e.target.value });
            }}
          />
          <input
            className="h-8 border-2 w-[60vh] mb-6"
            type="file"
            onChange={(e: any) => {
              const selectedFile = e.target.files[0];
              setProject({ ...project, image_project: selectedFile });
            }}
          />
          <button className="text-xl border-2 w-32 rounded-2xl hover:bg-gray-900 hover:text-white" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreate;
