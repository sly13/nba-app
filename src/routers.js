import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Layout from "./hoc/Layout/layout";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
