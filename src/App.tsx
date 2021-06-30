import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/landing-page";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
