import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

render(){
  return (
    <div className="topnav">
    <nav className="headerStyle">
          <ul>
          <Link to='/' class="active" href="#home">Home</Link>
          <Link to='/registro'>Mi cuenta</Link>
          <Link to='/Aboutus'>Quienes Somos?</Link>
          <Link to='/Contacto'>Contacto</Link>
          </ul>
    </nav>
    </div>



  )
}
}

export default Navigation;

/*<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">Mi Cuenta</a>

</div>*/
