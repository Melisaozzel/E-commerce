import logo from "./logo.svg";

import React, { Component } from "react";
import Home from "./Home";
import WomenScreen from "./WomenScreen";
import ManScreen from "./ManScreen";
import AccesoriesScreen from "./AccesoriesScreen";
import LoginScreen from "./LoginScreen";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/LoginScreen" element={<LoginScreen />} />
          <Route path="/Women" element={<WomenScreen />} />
          <Route path="/Man" element={<ManScreen />} />
          <Route path="/Accesories" element={<AccesoriesScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
