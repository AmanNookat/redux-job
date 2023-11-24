import React, { useEffect, useState } from "react";
import { IProject } from "../../store/projects/projectsTypes";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../store/projects/projectsActions";
import { AppDispatch, RootState } from "../../store/store";

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
    <div className="flex fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black/30">
      <div
        className="m-auto bg-white p-16 rounded-lg flex flex-col text-center items-center gap-5 w-[30rem]"
        style={{ position: "relative" }}
      >
        <button
          style={{
            position: "absolute",
            right: "15px",
            top: "10px",
          }}
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </button>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Add your project</h2>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => {
              setProject({ ...project, name_project: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="description"
            onChange={(e) => {
              setProject({ ...project, description: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="link"
            onChange={(e) => {
              setProject({ ...project, link: e.target.value });
            }}
          />
          <input
            type="file"
            onChange={(e: any) => {
              const selectedFile = e.target.files[0];
              setProject({ ...project, image_project: selectedFile });
            }}
          />
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreate;
