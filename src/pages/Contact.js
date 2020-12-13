import React from "react";
import Footer from "../components/Footer";
import ImagenEjemplo from "../assets/logo.png";
import HombreMeditar from "../assets/images/hombre_meditar.png";

let Contact = () => {
  return (
    <>
      <section className="contact-first-container">
        <div>
          <article>
            <h1>HIGHER STATES OF CONSCIOUSNESS</h1>
            <h3>
              Reach me through Nirvana. Feel free to practice different types of
              meditation or psychedelics to get in touch with your spirit guides
              and send me a message.
            </h3>
            <h3>
              Might not work if you're a douchebro trying to capitalize on
              douchey wellness movement trends.
            </h3>
          </article>
          <img
            src={HombreMeditar}
            alt="imagen-contact-ejemplo"
            className="contact-image"
          />
        </div>
      </section>
      <section className="contact-second-container">
        <h1>OR FOR THE MEDITATIVE CHALLENGED</h1>
        <aside
            style={{
              height: 30,
              width: 435,
              position: "relative",
              backgroundColor: "#F2D546",
              zIndex: -1,
              bottom: 36,
              right: 149,
            }}
          ></aside>
          <form>
            <label>
              <h5>Name</h5>
            </label>
            <input type="text" />
            <label>
              <h5>Last name</h5>
            </label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <select>
              <option>Reason for contact</option>
              <option>Deviled doll seeking new body host</option>
              <option>Possession n00bs looking for their starting hosts </option>
              <option>Offended people</option>
            </select>
            <label>Leave a comment</label>
            <textarea></textarea>
            <input type="submit" value="Send" id="button-to-submit" />
          </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
