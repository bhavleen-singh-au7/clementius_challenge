import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Create from "./pages/Create";
import View from "./pages/Views/View";
import EditView from "./pages/Views/EditView"

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/view" component={View} />
        <Route exact path="/view" component={View} />
        <Route exact path="/view/:id" component={EditView} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
