import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MasterLayout from "./components/Layout/Layout";
import Filter from "./components/Filter";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";

const App = () => {
  return (
    <MasterLayout>
      <Switch>
        <Route path="/filter" component={Filter} exact />
        <Route path="/form" component={MultiStepForm} exact />
        <Redirect from="/" to="/form" />
      </Switch>
    </MasterLayout>
  );
};

export default App;
