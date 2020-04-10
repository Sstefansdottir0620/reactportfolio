import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/components/Home/index";
import Footer from "../src/components/Footer/index";
import Portfolio from "./pages/Portfolio";
import Contact from "../src/components/Contact/index";
import Nav from "../src/components/Nav/index";
// import About from "../src/components/About/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
          {/* <Route path="/about">
          <About /> */}
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
