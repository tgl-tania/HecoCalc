import React from "react";
import "../css/simulation.css";

export default function Simulation({ iterationNum, digitalProbability }) {
  var { jStat } = require("jstat");
  const iterations = [];
  const dCosts = [];
  const dQals = [];
  const cpCosts = [];
  const cpQals = [];

  for (let i = 1; i <= iterationNum; i++) {
    iterations.push(i);
    dCosts.push(
      Math.round(
        jStat.beta.inv(Math.random(), digitalProbability * 10, 190) *
          2563.41 *
          100
      ) / 100
    );
    dQals.push(
      Math.round(jStat.beta.inv(Math.random(), 810, 190) * 0.547 * 1000) / 1000
    );
    cpCosts.push(
      Math.round(jStat.beta.inv(Math.random(), 810, 190) * 525.12 * 100) / 100
    );
    cpQals.push(
      Math.round(jStat.beta.inv(Math.random(), 810, 190) * 0.135 * 1000) / 1000
    );
  }

  return (
    <div className="trials-container">
      <div className="deterministic-wrapper">
        <div className="deterministic-title">Deterministic</div>
        <div>2563.41</div>
        <div>0.547</div>
        <div>525.12</div>
        <div>0.135</div>
      </div>
      <div className="trials-title">Trials</div>
      <div className="trials-wrapper">
        <div className="trials">
          {iterations.map((iter) => {
            return (
              <div>
                <div>{iter}</div>
              </div>
            );
          })}
        </div>
        <div className="costs">
          {dCosts.map((cost) => {
            return <div>{cost}</div>;
          })}
        </div>
        <div className="costs">
          {dQals.map((qal) => {
            return <div>{qal}</div>;
          })}
        </div>
        <div className="costs">
          {cpCosts.map((cost) => {
            return <div>{cost}</div>;
          })}
        </div>
        <div className="costs">
          {cpQals.map((qal) => {
            return <div>{qal}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
