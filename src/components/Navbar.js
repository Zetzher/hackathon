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
            { name: "HOME", to: "/" },
            { name: "HISTORY", to: "/history" },
            { name: "PROYECTS", to: "/proyects" },
            { name: "PUBLIC ENEMIES", to: "/enemies" },
            { name: "ABOUT ME", to: "/aboutme" },
            { name: "CONTACT", to: "/contact" },
          ]}
          social={[
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/in/nazeh-taha/",
              icon: ["fab", "linkedin-in"],
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/nazeh200/",
              icon: ["fab", "facebook-f"],
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/nazeh_taha/",
              icon: ["fab", "instagram"],
            },
            {
              name: "Twitter",
              url: "http://nazehtaha.herokuapp.com/",
              icon: ["fab", "twitter"],
            },
          ]}
        />
      </>
    );
  }
}

export default Navbar;
