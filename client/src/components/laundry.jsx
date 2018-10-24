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
      <font className="text1" size="6" color="blue">&#9885; SmartWash</font>
      <h1>Recogida sucia. Entregada Fresca y Doblada.</h1>
      <img className="img0" src="washer.jpg"/>
      </div>

    )
  }
}

export default Laundry;
