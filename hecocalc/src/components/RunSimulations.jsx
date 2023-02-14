import React from 'react';
import '../css/runsimulations.css'

const RunSimulations = () => {
  return (
    <div className="component">
      <p>Number of Iterations:</p>
      <input type="text" value="1,000" disabled />
      <button className="run-button">Run Simulation</button>
      <button className="save-button">Save</button>
    </div>
  );
};

export default RunSimulations;