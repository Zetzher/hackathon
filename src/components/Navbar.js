import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav style={{position: 'absolute', display: 'flex', alignItems: 'center', backgroundColor: 'white', opacity:'0.8', paddingRight: 50, zIndex: 10}}>
          <Link to="/" style={{marginRight: 30}}>
            <img src={logo} alt="logo" style={{width: 50, height: 50}} />
          </Link>
          <Link to="/aboutme" style={{marginRight: 30}}>About us</Link>
          <Link to="/projects" style={{marginRight: 30}}>Projects</Link>
          <Link to="/history" style={{marginRight: 30}}>History</Link>
          <Link to="/unpartnership" style={{marginRight: 30}}>Unpartnership</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </>
    );
  }
}

export default Navbar;
