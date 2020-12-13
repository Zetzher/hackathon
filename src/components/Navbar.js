import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <Link to="/" style={{marginRight: 30}}>
            <img src={logo} alt="logo" style={{width: 50, height: 50}} />
          </Link>
          <Link to="/aboutme" style={{marginRight: 30, textDecoration: 'none'}}><h1>ABOUT US</h1></Link>
          <Link to="/projects" style={{marginRight: 30, textDecoration: 'none'}}><h1>PROJECTS</h1></Link>
          <Link to="/history" style={{marginRight: 30, textDecoration: 'none'}}><h1>HISTORY</h1></Link>
          <Link to="/unpartnership" style={{marginRight: 30, textDecoration: 'none'}}><h1>UNPARTNERSHIP</h1></Link>
          <Link to="/contact" style={{textDecoration: 'none'}}><h1>CONTACT</h1></Link>
        </nav>
      </>
    );
  }
}

export default Navbar;
