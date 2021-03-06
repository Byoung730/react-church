import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./style.css";

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames("App", className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Empowered Church!</h1>
        </div>
        <Link to="about">
          <button>Test React Router</button>
        </Link>
        <br />
        <br />
        <button onClick={this.props.actions.expressTest}>
          Test if Express is working
        </button>
        <br />
        <br />
        <button onClick={this.props.actions.dbTest}>
          Test if Express and Sequelize are working
        </button>
        <div style={{ padding: "30px" }}>{this.props.results}</div>
      </div>
    );
  }
}

export default App;
