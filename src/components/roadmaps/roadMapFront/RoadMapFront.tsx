import React from "react";
import "./RoadMapFront.css";
// @ts-ignore
import Tree from "react-d3-tree";

const RoadMapFront = () => {
  const treeData = {
    name: "HTML",
    children: [
      {
        name: "CSS",
        children: [
          { name: "Flexbox" },
          { name: "Grid" },
          { name: "BEM" },
          { name: "SASS" },
          { name: "Bootstrap" },
          {
            name: "JavaScript",
            children: [
              {
                name: "React",
                children: [
                  { name: "Компоненты" },
                  { name: "Стейты" },
                  { name: "Пропсы" },
                  { name: "Хуки" },
                  {
                    name: "Tailwind/MUI",
                  },
                  {
                    name: "Redux",
                    children: [
                      {
                        name: "Webpack",
                      },
                      {
                        name: "TypeScript",
                        children: [
                          {
                            name: "NextJS",
                            children: [
                              {
                                name: "React Native",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "AJAX",
              },
              {
                name: "Git",
              },
              {
                name: "npm/yarn",
              },
            ],
          },
        ],
      },
      {
        name: "База и структура",
      },
      // Добавьте другие уровни
    ],
  };
  return (
    <div className="tree-container">
      <Tree data={treeData} orientation="vertical" />
    </div>
  );
};

export default RoadMapFront;
