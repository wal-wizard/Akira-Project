import React from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <img src={require("../img/background.gif")} alt="home" className="gif__background"/> */}

      <div className="home-itens">
        <div className="btns">
          <a
            href="https://www.bilibili.tv/en/video/2006921545"
            rel="noreferrer"
            target="_blank"
            className="movie"
          >
            <i class="bi bi-play-fill"></i> watch movie
          </a>
          <a
            href="https://www.imdb.com/title/tt0094625/"
            className="imdb"
            rel="noreferrer"
            target="_blank"
          >
            imdb
          </a>
        </div>

        <div>
          <h1 className="year">1998</h1>
          <img
            src={require("../img/1280px-Akira_logo.svg.png")}
            alt="logo"
            className="logo-img"
          />
        </div>


      </div>

      <br />
      <div className="botton__section">
            <div className="we">WeSantos - 2023</div>
            <div className="icons">
            <i class="bi bi-github"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            </div>
        </div>
    </div>
  );
};

export default Home;
