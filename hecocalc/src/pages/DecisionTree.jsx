import React, { useState } from "react";
import Tree from "react-d3-tree";
import "../css/decisiontree.css";
import treeData from "../json/treeData.json";
import Navbar from "../components/Navbar";

import EditTree from "../components/EditTree";

export default function TreeGraph() {
  const [editBtn, setEditBtn] = useState(true);

  const toggleEditButton = () => {
    setEditBtn(!editBtn);
  };

  let treeDataDisplayed = JSON.stringify(treeData);

  let changedData = JSON.parse(treeDataDisplayed);

  // FIRST CHILD
  const [prob1, setProb1] = useState(
    changedData[0].children[0].attributes.Prob
  );

  //First child's first child
  const [prob2, setProb2] = useState(
    changedData[0].children[0].children[0].attributes.Prob
  );

  //First child's first child's first child
  const [prob3, setProb3] = useState(
    changedData[0].children[0].children[0].children[0].attributes.Prob
  );

  //First child's second child's first child
  const [prob4, setProb4] = useState(
    changedData[0].children[0].children[1].children[0].attributes.Prob
  );

  //Second child's first child
  const [prob5, setProb5] = useState(
    changedData[0].children[1].children[0].attributes.Prob
  );

  //Second child's first child's first child
  const [prob6, setProb6] = useState(
    changedData[0].children[1].children[0].children[0].attributes.Prob
  );

  //Second child's second child's first child
  const [prob7, setProb7] = useState(
    changedData[0].children[1].children[1].children[0].attributes.Prob
  );

  const [prob8, setProb8] = useState(
    changedData[0].children[0].children[0].children[0].children[0].attributes
      .Prob
  );

  const [prob9, setProb9] = useState(
    changedData[0].children[0].children[1].children[0].children[0].attributes
      .Prob
  );

  const [cost1, setCost1] = useState(
    changedData[0].children[0].attributes.Cost
  );
  const [cost2, setCost2] = useState(
    changedData[0].children[0].attributes.Cost
  );
  const [cost3, setCost3] = useState(
    changedData[0].children[1].attributes.Cost
  );
  const [cost4, setCost4] = useState(
    changedData[0].children[0].children[0].attributes.Cost
  );
  const [cost5, setCost5] = useState(
    changedData[0].children[0].attributes.Cost
  );

  const [days1, setDays1] = useState(1);
  const [days2, setDays2] = useState(1);
  const [days3, setDays3] = useState(1);
  const [days4, setDays4] = useState(1);

  //------------------------First Child------------------------
  changedData[0].children[0].attributes.Prob = prob1;
  changedData[0].children[1].attributes.Prob = 1 - prob1;

  //------------------------First child's first child------------------------
  changedData[0].children[0].children[0].attributes.Prob = prob2;
  changedData[0].children[0].children[1].attributes.Prob = 1 - prob2;

  //------------First child's first child's first child------------
  changedData[0].children[0].children[0].children[0].attributes.Prob = prob3;
  changedData[0].children[0].children[0].children[1].attributes.Prob =
    1 - prob3;

  //------------First child's second child's first child------------
  changedData[0].children[0].children[1].children[0].attributes.Prob = prob4;
  changedData[0].children[0].children[1].children[1].attributes.Prob =
    1 - prob4;

  //------------Second child's first child------------
  changedData[0].children[1].children[0].attributes.Prob = prob5;
  changedData[0].children[1].children[1].attributes.Prob = 1 - prob5;

  //------------Second child's first child's first child------------
  changedData[0].children[1].children[0].children[0].attributes.Prob = prob6;
  changedData[0].children[1].children[0].children[1].attributes.Prob =
    1 - prob6;

  //------------Second child's second child's first child------------
  changedData[0].children[1].children[1].children[0].attributes.Prob = prob7;
  changedData[0].children[1].children[1].children[1].attributes.Prob =
    1 - prob7;

  //------------Calculating Dead and Alive for first child's first child------------
  changedData[0].children[0].children[0].children[0].children[0].attributes.Prob =
    prob8;

  changedData[0].children[0].children[0].children[0].children[1].attributes.Prob =
    1 - prob8;

  changedData[0].children[0].children[0].children[1].children[0].attributes.Prob =
    prob8;

  changedData[0].children[0].children[0].children[1].children[1].attributes.Prob =
    1 - prob8;

  changedData[0].children[1].children[0].children[0].children[0].attributes.Prob =
    prob8;

  changedData[0].children[1].children[0].children[0].children[1].attributes.Prob =
    1 - prob8;

  changedData[0].children[1].children[0].children[1].children[0].attributes.Prob =
    prob8;

  changedData[0].children[1].children[0].children[1].children[1].attributes.Prob =
    1 - prob8;

  //------------Calculating Dead and Alive for first child's second child------------
  changedData[0].children[0].children[1].children[0].children[0].attributes.Prob =
    prob9;

  changedData[0].children[0].children[1].children[0].children[1].attributes.Prob =
    1 - prob9;

  changedData[0].children[0].children[1].children[1].children[0].attributes.Prob =
    prob9;

  changedData[0].children[0].children[1].children[1].children[1].attributes.Prob =
    1 - prob9;

  changedData[0].children[1].children[1].children[0].children[0].attributes.Prob =
    prob9;

  changedData[0].children[1].children[1].children[0].children[1].attributes.Prob =
    1 - prob9;

  changedData[0].children[1].children[1].children[1].children[0].attributes.Prob =
    prob9;

  changedData[0].children[1].children[1].children[1].children[1].attributes.Prob =
    1 - prob9;

  //------------------------COSTS * DAYS------------------------
  changedData[0].children[0].children[0].children[0].attributes.Cost =
    cost1 * days1;
  changedData[0].children[1].children[0].children[0].attributes.Cost =
    cost1 * days1;

  changedData[0].children[0].children[1].children[0].attributes.Cost =
    cost1 * days2;
  changedData[0].children[1].children[1].children[0].attributes.Cost =
    cost1 * days2;

  changedData[0].children[0].attributes.Cost = cost2;
  changedData[0].children[1].attributes.Cost = cost3;

  changedData[0].children[0].children[0].attributes.Cost = cost4 * days3;
  changedData[0].children[1].children[0].attributes.Cost = cost4 * days3;

  changedData[0].children[0].children[1].attributes.Cost = cost5 * days4;
  changedData[0].children[1].children[1].attributes.Cost = cost5 * days4;

  treeDataDisplayed = JSON.stringify(changedData);

  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar />
      <div id="treeWrapper">
        <div className="tree">
          <Tree
            data={JSON.parse(treeDataDisplayed)}
            translate={{ x: 100, y: 450 }}
            pathFunc={"step"}
            zoom={0.7}
            separation={{ siblings: 1, nonSiblings: 1 }}
            nodeSize={{ x: 400, y: 70 }}
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"
            rootNodeClassName="node__root"
          />
        </div>
        <button
          className={editBtn ? "edit-btn" : "update-btn"}
          onClick={() => {
            toggleNav();
            toggleEditButton();
          }}
        ></button>
        <div id="sidebar" className={open ? "" : "collapse"}>
          <EditTree
            open={open}
            setCost1={setCost1}
            setCost2={setCost2}
            setCost3={setCost3}
            setCost4={setCost4}
            setCost5={setCost5}
            setDays1={setDays1}
            setDays2={setDays2}
            setDays3={setDays3}
            setDays4={setDays4}
            setProb1={setProb1}
            setProb2={setProb2}
            setProb3={setProb3}
            setProb4={setProb4}
            setProb5={setProb5}
            setProb6={setProb6}
            setProb7={setProb7}
            setProb8={setProb8}
            setProb9={setProb9}
          />
        </div>
      </div>
    </>
  );
}
