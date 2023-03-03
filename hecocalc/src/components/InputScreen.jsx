import React, { useState } from "react";
import "../css/inputscreen.css";

export default function InputScreen({
  digitalProbability,
  setDigitalProbability,
  appropriateTreatment,
  setAppropriateTreatment,
  hospitalWithDigital,
  setHospitalWithDigital,
  serviceWithDigital,
  setServiceWithDigital,
}) {
  const handleChange = (e, change, item) => {
    change(e.target.value);
    localStorage.setItem("tpValue: " + item, e.target.value / 100);
  };
  return (
    <div className="input-screen-container">
      <h1>MODEL INPUT PARAMETERS</h1>
      <div className="container">
        <div className="input-group">
          <p>Digital Probability</p>
          <h4> </h4> {/*Just to match the spacing on screen*/}
          <h4> </h4>
          <div className="input-cont">
            <input
              type="number"
              max={100}
              min={0}
              name="digitalProbability"
              value={digitalProbability}
              onChange={(e) =>
                handleChange(e, setDigitalProbability, "DIGITAL")
              }
            />
            %
          </div>
        </div>
        <div className="input-group">
          <p>Appropriate Treatment with Digital%</p>
          <div className="input-cont">
            <input
              type="number"
              max={100}
              min={0}
              name="appropriateTreatment"
              value={appropriateTreatment}
              onChange={(e) =>
                handleChange(e, setAppropriateTreatment, "AEAT - DIGITAL")
              }
            />
            %
          </div>
        </div>
        <div className="input-group">
          <p>Hospital with Digital%</p>
          <h4> </h4>
          {/*Just to match the spacing on screen*/}
          <div className="input-cont">
            <input
              type="number"
              max={100}
              min={0}
              name="hospitalWithDigital"
              value={hospitalWithDigital}
              onChange={(e) => setHospitalWithDigital(e.target.value)}
            />
            %
          </div>
        </div>
        <div className="input-group">
          <p>Service with Digital%</p>
          <h4> </h4>
          {/*Just to match the spacing on screen*/}
          <div className="input-cont">
            <input
              type="number"
              max={100}
              min={0}
              name="serviceWithDigital"
              value={serviceWithDigital}
              onChange={(e) => setServiceWithDigital(e.target.value)}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}
