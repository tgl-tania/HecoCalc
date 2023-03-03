import React, { useState } from "react";
import Navbar from '../components/Navbar'
import '../css/snapshots.css'
import '../css/tabs.css'

function Snapshots() {
  const [searchTerm, setSearchTerm] = useState("");
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

          {/* Button Option */}
          {/* <button
            className="button-generate"
          >
            Upload
          </button> */}

          {/* Searchbar Option */}
          <div className="search-wrap">
          <i className='fas fa-magnifying-glass'/>
          <div className="search_box">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          </div>

        </div>

        {/* Not sure if being kept  */}
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

        <div className='snapshot-table-container'>
          <div className='snapshot-table'>
            {/* Implementation will be here */}
          </div>
        </div>

      </div>
    </>
  )
}

export default Snapshots
