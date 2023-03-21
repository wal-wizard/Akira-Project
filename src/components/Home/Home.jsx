import React from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            {/* <img src={require("../img/background.gif")} alt="home" className="gif__background"/> */}
        </div>
    )
}

export default Home;