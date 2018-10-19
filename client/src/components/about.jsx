import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
      <h1>Recogida sucia. Entregada Fresca y Doblada.</h1>
      <img className="pic" src="steps.jpg"/>
    <h1>El servicio de lavandería a Domicilio SmartWash es una de las mejores maneras de ahorrar
    tiempo y dinero. Su ropa será recogida y entregada, toda
    Fresca y Doblada. Cuidamos su ropa para que pueda pasar
    Su tiempo donde y cuando quiera.
    El tiempo de lavandería no debe interrumpir su tiempo de diversión!</h1>

    </div>
    )
  }
}

export default About;
