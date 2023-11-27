import React from "react";
import RoadMapFront from "./roadMapFront/RoadMapFront";
import { useNavigate } from "react-router";

const RoadmapsMain = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>ROADMAPS FOR DEVELOPERS</h1>
      <div className="select--page">
        <p
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/roadmaps/frontend")}
        >
          Front-End
        </p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/roadmaps/backend")}
        >
          Back-End
        </p>
      </div>
    </div>
  );
};

export default RoadmapsMain;
