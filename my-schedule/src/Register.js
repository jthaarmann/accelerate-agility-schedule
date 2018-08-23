import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      availableSessions: []
    };
  }

  registerSession = sessionId => {
    fetch("http://localhost:8081/registration", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        attendeeId: 1002,
        sessionId: sessionId
      })
    }).then(window.location.reload());
  };

  componentDidMount() {
    fetch("http://localhost:8081/session?attendee_id=1002")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ availableSessions: data });
      });
  }

  render() {
    return (
      <div className="Register">
        <p className="App-intro">Available Sessions:</p>

        <ul>
          {this.state.availableSessions.map(session => (
            <li>
              {session.name}{" "}
              <button onClick={() => this.registerSession(session.id)}>
                Register
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Register;
