import React from "react";
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render(){
    return(
      <nav className="headerStyle">
          <ul>
          <button type="button" className="btn btn-dark"><NavLink to="/">Home</NavLink></button>
          <NavLink to="/cita">Ordena ahora</NavLink>
          </ul>
      </nav>
    );
  }
}


export default Navigation;
