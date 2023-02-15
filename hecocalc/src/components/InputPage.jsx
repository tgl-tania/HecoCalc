import React from "react";
import "../css/inputpage.css";
import { useNavigate } from "react-router-dom";

export default function TableOption2() {
  const navigate = useNavigate();

  const router = (route) => {
    navigate(route);
  };

  const variables = [
    "Value",
    "Probabilistic",
    "Deterministic",
    "SE",
    "95% LCI",
    "95% UCI",
    "Distribution",
    "Alpha",
    "Beta",
    "N",
  ];

  const transitionProb = [
    "DIGITAL",
    "AEAT - DIGITAL",
    "Hospital Adm - AEAT - DIGITAL",
    "Hospital Adm - IEAT - DIGITAL",
    "AEAT - Current Pathway",
    "Hospital Adm - AEAT - Current Pathway",
    "Hospital Adm - IEAT - Current Pathway",
    "DEAD - AEAT",
    "DEAD - IEAT",
  ];

  const utilities = ["QoL Dead", "QoL Alive/With clinical response/cured"];

  const costs = [
    "Hospitalisation Cost",
    "DIGITAL",
    "Current Pathway",
    "Drug AEAT",
    "Drug IEAT",
  ];

  const days = [
    "LOS - AEAT",
    "LOS - IEAT",
    "Total duration of antibiotics (d) - AEAT",
    "Total duration of antibiotics (d) - IEAT",
  ];

  return (
    <div className="grid-container">
      <div className="header">
        <div className="header-title">
          <i className="fa-solid fa-bars"></i>
          Decision Tree Input
        </div>
        <button
          className="button-generate"
          onClick={() => router("/generatetree")}
        >
          Generate
        </button>
      </div>
      <div className="table">
        <div className="columns">
          <div className="column-title">Transition Probabilities</div>
          <div className="column-values">
            {transitionProb.map((prob) => {
              return (
                <div className="label-container">
                  <label htmlFor="">{prob}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rows">
          {variables.map((vars) => {
            return (
              <div className="variables">
                <label htmlFor="">{vars}</label>
                {transitionProb.map(() => {
                  return (
                    <div>
                      <input type="text" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="table">
        <div className="columns">
          <div className="column-title">Utilities</div>
          <div className="column-values">
            {utilities.map((prob) => {
              return (
                <div className="label-container">
                  <label htmlFor="">{prob}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rows">
          {variables.map((vars) => {
            return (
              <div className="variables">
                <label htmlFor="">{vars}</label>
                {utilities.map(() => {
                  return (
                    <div>
                      <input type="text" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="table">
        <div className="columns">
          <div className="column-title">Costs (£)</div>
          <div className="column-values">
            {costs.map((prob) => {
              return (
                <div className="label-container">
                  <label htmlFor="">{prob}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rows">
          {variables.map((vars) => {
            return (
              <div className="variables">
                <label htmlFor="">{vars}</label>
                {costs.map(() => {
                  return (
                    <div>
                      <input type="text" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="table">
        <div className="columns">
          <div className="column-title">Event Duration (Days)</div>
          <div className="column-values">
            {days.map((prob) => {
              return (
                <div className="label-container">
                  <label htmlFor="">{prob}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rows">
          {variables.map((vars) => {
            return (
              <div className="variables">
                <label htmlFor="">{vars}</label>
                {days.map(() => {
                  return (
                    <div>
                      <input type="text" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
