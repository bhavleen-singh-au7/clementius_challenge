import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Create from "./pages/Create";
import View from "./pages/View";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/view" component={View} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
