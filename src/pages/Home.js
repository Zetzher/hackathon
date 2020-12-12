import React from "react";
import { Link } from "react-router-dom";
import ImagenEjemplo from "../assets/logo.png";
import Scramble from "react-scramble";
import Footer from "../components/Footer";

/*H1 ROBOTO BOLD 36px, TITULOS DE CARD */

let Home = () => {
  return (
    <>
      <div className="home-first-container">
        <img
          src={ImagenEjemplo}
          alt="imagen-primera-seccion"
          className="bitch-image-earth"
        />
        <span className="span-bitch-earth">
          <h1>
            It's me, bitch <br /> Your mother earth
          </h1>
          <button>Get to know me better</button>
        </span>
      </div>
      <div className="home-second-container">
        <h2 style={{ fontSize: 31, position: "relative", right: 150 }}>
          Home to
        </h2>
        <span className="your-next-host-span">
          <h2
            style={{
              textDecoration: "underline",
              fontSize: 36,
              position: "relative",
              bottom: 20,
            }}
          >
            <Scramble
              autoStart
              text="Your next host ;)"
              steps={[
                {
                  roll: 40,
                  action: "+",
                  type: "all",
                },
                {
                  action: "-",
                  type: "forward",
                },
              ]}
            />
          </h2>
          <button>Let's talk business</button>
        </span>
      </div>
      <div className="home-third-container">
        <h1 style={{ textAlign: "left" }}>
          Enjoy a variety of human bodies to posses
        </h1>
        <article>
          <div>
            <h1>Gym Rats</h1>
            <img
              src={ImagenEjemplo}
              alt="imagen-1-card"
              className="posession-image-section"
            />
            <span>
              <h4>People obsessed with their physical shape. </h4>
              <h4>
                Perfect for high-speed races, and achieving unresolved issues
                that required a lot of physical effort
              </h4>
            </span>
          </div>
          <div>
            <h1>Anti vaxxers</h1>
            <img
              src={ImagenEjemplo}
              alt="imagen-1-card"
              className="posession-image-section"
            />
            <span>
              <h4>Humans willingly weakening their immune systems.</h4>
              <h4>
                Perfect for getting a host without much effort on your part. May
                not last as long as other models.
              </h4>
            </span>
          </div>
          <div>
            <h1>Vacuous celebs</h1>
            <img
              src={ImagenEjemplo}
              alt="imagen-1-card"
              className="posession-image-section"
            />
            <span>
              <h4>People others have willingly put above themselves.</h4>
              <h4>
                Infinite resources and mass audiences. Perfect for more
                difficult revenge plans requiring a little more time and money.
              </h4>
            </span>
          </div>
        </article>
        <button>Check out my other models</button>
      </div>
      <div className="home-fourth-container">
        <span>
          <h1>Want to work together?</h1>
          <h1>Let's get in touch!</h1>
          <img src={ImagenEjemplo} alt="imagen_cuarta_section" />
          <Link to={"/contact"}><h5 style={{color: "black", position: 'relative', top: 50, fontSize: 18}}>Other methods of contact</h5></Link>
        </span>
        <span>
          <form>
            <label>
              <h5>Name</h5>
            </label>
              <input type="text" />
            <label>
              <h5>Last name</h5>
            </label>
              <input type="text" />
            <label>
              Email
            </label>
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
        </span>
      </div>
      <Footer />
    </>
  );
};

export default Home;
