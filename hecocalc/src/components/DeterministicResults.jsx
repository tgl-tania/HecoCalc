import React from "react";
import '../css/deterministicresults.css'

const DeterministicResults = () => {
  return (
    <div>
      <Template
        box1={633.40}
        box2={12.90}
        box3={929.02}
        box4={633.40}
        box5={12.90}
        box6={929.02}
        box7={929.02}
      />
    </div>
  );
};

const Template = ({ box1, box2, box3,box4, box5, box6,box7}) => {
  return (
    <div>
      <h1 >DETERMINISTIC RESULTS</h1>
      <div className="output-container">
        <div className="output-group">
          <p>TOTAL COST</p>          
        </div>
        <div className="output-group">
          <input type="number" value={box1} disabled />
          <p>GBP</p>          
        </div>
        <div className="output-group">  
          <input type="number" value={box2} disabled />
          <p>GBP</p>        
        </div>
        <div className="output-group">
          <input type="number" value={box3} disabled />  
          <p>GBP</p>  
        </div>
        <div className="output-group">
          <p>QALY'S</p>          
        </div>
        <div className="output-group">
          <input type="number" value={box4} disabled />
          <p>   </p>          
          
        </div>
        <div className="output-group">
          <input type="number" value={box5} disabled />  
          <p>   </p>     
        </div>
        <div className="output-group">
          <input type="number" value={box6} disabled />
          <p>   </p>  
        </div>
        <div className="output-group">
          <h5>(quality-adjusted life years)"</h5>          
        </div>
        <div className="output-group">
          <p>   </p>          
          <p>   </p>
        </div>
        <div className="output-group">  
          <p>   </p>        
          <p>   </p>
        </div>
        <div className="output-group">
          <input type="number" value={box7} disabled />  
          <p>   </p>          
        </div>
      </div>
    </div>
  );
};

export default DeterministicResults;
