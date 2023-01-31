import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Label,
} from "recharts";

const data = [
  { Cost: 1365, Qalys: 0.8236},
  { Cost: 1477, Qalys: 0.177},
  { Cost: 1044, Qalys: 0.1627},
  { Cost: 1002, Qalys: 0.422},
  { Cost: 1298, Qalys: 0.582},
];

export default function ScatterPlot() {
  return (
    <ScatterChart
      width={500}
      height={400}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid horizontal={false} vertical={false} />
      <XAxis type="number" dataKey="Qalys" 
      ticks={[-1,-0.8,-0.6,-0.4,-0.2,0,0.2,0.4,0.6,0.8,1]}>
        {/* <Label
        value={"Incremental QALYs"}
        position='insideBottomRight'
        offset={-10}/> */}
      </XAxis>
      <YAxis type="number" dataKey="Cost" ticks={[-1500,1500]}>
        {/* <Label
        value={"Incremental Cost (GBP)"}
        angle={-90}
        position='insideBottomLeft'/> */}
      </YAxis>
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter data={data} fill="#8884d8"/>
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <ReferenceLine y={0} stroke="black" strokeWidth={2} />
      <ReferenceLine x={0} stroke="black" strokeWidth={2} />

    </ScatterChart>
  );
}
