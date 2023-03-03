import treeData from "../json/treeData.json";

let treeDataDisplayed = JSON.stringify(treeData);

let changedData = JSON.parse(treeDataDisplayed);

//FIRST CHILD (DIGITAL)
export const fChild = () => {
  return changedData[0].children[0].name;
};

//FIRST CHILD'S FIRST CHILD (DIGITAL, AEAT)
export const ffChild = () => {
  return changedData[0].children[0].children[0].name;
};

//FIRST CHILD'S FIRST CHILD'S FIRST CHILD (DIGITAL, AEAT, HOSP ADM)
export const fffChild = () => {
  return changedData[0].children[0].children[0].children[0].name;
};

//FIRST CHILD'S FIRST CHILD'S FIRST CHILD'S FIRST CHILD (DIGITAL, AEAT, HOSP ADM, DEAD)
export const ffffChild = () => {
  return changedData[0].children[0].children[0].children[0].children[0].name;
};

//FIRST CHILD'S SECOND CHILD (DIGITAL, IEAT)
export const fsChild = () => {
  return changedData[0].children[0].children[1].name;
};

//SECOND CHILD (CURRENT PATHWAY)
export const sChild = () => {
  return changedData[0].children[1].name;
};

//SECOND CHILD'S FIRST CHILD (CURRENT PATHWAY, AEAT)
export const sfChild = () => {
  return changedData[0].children[1].children[0].name;
};

//SECOND CHILD'S SECOND CHILD (CURRENT PATHWAY, IEAT)
export const ssChild = () => {
  return changedData[0].children[1].children[1].name;
};

//SECOND CHILD'S FIRST CHILD'S FIRST CHILD (CURRENT PATHWAY, AEAT, HOSP ADM)
export const sffChild = () => {
  return changedData[0].children[1].children[0].children[0].name;
};

//SECOND CHILD'S FIRST CHILD'S FIRST CHILD'S FIRST CHILD (CURRENT PATHWAY, AEAT, HOSP ADM, DEAD)
export const sfffChild = () => {
  return changedData[0].children[1].children[0].children[0].children[0].name;
};

//SECOND CHILD'S SECOND CHILD'S FIRST CHILD'S FIRST CHILD (CURRENT PATHWAY, IEAT, HOSP ADM, DEAD)
export const ssffChild = () => {
  return changedData[0].children[1].children[1].children[0].children[0].name;
};

//-------------------------------------******-----------------------------------------//
//-------------------------------------******----------------------------------------//
//-------------------------------------******---------------------------------------//
