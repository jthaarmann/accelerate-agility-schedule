import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sessions from "./Sessions";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Schedule</h1>
        </header>
        <Sessions />
        <Register />
      </div>
    );
  }
}

export default App;
