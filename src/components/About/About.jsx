import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Navbar />

      <div className="about__section">
        <div>
          <img
            src={require("../img/card.jpg")}
            alt="akira"
            className="img__about"
          />
          <div className="gender__section">
            <div className="gender">animation</div>
            <div className="gender">action</div>
            <div className="gender">drama</div>
          </div>
        </div>

        <div>
          <h1 className="synopsis__name">synopsis</h1>
          <p className="synopsis">
            A huge explosion caused Tokyo to be destroyed in 1988. Neo Tokyo was <br />
            built in its place, which, in 2019, suffers from terrorist attacks<br />
            throughout the city. Friends Kaneda and Tetsuo are part of a biker<br />
            gang. They fight violent fights with a rival gang, the Clowns, until<br />
            one day Tetsuo meets Takashi, a strange child with powers who escaped<br />
            from the hospital where he was kept as a guinea pig.
          </p>


          <div className="authors">
            <h3>
              direction:
              <a
                href="https://www.imdb.com/name/nm0960028/?ref_=tt_ov_dr"
                target={"_blank"}
                rel="noreferrer"
              >
                katsuhiro otomo
              </a>
            </h3>
            <h3>
              screenwriters:
              <a
                href="https://www.imdb.com/name/nm0960028/?ref_=tt_ov_wr"
                target={"_blank"}
                rel="noreferrer"
              >
                katsuhiro otomo
              </a>
              <a
                href="https://www.imdb.com/name/nm0368051/?ref_=tt_ov_wr"
                target={"_blank"}
                rel="noreferrer"
              >
                izo hashimoto
              </a>
            </h3>
            <h3>
              artists:
              <a
                href="https://www.imdb.com/name/nm0412628/?ref_=tt_ov_st"
                target={"_blank"}
                rel="noreferrer"
              >
                mitsuo iwata
              </a>
              <a
                href="https://www.imdb.com/name/nm0765815/?ref_=tt_ov_st"
                target={"_blank"}
                rel="noreferrer"
              >
                nezomu sasaki
              </a>
              <a
                href="https://www.imdb.com/name/nm0468708/?ref_=tt_ov_st"
                target={"_blank"}
                rel="noreferrer"
              >
                mami kayama
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
