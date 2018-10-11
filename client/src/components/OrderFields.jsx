import React, { Component } from 'react';
import bootstrap from 'bootstrap';

class OrderFields extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      }
    }

  render() {
    return (
      <div>
      <label>Name</label>
      <input type="text"
             ref="name"
             defaultValue={ this.props.fieldValues.name } />
      <br></br>
      <label>Address</label>
      <input type="text"
             ref="Address"
             defaultValue={ this.props.fieldValues.Address } />
      <br></br>
      <label>PhoneNumber</label>
      <input type="text"
             ref="PhoneNumber"
             defaultValue={ this.props.fieldValues.PhoneNumber } />
      <br></br>
      <label>BagSize</label>
      <input>
        <select className="custom-select" ref="BagSize"
        defaultValue={ this.props.fieldValues.BagSize }>
        <option select = 'true'>Select BagSize</option>
        <option value="1">Small $53</option>
        <option value="2">Medium $62</option>
        <option value="3">Large $71</option>
        </select>
      </input>
      <br></br>
      <label>SelectService</label>
    <select className="custom-select" ref="SelectService"
        defaultValue={ this.props.fieldValues.SelectService } >
        <option select = 'true'>SelectService</option>
        <option value="1">Express $80</option>
        <option value="2">Normal $60</option>
        <option value="3">Delayed $50</option>
      </select>
      </div>
    )
  }

  saveAndContinue(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.getDOMNode().value,
      Address : this.refs.Address.getDOMNode().value,
      PhoneNumber    : this.refs.PhoneNumber.getDOMNode().value,
      BagSize : this.refs.BagSize.getDOMNode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
}

export default OrderFields;
