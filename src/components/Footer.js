import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo.svg";

let Footer = () => {
  return (
    <>
      <footer>
        <span id="footer-image-icon">
          <img src={Logo} alt="imagen-footer" style={{}} />
          <FontAwesomeIcon icon={faMapMarkedAlt} style={{fontSize: 40, position: 'relative', top: 20}} />
        </span>
        <span style={{position: 'relative', right: 250}}>
          <h2>Mother Earth</h2>
          <h3>Third planet from the sun on the solar system.</h3>
          <h3>Orion Arm, Milky way </h3>
        </span>
        <span className="third-section-footer">
          <a href="https://www.nasa.gov/multimedia/nasatv/iss_ustream.html"><h4>Live stream</h4></a>
          <a href="https://www.worldometers.info/world-population"><h4>Current population</h4></a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
