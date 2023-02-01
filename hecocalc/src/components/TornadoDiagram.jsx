import React from 'react';
import {
  Chart, CommonSeriesSettings, Legend, SeriesTemplate, Animation, Title, ValueAxis, Tooltip
} from 'devextreme-react/chart';
import data from '../json/tornado-data.json';

class Tornado extends React.Component {

  //Defines the min and max of the axis
  visualRange = [0,3500]

  render() {
    return (      
      <div style={{minWidth: "1100px"}}>
        <h3 style={{fontSize: '16px', color: "#3333ff", }}>One-way sensitivity analysis</h3>
        <div style={{borderBottom: '1px solid #3333ff'}}></div>
        <Chart id="chart" dataSource={data} 
        barGroupPadding={0.2} rotated={true} 
        palette="Harmony Light">
          <Title text="Tornado diagram (ICER)" />
          {/* The tornado diagram is created as a bar range chart, 
          the following takes the defined ranges from the json file */}
          <CommonSeriesSettings
            type="rangeBar"
            argumentField="yAxisLabel"
            rangeValue1Field="start"
            rangeValue2Field="end"
            barOverlapGroup="yAxisLabel"
            
          >
          </CommonSeriesSettings>

          <Legend verticalAlignment="bottom" horizontalAlignment="right">
          </Legend>

          <ValueAxis title="ICER"
          //Sets the axis range from 0,3500 (visualRange)
          defaultVisualRange={this.visualRange} 
          tickInterval={500}
          /> 

          <Tooltip
            enabled={true}
          />

          <SeriesTemplate nameField="category" /> 
          <Animation enabled={false} />
        </Chart>
      </div>
    );
  }
}

export default Tornado;