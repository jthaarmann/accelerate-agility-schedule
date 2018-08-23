import React, { Component } from "react";

class Sessions extends Component {
  constructor() {
    super();
    this.state = {
      sessions: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8081/registration/attendee/1002/sessions")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let sessions = data.map(registration => {
          return (
            <div>
              <h2>{registration.session.name}</h2>
            </div>
          );
        });
        this.setState({ sessions: sessions });
        console.log("state", this.state.sessions);
      });
  }

  render() {
    return (
      <div className="Sessions">
        <p className="App-intro">My registered sessions:</p>
        <div>{this.state.sessions}</div>
      </div>
    );
  }
}

export default Sessions;
