import React from "react";
import ImagenEjemplo from "../assets/logo.png";
import Footer from "../components/Footer";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import NaturaGif from "../assets/gifs/About_me-Vision_nature1.gif";
import gimrats from "../assets/images/gymrat.png";
import famous from "../assets/images/famous.png";
import vaxxer from "../assets/images/vaxxer.png";
import rkofig from "../assets/images/Home_Cards_Humans_RKOI.png";
import harry from "../assets/images/Home_Cards_Humans_HarryStyles.jpg";
import runner from "../assets/images/Home_Cards_Humans_Runner.jpg";
import gato from "../assets/images/gato.png";
import perro from "../assets/images/perro.png";
import cactus from "../assets/images/cactus.png";
import piedra from "../assets/images/piedra.jpeg";
import vaca from "../assets/images/vaca.jpg";
import arbol from "../assets/images/arbol.jpg";

let Projects = () => {
  return (
    <>
      <section className="projects-first-container">
        <article>
          <h3>
            Since the invention of mother nature, we’ve have embarked on many
            different projects.
          </h3>
          <h1>FIND THE RIGHT ONE FOR YOU!</h1>
        </article>
        <img
          src={NaturaGif}
          alt="imagen-projects-first-section"
          className="natura-gif-project"
        />
      </section>

      <section className="projects-second-container">
        <h1>DIVERSE HUMANITY = RICH SELECTION OF HOST BODIES</h1>
        <Carousel arrows>
          <article>
            <div>
              <h2>GYM RATS</h2>
              <img
                src={gimrats}
                alt="10-image-slide"
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>People obsessed with their physical shape.</h4>
                <h4>
                  Perfect for high-speed races, and achieving unresolved issues
                  that required a lot of physical effort
                </h4>
              </span>
            </div>
            <div>
              <h2>ANTI VAXXERS</h2>
              <img
                src={vaxxer}
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>Humans willingly weakening their immune systems.</h4>
                <h4>
                  Perfect for getting a host without much effort on your part.
                  May not last as long as other models.
                </h4>
              </span>
            </div>
          </article>
          <article>
            <div>
              <h2>VACUOUS CELEBS</h2>
              <img
                src={famous}
                alt="10-image-slide"
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>People others have willingly put above themselves.</h4>
                <h4>
                  Infinite resources and mass audiences. Perfect for more
                  difficult revenge plans requiring a little more time and
                  money.
                </h4>
              </span>
            </div>
            <div>
              <h2>RKOFIG</h2>
              <img
                src={rkofig}
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>1 percenters. Unbothered and forever blessed.</h4>
                <h4>
                  Unlimited funds, limited self-awareness. You won't be stopped
                  by lack of material resources. Might be slightly damaged by
                  casual drug use.
                </h4>
              </span>
            </div>
          </article>
          <article>
            <div>
              <h2>HARRY STYLES</h2>
              <img
                src={harry}
                alt="10-image-slide"
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>Globally loved pop star.</h4>
                <h4>
                  Floppy haired singer who's stayed mostly unproblematic
                  throughout the years. Perfect for reaching wide tween
                  audiences.
                </h4>
              </span>
            </div>
            <div>
              <h2>RUNNERS</h2>
              <img
                src={runner}
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>Popular model from our Fit line.</h4>
                <h4>
                  Usually travel in packs. Strong leg muscles. Best option for
                  traveling long distance while staying on a budget.
                </h4>
              </span>
            </div>
          </article>
        </Carousel>
      </section>

      <section className="projects-second-container">
        <h1>Or other forms of life</h1>
        <Carousel arrows>
          <article>
            <div>
              <h2>CATS</h2>
              <img
                src={gato}
                alt="10-image-slide"
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>Internet favorite.</h4>
                <h4>
                  Elegant and mysterious. Agile, though might cause suspicions
                  on everyone due to constant bad publicity.
                </h4>
              </span>
            </div>
            <div>
              <h2>DOGS</h2>
              <img
                src={perro}
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>Human favorite.</h4>
                <h4>
                  Fluffy, friendly. Humans will never see you coming if you
                  choose this host for your revenge plans.
                </h4>
              </span>
            </div>
          </article>
          <article>
            <div>
              <h2>CACTI</h2>
              <img
                src={cactus}
                alt="10-image-slide"
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>Great design from our classic desert line.</h4>
                <h4>
                  Cause great emotional damage as house plants for millennials.
                  Comes with spikes.
                </h4>
              </span>
            </div>
            <div>
              <h2>COWS</h2>
              <img
                src={vaca}
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4> The Harry Styles of mammals.</h4>
                <h4>
                  Comes in various shapes and colors. Great for catching a break
                  of your revenge plans while chilling in an unproblematic host.
                  Sacred in some places.
                </h4>
              </span>
            </div>
          </article>
          <article>
            <div>
              <h2>TREES</h2>
              <img
                src={arbol}
                alt="10-image-slide"
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4> Nature favorite, one of our oldest designs.</h4>
                <h4>
                  Beware they're currently in their flop era due to
                  deforestation. Great chance of appearing in the background of
                  a Tay Swift album cover.
                </h4>
              </span>
            </div>
            <div>
              <h2>ROCKS</h2>
              <img
                src={piedra}
                alt="imagen-1-card"
                className="gym-rats-image"
              />
              <span>
                <h4>One of the most sturdy designs.</h4>
                <h4> Mostly gray. Chill.</h4>
              </span>
            </div>
          </article>
        </Carousel>
      </section>
      <section className="projects-third-container">
        <article>
          <h1>Why Choose Nature?</h1>
          <h3>
            We’re in constant cooperation with planet earth to have just what
            you need to make your possesing experience easier
          </h3>
        </article>
        <div>
          <span>
            <h2>Gravity</h2>
            <h4>
              A the force by which a planet or other body draws objects toward
              its center. The force of gravity keeps all of the planets in orbit
              around the sun. And your new host on earth for easier grabbing and
              transportation
            </h4>
          </span>
          <img src={ImagenEjemplo} alt="gravity-image" style={{opacity: 0}} />
          <div style={{height: 60, width: 20, position: 'absolute', backgroundColor: '#F3E622', top: '2220px', opacity: 0.6, left: '380px'}}></div>
        </div>
        <div>
          <img src={ImagenEjemplo} alt="ozone-image" style={{opacity: 0}} />
          <span>
            <h2>Ozone layer</h2>
            <div style={{height: 30, width: 110, position: 'absolute', backgroundColor: '#72EADE', top: '2500px', opacity: 0.6, left: '760px'}}></div>
            <h4>
              The ozone layer is a thin part of the Earth's atmosphere that
              absorbs almost all of the sun's harmful ultraviolet light, keeping
              your host’s corporeal form intact
            </h4>
          </span>
        </div>
        <div>
          <span>
            <h2>Volcanous</h2>
            <div style={{height: 30, width: 100, position: 'absolute', backgroundColor: 'red', top: '2720px', opacity: 0.6, left: '380px'}}></div>
            <h4>
              A volcano is a rupture in the crust of a planetary-mass object,
              such as Earth, that allows hot lava, volcanic ash, and gases to
              escape from a magma chamber below the surface. Perfect for
              freaking humans out for an easier possession
            </h4>
          </span>
          <img src={ImagenEjemplo} alt="volcanous-image" style={{opacity: 0}} />
        </div>
        <button>Let's get in touch</button>
      </section>

      <Footer />
    </>
  );
};

export default Projects;
