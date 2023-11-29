import React from "react";
import RoadMapFront from "./roadMapFront/RoadMapFront";
import { useNavigate } from "react-router";
import "./RoadMaps.css";

const RoadmapsMain = () => {
  const navigate = useNavigate();
  return (
    <div className="roadMaps">
      <div className="roadmaps--content">
        <h1 className="roadmaps--h1">ROADMAPS FOR DEVELOPERS</h1>
        <div className="select--page">
          <p
            className="front--link bg-slate-100 p-2 rounded-md"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/roadmaps/frontend")}
          >
            Front-End
          </p>
          <p
            className="back--link bg-slate-100 p-2 rounded-md"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/roadmaps/backend")}
          >
            Back-End
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapsMain;
