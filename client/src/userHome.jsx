import React, { Component } from 'react';
import fire from './components/fire.jsx';
import StepProgressBar from './components/status.jsx'
import { NavLink } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status : undefined
        }
        this.logout = this.logout.bind(this);
    }


    componentDidMount(){
      this.setState({
        status: "secándose"
      })
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
          <div>
            <img src={"/clothes.png"} />
            <p> logged to {this.props.user.email}
            <button onClick={this.logout}>Logout</button>
            </p>
            <button><NavLink to="/cita">Ordena ahora</NavLink></button>
            <h2> My laundry status </h2>
          <button><NavLink to="/ProgressBar">Order Status</NavLink></button>

    </div>


        );
    }
}


export default Home;
