import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Legend,
  ResponsiveContainer
} from "recharts";
import data from '../json/scatter-data.json';

export default function ScatterPlot() {

  return (
    <div style={{textAlign:'center',  minWidth: "400px"}}>
      <h1 style={{fontSize: '24px',color: "#3333ff"}}>Scatter Plots </h1>
      <ResponsiveContainer width="100%" aspect={1}>
      <ScatterChart
        width={500}
        height={500}
        data={data}
        
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis type="number" dataKey="QALYs" 
        ticks={[-1,-0.8,-0.6,-0.4,-0.2,0,0.2,0.4,0.6,0.8,1]}>
        </XAxis>
        <YAxis type="number" dataKey="COST" ticks={[-2000,2000]}
        >

        </YAxis>
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="PSA Scatter" data={data} fill="#8884d8" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        {/* Reference Line is set at 0|0 and replicates the x and y axis */}
        <ReferenceLine y={0} stroke="black" strokeWidth={2} />
        <ReferenceLine x={0} stroke="black" strokeWidth={2} />
      </ScatterChart>
      </ResponsiveContainer>
      <h3 style={{fontSize: '12px'}}>Incremental QALYs</h3>    
    </div>
  );
}
