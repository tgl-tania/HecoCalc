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
} from "recharts";
import data from '../json/scatter-data.json';

export default function ScatterPlot() {

  return (
    <>
    <h1 style={{fontSize: '24px'}}>Scatter Plots </h1>
    <ScatterChart
      width={500}
      height={400}
      data={data}
      
    >
      <CartesianGrid horizontal={false} vertical={false} />
      <XAxis type="number" dataKey="QALYs" 
      ticks={[-1,-0.8,-0.6,-0.4,-0.2,0,0.2,0.4,0.6,0.8,1]}>
      </XAxis>
      <YAxis type="number" dataKey="COST" ticks={[-1500,1500]}
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
    <h3 style={{fontSize: '12px'}}>Incremental QALYs</h3>
    </>
  );
}
