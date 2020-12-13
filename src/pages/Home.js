import React from "react";
import { Link } from "react-router-dom";
import ImagenEjemplo from "../assets/logo.png";
import Scramble from "react-scramble";
import Footer from "../components/Footer";
import HomeFamous from "../assets/images/vaxxer.png";
import HomeFamous1 from "../assets/images/gymrat.png";
import HomeFamous2 from "../assets/images/famous.png";
import GetTouch from "../assets/gifs/Home_GetInTouch.gif";

/*H1 ROBOTO BOLD 36px, TITULOS DE CARD */

let Home = () => {
  return (
    <>
      <div className="home-first-container">
        <span className="span-bitch-earth">
          <h1>
            IT´S ME, BITCH
            <br />
            YOUR MOTHER EARTH
          </h1>
          <div
            style={{
              height: 30,
              width: 180,
              position: "absolute",
              backgroundColor: "red",
              zIndex: 1,
              top: 23,
            }}
          ></div>
          <div
            style={{
              height: 30,
              width: 280,
              position: "absolute",
              backgroundColor: "red",
              zIndex: 1,
              top: 73,
            }}
          ></div>
          <button>
            <Link
              to={"/aboutme"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Get to know me better
            </Link>
          </button>
        </span>
      </div>
      <div className="home-second-container">
        <h1 style={{ fontSize: 31, position: "relative", right: 150 }}>
          Home to
        </h1>
        <span className="your-next-host-span">
          <h2>
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
          <button>
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Let's talk business
            </Link>
          </button>
        </span>
      </div>
      <div className="home-third-container">
        <h1>
          ENJOY A VARIETY OF HUMAN BODIES TO POSSES
          <aside
            style={{
              height: 30,
              width: 670,
              position: "relative",
              backgroundColor: "#F2D546",
              zIndex: -1,
              bottom: 17,
              right: 5,
            }}
          ></aside>
        </h1>

        <article>
          <div>
            <h1>GYM RATS</h1>
            <aside
              style={{
                zIndex: 1,
                width: 110,
                height: 16,
                backgroundColor: "red",
                position: "relative",
                bottom: 35,
                right: 10
              }}
            ></aside>

            <img
              src={HomeFamous1}
              alt="imagen-1-card"
              className="gym-rats-image"
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
            <h1>ANTI VAXXERS</h1>
            <aside
              style={{
                zIndex: 1,
                width: 145,
                height: 16,
                backgroundColor: "red",
                position: "relative",
                bottom: 35,
                right: 9
              }}
            ></aside>
            <img
              src={HomeFamous}
              alt="imagen-1-card"
              className="vaxxer-image"
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
            <h1>VACUOUS CELEBS</h1>
            <aside
              style={{
                zIndex: 1,
                width: 180,
                height: 16,
                backgroundColor: "red",
                position: "relative",
                bottom: 35,
                right: 9
              }}
            ></aside>
            <img
              src={HomeFamous2}
              alt="imagen-1-card"
              className="celebs-image"
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
        <button> <Link
              to={"/projects"}
              style={{ textDecoration: "none", color: "red", fontWeight: 'lighter' }}
            >Check Out Our Models</Link></button>
      </div>
      <div className="home-fourth-container">
        <span>
          <h1>Want to work together?</h1>
          <h1>Let's get in touch!</h1>
          <img src={GetTouch} alt="imagen_cuarta_section" />
          <Link to={"/contact"}>
            <h5 className="method-contact">Other methods of contact</h5>
          </Link>
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
            <label>Email</label>
            <input type="text" />
            <select>
              <option>Reason for contact</option>
              <option>Deviled doll seeking new body host</option>
              <option>
                Possession n00bs looking for their starting hosts{" "}
              </option>
              <option>Offended people</option>
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
