import React, { Fragment } from 'react';
import Navbar from "./components/Navbar";
import Routes from "./Routes";

import { Provider } from "react-redux";
import store from "./store";

import Alert from "./components/Alert";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Routes />
        <Alert />
      </Fragment>
    </Provider>
  );
}

export default App;
