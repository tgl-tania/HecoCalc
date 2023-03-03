import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer 
} from "recharts";
import LineChartData from "../json/line-chart-data.json" ; 
// Using right now to read Json files as discussed with chan, may need change it to fetch depending on how the backend is done. 

// This Component was written by Shivank let me know if you have any questions.

//This arrow function below multiples values with 100 to convert them to percentages for the graphs. 
const data = LineChartData.map((item) => {
  return {
      Maicer: item.Maicer,
      Digital: item.Digital * 100,
      CurrentPathway: item.CurrentPathway * 100
  }
});

export default function Linechart() {
  return (  <div style={{textAlign:'center',  minWidth: "400px"}}>
    <h3 style={{fontSize: '24px'}}>CEAC </h3>
    {/*I have tested that the graph will not apprear properly unless it is atleast 400px wide, so the div I  will pass will be minimum 400px it can made large*/ }     
    <ResponsiveContainer width="99%" aspect={1}>
      {/* The responsive container allows the graph to change when the screensize changes */}
      <LineChart
        width={600}
        height={600}
        data={data} // This is where we will pass the json file.
        margin= {{bottom: 20, top:10 }}
      >
        {/* All these below are componets of the line chart, imported from the recharts library */}
        <XAxis label={{ value: "WTP (GBP)", position: "insideBottom",offset:-10, fontWeight: 'bold',fill: "black"}}dataKey= "Maicer"
        tick={{fontSize: '12px'}} />
        <YAxis label={{ value:"Probabilty Cost Effective",fill: "black", position: "inside", angle: -90,  dx:-20,fontWeight: 'bold',fontSize: '100%'}}
        tickFormatter={(tick) => `${tick}%`} // Gives the y axis ticks the percentage sign.
        tickCount={11}
        ticks={[0,10,20,30,40,50,60,70,80,90,100]} // Makes displays values from 0-100% with increments of 10%
        tick={{fontSize: '12px'}} 
        />
        <Tooltip /> {/* when someone hovers it shows the value of the line. */}
        <Legend layout="centric" verticalAlign = "middle" align="right"/> {/* Shows which colour belongs to which line. */}
        <Line type="monotone" dataKey="CurrentPathway" stroke="orange" strokeWidth={1.5}/>
        <Line type="monotone" dataKey="Digital" stroke="blue" strokeWidth={1.5}/>
        
      </LineChart>            
    </ResponsiveContainer>    
    </div>
  );
}
