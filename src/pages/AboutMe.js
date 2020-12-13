import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImagenEjemplo from "../assets/logo.png";
import axios from "axios";
import gifGato from "../assets/gifs/About_me-Mision_Nature.gif";
import gifBote from "../assets/gifs/About_me-Vision_nature1.gif";
import nature from "../assets/images/About_me_LogoNature.png";
import earth from "../assets/images/About_me_LogoEarth.png";

let AboutMe = (props) => {
  let [infoApi, setInfoApi] = useState();

  let getInfoApi = async () => {
    try {
      let call = await axios.get(
        "http://api.mediastack.com/v1/news?access_key=e4d6d3e8b5aaa07bf1ed6845aeabee08&categories=science"
      );
      setInfoApi(call.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getInfoApi();
  }, []);

  return (
    <>
      <article className="article-nature-section">
        <h1>NATURE:</h1>
        <h3>
          <span>Designer of questionable life and awesome environments </span>
          since millions of years ago
        </h3>
      </article>
      <section className="aboutme-first-section">
        <div>
          <img src={gifGato} alt="first-gif" />
          <span>
            <h1>SUSTAINABLE</h1>
            <h1>UNIVERSAL DESIGNS</h1>
            <h4>
              Derived for Latin, we literally mean “birth”.{" "}
              <span style={{ fontWeight: "bold" }}>
                The mother of all that exists and will exist.
              </span>{" "}
              Our goal is to create and provide stable environments for our
              creations to become creators themselves.
            </h4>
            <button>
              <Link
                to={"/history"}
                style={{
                  textDecoration: "none",
                  color: "red",
                  fontWeight: "lighter",
                }}
              >
                Check Out Our History of Releases
              </Link>
            </button>
          </span>
        </div>
      </section>
      <section className="aboutme-second-section">
        <div>
          <span>
            <h1>VARIETY OF MODELS</h1>
            <h4>
              Multidisciplinary design is our specialty. We believe in
              inclusivity and variation.
            </h4>{" "}
            <h4>
              That's why we cover different forms of life, from our world-famous
              humans to less known creations like micro-organisms and
              seldom-seen lake monsters.
            </h4>
          </span>
          <img src={gifBote} alt="second-gif" />
        </div>
        <button>
          {" "}
          <Link
            to={"/history"}
            style={{
              textDecoration: "none",
              color: "red",
              fontWeight: "lighter",
            }}
          >
            Take a Look at Our Catalogue of Products
          </Link>
        </button>
      </section>
      <section className="aboutme-third-section">
        <h1>IN CONSTANT PARTNERSHIP WITH PLANET EARTH</h1>
        <aside
          style={{
            width: 550,
            height: 30,
            backgroundColor: "#edd147",
            position: "relative",
            bottom: 90,
            zIndex: 1,
          }}
        ></aside>
        <aside
          style={{
            width: 250,
            height: 30,
            backgroundColor: "#edd147",
            position: "relative",
            bottom: 60,
            zIndex: 1,
          }}
        ></aside>

        <div>
          <img src={nature} alt="third-img" />
          <img src={earth} alt="fourth-img" />
        </div>
      </section>
      <section className="aboutme-fourth-section">
        <h1>Natura in the news</h1>
        <article>
          {infoApi ? (
            <>
              <span>
                <h2>{infoApi.data[2].title}</h2>
                <h3>{infoApi.data[2].description}</h3>
                <h4>{infoApi.data[2].author}</h4>
              </span>
              <span>
                <h2>{infoApi.data[1].title}</h2>
                <h3>{infoApi.data[1].description}</h3>
                <h4>{infoApi.data[1].author}</h4>
              </span>
              <span>
                <h2>{infoApi.data[4].title}</h2>
                <h3>{infoApi.data[4].description}</h3>
                <h4>{infoApi.data[4].author}</h4>
              </span>
            </>
          ) : (
            <h3>Cargando...</h3>
          )}
        </article>
      </section>
      <Footer />
    </>
  );
};

export default AboutMe;
