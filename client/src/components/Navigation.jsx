import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

render(){
  return (
    <div class="topnav">
    <nav className="headerStyle">
          <ul>
          <NavLink to='/' class="active" href="#home">Home</NavLink>
          <NavLink to='/registro'>Mi cuenta</NavLink>
          <NavLink to='/registro'>Contacto</NavLink>
          <NavLink to='/registro'>Sobre</NavLink>
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
