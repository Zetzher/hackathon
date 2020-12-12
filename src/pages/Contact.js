import React from "react";
import Footer from "../components/Footer";
import ImagenEjemplo from "../assets/logo.png";

let Contact = () => {
  return (
    <>
      <section className="contact-first-container">
        <div>
          <article>
            <h1>Higher states of consciousness</h1>
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
            src={ImagenEjemplo}
            alt="imagen-contact-ejemplo"
            className="contact-image"
          />
        </div>
      </section>
      <section className="contact-second-container">
        <h1>Or for the meditative challenged</h1>
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
            <option></option>
            <option></option>
            <option></option>
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
