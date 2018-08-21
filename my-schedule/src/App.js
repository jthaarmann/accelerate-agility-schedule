import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sessions from "./Sessions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Schedule</h1>
        </header>
        <p className="App-intro">Below is my conference schedule:</p>
        <Sessions />
      </div>
    );
  }
}

export default App;
