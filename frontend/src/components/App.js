import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import Trip from './apiDemo';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
        <h1>Hello again</h1>
        <Trip></Trip>
      </div>
    );
  }
}

export default App;
