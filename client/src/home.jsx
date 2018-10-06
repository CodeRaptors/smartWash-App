import React, { Component } from 'react';
import fire from './components/fire.jsx';
import Status from './components/status.jsx'


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
          <h2> My laundry status </h2>
            <Status status={this.state.status}/>
          </div>
        );
    }
}


export default Home;
