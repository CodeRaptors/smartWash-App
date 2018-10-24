import React, { Component } from 'react';
import fire from './components/fire.jsx';
import Status from './components/status.jsx'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import $ from 'jquery';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
       this.props.getUserInfo();
       this.props.getUsersOrders();
      console.log("component mounted")
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
          <div>
            <img src={"/clothes.png"} />
            <p> Welcome, {this.props.state.userName}!
            <button onClick={this.logout}><NavLink to ='/'>Logout</NavLink></button>
            <button><NavLink to='/MisOrdenes'>Mis órdenes</NavLink></button>

            </p>
            <div>
            <button><NavLink to='/Form'>¡Ordena Ahora!</NavLink></button>
            </div>
            <h2> My laundry status </h2>
            <Status/>
          </div>
        );
    }
}


export default Home;
