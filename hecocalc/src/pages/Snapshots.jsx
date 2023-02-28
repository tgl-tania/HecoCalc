import React, { useState } from "react";
import Navbar from '../components/Navbar'
import '../css/snapshots.css'
import '../css/tabs.css'

function Snapshots() {
  const [toggleState, setToggleState] = useState(1);
  const [tempList, setTempList] = useState([]);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Navbar />

      {/* using divs and css from inputpage*/}
      <div className="grid-container">
        <div className="header">
          <div className="header-title">My snapshots</div>

          {/* Instead now theres going to be a search instead of buttons */}
          <button
            className="button-generate"
          >
            Upload
          </button>
        </div>

        <div className='bloc-tabs-topic'>
          <div className={toggleState === 1 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(1);
          }}
          >
            <div>
              All
            </div>
          </div>

          <div className={toggleState === 1 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(1);
          }}
          >
            <div>
              Accepted
            </div>
          </div>

          <div className={toggleState === 1 ? "tabs-topic active-tabs-topic" : "tabs-topic"}
          onClick={() => {
            toggleTab(1);
          }}
          >
            <div>
              Rejected
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default Snapshots
