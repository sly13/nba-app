import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
