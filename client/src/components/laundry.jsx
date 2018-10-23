import React from 'react';

class Laundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
      <h1> SmartWash </h1>
      <h1>Recogida sucia. Entregada Fresca y Doblada.</h1>
      <img className="img0" src="washer.jpg"/>
      </div>

    )
  }
}

export default Laundry;
