import React, { Component } from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";
import logo from "../assets/logo.png";

class Navbar extends Component {
  render() {
    return (
      <>
        <ReactNavbar
          color="green"
          logo={logo}
          menu={[
            { name: "ABOUT ME", to: "/aboutme" },
            { name: "HISTORY", to: "/history" },
            { name: "PROYECTS", to: "/proyects" },
            { name: "UNPARTNERSHIPS", to: "/unpartnership" },
            { name: "CONTACT", to: "/contact" },
          ]}
          social={[
          ]}
        />
      </>
    );
  }
}

export default Navbar;
