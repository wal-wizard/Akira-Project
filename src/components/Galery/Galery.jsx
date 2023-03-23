import React from "react";
import "./Galery.css";



import Navbar from "../Navbar/Navbar";
import GaleryImages from "./GaleryImages";

const Galery = () => {
    return (
        <div className="galery">
            < Navbar />

            <div className="itens">
                <GaleryImages
                   galleryID="My-Gallery"
                   images={[
                    {
                        largeURL: require('../img/galery-1.jpg'),
                        thumbnailURL: require('../img/galery-1.jpg'),
                        width: 1280,
                        height: 720,
                    },
                    {
                        largeURL: require('../img/galery-2.jpg'),
                        thumbnailURL: require('../img/galery-2.jpg'),
                        width: 1280,
                        height: 720,
                    },
                    {
                        largeURL: require('../img/galery-3.jpg'),
                        thumbnailURL: require('../img/galery-3.jpg'),
                        width: 1280,
                        height: 720,
                    },
                    {
                        largeURL: require('../img/galery-4.jpg'),
                        thumbnailURL: require('../img/galery-4.jpg'),
                        width: 1280,
                        height: 720,
                    },
                    {
                        largeURL: require('../img/galery-5.jpg'),
                        thumbnailURL: require('../img/galery-5.jpg'),
                        width: 1280,
                        height: 720,
                    },
                    {
                        largeURL: require('../img/galery-6.jpg'),
                        thumbnailURL: require('../img/galery-6.jpg'),
                        width: 1280,
                        height: 720,
                    },
                    {
                        largeURL: require('../img/galery-7.jpg'),
                        thumbnailURL: require('../img/galery-7.jpg'),
                        width: 1280,
                        height: 720,
                    },
                    {
                        largeURL: require('../img/galery-8.jpg'),
                        thumbnailURL: require('../img/galery-8.jpg'),
                        width: 1280,
                        height: 720,
                    },
                    {
                        largeURL: require('../img/galery-9.png'),
                        thumbnailURL: require('../img/galery-9.png'),
                        width: 1280,
                        height: 720,
                    },
                    {
                        largeURL: require('../img/galery-10.png'),
                        thumbnailURL: require('../img/galery-10.png'),
                        width: 1280,
                        height: 720,
                    },

                   ]}
                />

            </div>
        </div>
    )
}

export default Galery;