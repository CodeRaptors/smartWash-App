import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

render () {
    return (
      <div className="topnav">
      <nav className="headerStyle">
            <ul>
            <Link to='/' class="active" href="#home">Home</Link>
            <Link to='/registro'>Mi cuenta</Link>
            <Link to='/AboutUs'>Quienes Somos?</Link>
            <Link to='/Contacto'>Contacto</Link>

            </ul>
      </nav>
      </div>
    )
  }
}

export default Navigation;
