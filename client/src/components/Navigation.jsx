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

/*<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">Mi Cuenta</a>

</div>*/










// <div>
// <nav className="navbar is-info">
// <div className="container">
// <div className="navbar-brand">
// <a className="navbar-item" href="/">Smart Wash</a>
// <span className="navbar-burger burger" data-target="navMenu">
// <span></span>
// <span></span>
// <span></span>
// </span>
// </div>
// <div className="topnav">
// <nav className="headerStyle">
//       <ul>
//       <Link to="/registro" className="order" className="navbar-item" className="text-white">Order</Link>
//       <Link to='/Aboutus'>Quienes Somos?</Link>
//       </ul>
// </nav>
// </div>
//
// </div>
// </nav>
// </div>
