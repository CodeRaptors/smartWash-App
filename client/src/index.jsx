
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Auth from './Auth.jsx';
import fire from "./components/fire.jsx";
import Navigation from "./components/Navigation.jsx";
import About from "./components/about.jsx";
import bootstrap from 'bootstrap';
import Calendar from "./calendar.jsx";
import userHome from './userHome.jsx';
import Form from "./form.jsx";
import Home from './userHome.jsx';
import $ from 'jquery';
// import Payment from './components/payment.jsx'
// import Calendar from "./components/calendar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lon: '',
      userId: undefined,
      userName: undefined,
      user: null,
      account: undefined,
      userOrders: undefined,
      phone: '',
      address: '',
      size: '1-3 kg',
      specialInd: '',
      service: 'Laundry',
      time: '',
    }
    this.getUserInfo = this.getUserInfo.bind(this);
    this.getUsersOrders = this.getUsersOrders.bind(this);
    this.authListener = this.authListener.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addOrder = this.addOrder.bind(this);
    //this.add = this.add.bind(this);
  }

      getUserInfo() {
     $.ajax({
       url: '/users/',
       method:'GET',
       success: (data) => {
        console.log(data, "awiwi", data);
        for ( var i = 0; i < data.length; i++){
          if (data[i].email === this.state.user.email){
            console.log("user found", data[i]);
            const usersInfo = data[i];
            this.setState({
              userId: usersInfo.id,
              userName: usersInfo.userName,
            })
          }

          console.log("user assigned", this.state.userName);

        }
       },
       error:(xhr,err) => {
         console.log('la cagaste desde el fronts',err)
       }
     })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  addOrder(name, phone, address, size, specialInd, service){
   $.ajax({
     type: "POST",
     url: "/order",
     contentType: 'application/json',
     data: JSON.stringify({
       name: name,
       phone: phone,
       address: address,
       size: size,
       specialInd: specialInd,
       service: service
     }),
     success:(data)=> {
     },
     error: (xhr,status,error) => {
       console.log(error);
     }
   });
  }

  getUsersOrders() {
  $.ajax({
   url: '/orders/',
   method:'GET',
   success: (data) => {
    console.log(data, "awiwi las orders llegaron");
      const usersOrders = undefined;
    for ( var i = 0; i < data.length; i++){
      if (data[i].userId === this.state.userId){
        console.log("user's orders found", data[i]);
        const usersOrders = data[i];
      }
    }
    this.setState({
      userOrders: usersOrders
    })
   },
   error:(xhr,err) => {
     console.log('la cagaste desde el fronts orders',err)
   }
  })
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

//this function resets the form component back to default values but
//i dont think well use it anymore
  // addOrder(event) {
  //     event.preventDefault();
  //     this.addOrder(this.state.name, this.state.phone, this.state.address, this.state.size, this.state.specialInd, this.state.service);
  //     this.setState({
  //       phone: '',
  //       address: '',
  //       size: '',
  //       specialInd: '',
  //       service: ''
  //     })
  //   }




  componentDidMount() {
      navigator.geolocation.getCurrentPosition(location => {
        this.setState({
          lat: location.coords.latitude,
          lon: location.coords.longitude
        })
        // this.getUserInfo();
        // this.getUsersOrders();
      });
   }

  render () {
    return (
      <BrowserRouter>
        <div>
        <Navigation />
          <Switch>
            <Route exact path="/" component={About} />

            <Route path="/registro" render={(props) =>
              <Auth{...props} state={this.state} authListener={this.authListener}/>} />

            <Route path='/Form' render={(props) =>
            <Form {...props} state={this.state}  handleChange={this.handleChange}/>} />

            <Route path="/pickDay" component={Calendar} />
            <Route path='/micuenta' render={(props) =>
            <Home {...props} state={this.state}  getUsersOrders={this.getUsersOrders}
            getUserInfo={this.getUserInfo}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
