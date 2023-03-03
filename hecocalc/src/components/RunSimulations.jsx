import React, { useState } from "react";
import "../css/runsimulations.css";
import { useNavigate } from "react-router-dom";

const RunSimulations = ({ iterationNum, setIterationNum }) => {
  const navigate = useNavigate();
  const route = (route) => {
    navigate("/" + route);
  };

  const run = () => {
    route("simulation");
  };

  return (
    <div className="component">
      <p>Number of Iterations:</p>
      <input
        type="text"
        value={iterationNum}
        onChange={(e) => setIterationNum(e.target.value)}
      />
      <button className="run-button" onClick={() => run(iterationNum)}>
        Run Simulation
      </button>
      <button className="save-button">Save</button>
    </div>
  );
};

export default RunSimulations;
