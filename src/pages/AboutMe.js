import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import ImagenEjemplo from "../assets/logo.png";
import axios from "axios";

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

  console.log(infoApi && infoApi.data);
  return (
    <>
      <section>
        <div>
          <h1>NATURE:</h1>
          <h3>
            Designer of questionable life and awesome environments since
            millions of years ago
          </h3>
        </div>
        <div>
          <img src={ImagenEjemplo} alt="first-img" />
          <span>
            <h1>SUSTAINABLE UNIVERSAL DESIGNS</h1>
            <h4>
              Derived for Latin, we literally mean “birth”. The mother of all
              that exists and will exist. Our goal is to create and provide
              stable environments for our creations to become creators
              themselves.
            </h4>
            <button>Check Out Our History of Releases</button>
          </span>
        </div>
      </section>
      <section>
        <div>
          <span>
            <h1>VARIETY OF MODELS</h1>
            <h4>
              Multidisciplinary design is our specialty. We believe in
              inclusivity and variation. That's why we cover different forms of
              life, from our world-famous humans to less known creations like
              micro-organisms and seldom-seen lake monsters.
            </h4>
          </span>
          <img src={ImagenEjemplo} alt="second-img" />
        </div>
        <button>Take a Look at Our Catalogue of Products</button>
      </section>
      <section>
        <h1>IN CONSTANT PARTNERSHIP WITH PLANER EARTH</h1>
        <div>
          <img src={ImagenEjemplo} alt="third-img" />
          <img src={ImagenEjemplo} alt="fourth-img" />
        </div>
      </section>
      <section>
        <h1>Natura in the news</h1>
        <h2>
          {infoApi ? (
            <>
              <h3>{infoApi.data[0].title}</h3> <h3>{infoApi.data[0].description}</h3>  {infoApi.data[0].image && <img src={infoApi.data[0].image} alt="img_api" />} <h3>{infoApi.data[0].author}</h3> <h3>{infoApi.data[1].title}</h3><h3>{infoApi.data[0].description}</h3> {infoApi.data[0].image && <img src={infoApi.data[1].image} alt="img_api" />}<h3>{infoApi.data[1].author}</h3>
            </>
          ) : (
            <h3>Cargando...</h3>
          )}
        </h2>
      </section>
      <Footer />
    </>
  );
};

export default AboutMe;
