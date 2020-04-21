import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store";

import CategoryParent from "./components/Dasboard/Category/categoryParent";
import ProductDash from "./components/Dasboard/ProductDash";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import User from "./components/user/User";
import History from "./components/history/history";
require("dotenv").config();

function App() {
  console.log(process.env);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Route exact path="/" component={ProductDash} />
          <Route path="/Dashboard/Category" component={CategoryParent} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user" component={User} />
          <Route path="/history" component={History} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
