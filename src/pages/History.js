import React from "react";
import HistoryPlanet from "../assets/gifs/History-Planet.gif";
import HistorySemen from "../assets/gifs/History-Sperm.gif";
import HistoryAmeba from "../assets/gifs/History-Amoeba.gif";
import HistoryCloud from "../assets/gifs/History-Cloud.gif";
import HistoryDino from "../assets/gifs/History-Dino.gif";
import HistoryNatureEarth from "../assets/gifs/History-Nature_Earth.gif";

let History = () => {
  return (
    <>
      <section className="history-container-padre">
        <div className="history-first-section">
          <article className="box-gradient">
            <h1>
              4.600 - 4.400 MYA
              <br /> BIG BANG
            </h1>
            <h2>
              Creation of earth and its initial outer layer. First models of
              oceans, continents and our star products: volcanoes.
            </h2>
            <img src={HistoryNatureEarth} alt="gif-planet" className="nature-earth-history" />
          </article>
          <div></div>
          <article className="box-gradient">
            <h1>
              1.500 MYA
              <br /> OXYGEN
            </h1>
            <h2>
              Oxygen is released for the first time to critical acclaim and
              mostly positive reviews
            </h2>
            <img src={HistoryCloud} alt="gif-planet" className="history-cloud" />
          </article>
          <div></div>
          <article className="box-gradient">
            <h1>
              225 MYA
              <br /> DINOSAURS
            </h1>
            <h2>
              Evolution plugin is tried on lizards for first time resulting in
              our now retired beloved product: Dinosaurs
            </h2>
            <img src={HistoryDino} alt="gif-planet" className="history-dino" />
          </article>
          <div></div>
          <article className="box-gradient">
            <h1>
              0.13 MYA
              <br /> HUMAN RELEASE
            </h1>
            <h2>Homo sapiens are deployed in Africa to worldwide acclaim</h2>
            <img src={HistorySemen} alt="gif-planet" className="history-semen" />
          </article>
          <div></div>
        </div>
        <div className="history-second-section">
          <article className="box-gradient">
            <h1>
              3.850 MYA
              <br /> CREATION OF LIFE
            </h1>
            <h2>
              First successful delivery of life through single cell organisms.
              Full-cycle release
            </h2>
            <img src={HistoryAmeba} alt="gif-planet" className="history-ameba" />
          </article>
          <div></div>
          <article className="box-gradient">
            <h1>
              750 - 350 MYA
              <br /> EVOLUTION PLUGIN
            </h1>
            <h2>
              Release of first evolution plugin affecting: Plants, fish, single
              celled animals, and land vertebrates
            </h2>
          </article>
          <div></div>
          <article className="box-gradient">
            <h1>
              65 MYA
              <br /> MAJOR RECALL
            </h1>
            <h2>
              Dinosaur product is recalled due to lack of hability to survivie
              meteors
            </h2>
          </article>
          <div></div>
          <aside>
            <article className="box-gradient">
              <h1>2020 CURRENT SHITDOWN</h1>
              <h2>
                Totally preventable environmental catastrophe. Impending human
                recall.
              </h2>
            </article>
            <img src={HistoryPlanet} alt="gif-planet" className="history-planet" />
          </aside>
        </div>
      </section>
    </>
  );
};

export default History;
