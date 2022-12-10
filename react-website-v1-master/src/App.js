import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Events from "./components/pages/Events";
import SignUp from "./components/pages/SignUp";
import About from "./components/pages/About";
import FAQ from "./components/pages/FAQ";
import Apup from "./components/pages/Apup";
import CareerGuidance from "./components/pages/CareerGuidance";
import ShuttleService from "./components/pages/ShuttleService";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/Events" component={Events} />
          <Route path="/About" component={About} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/faq" component={FAQ} />
          <Route path="/apup" component={Apup} />
          <Route path="/CareerGuidance" component={CareerGuidance} />
          <Route path="/ShuttleService" component={ShuttleService} />
          <Route
            path="/Winter"
            component={() =>
              (window.location = "../WINTER2023BlueSHUTTLECALENDAR.pdf")
            }
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
