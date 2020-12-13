import React from "react";
import ImagenEjemplo from "../assets/logo.png";
import Footer from "../components/Footer";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import failed from "../assets/images/failed.png";
import china from "../assets/images/china.png";
import john from "../assets/images/JOHN.png";
import exon from "../assets/images/EXON.png";
import famous from "../assets/images/vaxxer.png";
import harry from "../assets/images/Home_Cards_Humans_HarryStyles.jpg";
import dinero from "../assets/images/dinero.png";
import basuraBackground from "../assets/images/background_basura.png";

let Partnership = () => {
  return (
    <>
      <section className="partnerships-first-container">
        <img src={failed} alt="imagen-projects-first-section" />
        <article>
          <h2>
            CHECK OUT OUR LIST OF <span style={{ color: "black" }}>BLACK</span>{" "}
            LISTED CORPORATIONS AND INDIVIDUALS
          </h2>
          <h3>
            To ensure self-preservation, we are very serious about the people we
            want to work with, and even more serious about the people we don't.
          </h3>
          <h3>
            Check out our list of blacklisted corporations and individuals.
          </h3>
        </article>
      </section>

      <section className="partnerships-second-container">
        <h1>
          PERSONAS NON GRATAS
          <aside
            style={{
              height: 30,
              width: 382,
              position: "relative",
              backgroundColor: "#F2D546",
              zIndex: -1,
              bottom: 17,
              right: 4,
            }}
          ></aside>
        </h1>
        <Carousel arrows>
          <article>
            <div>
              <h2>EXXON MOBILE</h2>
              <aside
                style={{
                  zIndex: 1,
                  width: 180,
                  height: 16,
                  bottom: 20,
                  left: 16,
                  backgroundColor: "red",
                  opacity: 1,
                  position: "relative",
                }}
              ></aside>
              <img
                src={exon}
                alt="10-image-slide"
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>Super evil.</h4>
                <h4>
                  Responsible for many oil spills on several oceans. Yet to
                  repent for mistakes.
                </h4>
              </span>
            </div>
            <div>
              <h2>JEFF BEZOS</h2>
              <aside
                style={{
                  zIndex: 1,
                  width: 140,
                  height: 16,
                  bottom: 20,
                  left: 16,
                  backgroundColor: "red",
                  opacity: 1,
                  position: "relative",
                }}
              ></aside>
              <img src={john} alt="imagen-1-card" className="gym-rats-image" />
              <span>
                <h4>Annoyingly evil.</h4>
                <h4>
                  Constantly amassing an insane amount of wealth. Doing nothing
                  for us. Encouraging capitalism.
                </h4>
              </span>
            </div>
          </article>
          <article>
            <div>
              <h2>CHINA</h2>
              <aside
                style={{
                  zIndex: 1,
                  width: 80,
                  height: 16,
                  bottom: 20,
                  left: 16,
                  backgroundColor: "red",
                  opacity: 1,
                  position: "relative",
                }}
              ></aside>
              <img
                src={china}
                alt="10-image-slide"
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>Unstoppable evil.</h4>
                <h4>
                  Currently causing the most pollution to us and our partner
                  Earth.
                </h4>
              </span>
            </div>
            <div>
              <h2>INFLUENCERS</h2>
              <aside
                style={{
                  zIndex: 1,
                  width: 170,
                  height: 16,
                  bottom: 20,
                  left: 16,
                  backgroundColor: "red",
                  opacity: 1,
                  position: "relative",
                }}
              ></aside>
              <img
                src={famous}
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>Stupid evil.</h4>
                <h4>
                  Constantly destroying carefully designed environments for
                  boring and basic selfies.
                </h4>
              </span>
            </div>
          </article>
          <article>
            <div>
              <h2>HARRY STYLES</h2>
              <aside
                style={{
                  zIndex: 1,
                  width: 175,
                  height: 16,
                  bottom: 20,
                  left: 16,
                  backgroundColor: "red",
                  opacity: 1,
                  position: "relative",
                }}
              ></aside>
              <img
                src={harry}
                alt="10-image-slide"
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>PLASTIC</h4>
                <h4>
                  Trendy evil. Semi-synthetic material overused by humans.
                </h4>
              </span>
            </div>
            <div>
              <h2>CAPITALISM</h2>
              <aside
                style={{
                  zIndex: 1,
                  width: 145,
                  height: 16,
                  bottom: 20,
                  left: 16,
                  backgroundColor: "red",
                  opacity: 1,
                  position: "relative",
                }}
              ></aside>
              <img
                src={dinero}
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>Root of all evil.</h4>
                <h4>
                  Root of all evil. Economic system incompatible with humane
                  living conditions.
                </h4>
              </span>
            </div>
          </article>
        </Carousel>
      </section>

      <section className="partnerships-third-container">
        <article>
          <h1>
            THINGS YOU THINK ARE <aside style={{display: 'inline', backgroundColor: 'black', color: 'white'}}>BLACK</aside> LISTED... <br /> BUT ACTUALLY DON´T
            MATTER
          </h1>
          <aside
                style={{
                  zIndex: 1,
                  width: 145,
                  height: 14,
                  bottom: 64,
                  right: 85,
                  backgroundColor: "black",
                  opacity: 1,
                  position: "relative",
                }}
              ></aside>
        </article>
        <div>
          <span>
            <h2>PLASTIC STRAWS</h2>
            <h4>
              Studies estimate as many as 8.3 billion plastic straws pollute the
              world's beaches. Eight million tons of plastic flow into the ocean
              every year, and straws comprise just 0.025 percent of that. You’re
              not saving anything by banning straws.
            </h4>
            <h4 style={{ marginTop: 10 }}>
              You are, however, making things harder for disabled people.
            </h4>
          </span>
          <img
            src={ImagenEjemplo}
            alt="volcanous-image"
            style={{ opacity: 0 }}
          />
        </div>
        <div>
          <img src={ImagenEjemplo} alt="ozone-image" style={{ opacity: 0 }} />
          <span>
            <h2>FAST FASHION SHOPPERS</h2>
            <h4>
              Sustainable fashion is neither accessible nor inclusive. Shaming
              people for consuming fast fashion is elitist, privileged, and
              solves no problems.
            </h4>
          </span>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Partnership;
