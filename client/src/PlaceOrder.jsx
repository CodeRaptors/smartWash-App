import React, { Component } from 'react';
import OrderFields from './components/OrderFields.jsx';
import { NavLink } from 'react-router-dom';
/*import SurveyFields from 'SurveyFields';
import Confirmation from 'Confirmation';
import Success from 'Success';*/

var fieldValues = {
  name: null,
  PhoneNumber: null,
  Address: null
}

class PlaceOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {step: 1}
}

	render () {
		switch(this.state.step) {case 1: return <OrderFields />};
}


saveValue(fields) {
  return fieldValues = Object.assign({}, fieldValues, fields);

}

nextStep() {
  this.setState({step : this.state.step + 1})
}

// Same as nextStep, but decrementing
previousStep() {
  this.setState({step : this.state.step - 1})
}

render() {
  return (
    <div>
          <OrderFields fieldValues={fieldValues}
          nextStep={this.nextStep}
          saveValues={this.saveValues} />
          <button><NavLink to="/cita">Ordena ahora</NavLink></button>
    </div>
        );
      }
    };

export default PlaceOrder;
