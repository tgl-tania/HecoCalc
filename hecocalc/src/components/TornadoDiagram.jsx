import React from 'react';
import {
  Chart, CommonSeriesSettings, Legend, SeriesTemplate, Animation, Title, ValueAxis, Tooltip
} from 'devextreme-react/chart';
import data from '../tornadodata.json';

// const format = scale => scale.tickFormat(null, '$');

class Tornado extends React.Component {

  visualRange = [0,3500]

  render() {
    return (

      <Chart id="chart" dataSource={data} 
      barGroupPadding={0.2} rotated={true} 
      palette="Harmony Light">
        <Title text="Tornado diagram (ICER)" />
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
        // tickFormat={format}
        /> 

        <Tooltip
          enabled={true}
        />

        <SeriesTemplate nameField="category" /> 
        <Animation enabled={false} />
      </Chart>
    );
  }
}

export default Tornado;