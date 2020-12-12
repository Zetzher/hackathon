import React, { Component } from "react";
import "./stylesheets/App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import History from "./pages/History";
import Proyects from "./pages/Proyects";
import Partnership from "./pages/Partnership";
import Navbar from "./components/Navbar";

// API MEDIASTACK http://api.mediastack.com/v1/news?access_key=e4d6d3e8b5aaa07bf1ed6845aeabee08&categories=science

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/history" component={History} />
          <Route exact path="/proyects" component={Proyects} />
          <Route exact path="/unpartnership" component={Partnership} />
        </Switch>
      </>
    );
  }
}

export default App;
