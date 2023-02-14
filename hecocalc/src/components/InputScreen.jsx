import React from 'react';
import '../css/inputscreen.css';

class InputScreen extends React.Component {
  state = {
    digitalProbability: '14%',
    appropriateTreatment: '14%',
    hospitalWithDigital: '14%',
    serviceWithDigital: '14%',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />         
        <h1>MODEL INPUT PARAMETERS</h1>
        <div className="container">          
          <div className="input-group">
            <p>Digital Probability</p>
            <h4> </h4> {/*Just to match the spacing on screen*/}
            <h4> </h4>
            <input
              type="text"
              name="digitalProbability"
              value={this.state.digitalProbability}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <p>Appropriate Treatment with Digital%</p>
            <input
              type="text"
              name="appropriateTreatment"
              value={this.state.appropriateTreatment}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <p>Hospital with Digital%</p>
            <h4>   </h4>{/*Just to match the spacing on screen*/}
            <input
              type="text"
              name="hospitalWithDigital"
              value={this.state.hospitalWithDigital}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <p>Service with Digital%</p>
            <h4>   </h4>{/*Just to match the spacing on screen*/}
            <input
              type="text"
              name="serviceWithDigital"
              value={this.state.serviceWithDigital}
              onChange={this.handleChange}
            />
          </div>
        </div>        
      </div>
    );
  }
}

export default InputScreen;
