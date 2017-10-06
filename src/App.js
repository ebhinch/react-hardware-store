import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//dont techinically need the .js on next file bc webpack will assume
import HomePage from "./components/HomePage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
