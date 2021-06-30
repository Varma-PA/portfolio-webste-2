import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/landing-page";
import Header from "./components/header";

function App() {
  return (
    <div className="mainGrid">
      <Router>
        <Header />
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
