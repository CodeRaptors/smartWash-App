
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import bootstrap from 'bootstrap';
import * as firebase from "firebase";
import Calendar from "./calendar.jsx";
import Home from './userHome.jsx';
import Auth from './Auth.jsx';
import Navigation from "./components/Navigation.jsx";
import About from "./components/about.jsx";
import Payment from './components/payment.jsx';
import StepProgressBar from './components/status.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      lat: '',
      lon: ''
    }
  }

  componentDidMount() {
      navigator.geolocation.getCurrentPosition(location => {
        this.setState({
          lat: location.coords.latitude,
          lon: location.coords.longitude
        })
      });
   }

  render () {
    return (
      <BrowserRouter>
        <div>
        <Navigation />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/registro" component={Auth} />
            <Route path="/cita" component={Calendar} />
            <Route path="/pay" component={Payment} />
          <Route path="/ProgressBar" component={StepProgressBar} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
