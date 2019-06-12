import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import Trip from './apiDemo';
import TripContainer from './trip/TripContainer';
import Nav from './Nav'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DestinationContainer from './trip/DestinationContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-he">
            <Nav>Hello</Nav>
          </header>
          <div className='container-fluid'>
            <Route path="/Europe" exact component={DestinationContainer} />
            <Route path="/" exact component={TripContainer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
