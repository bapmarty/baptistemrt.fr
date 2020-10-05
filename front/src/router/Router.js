import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Home from '../components/Home';

const Router = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
)

export default Router;