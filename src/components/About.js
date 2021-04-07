import React from 'react';
import AboutImg from "../img/AboutImg.png";

const About = () => {
    return (
        <div id="about">
            <div className="about-info">
                <div className="about-info-caption">
                    <h2>О нас</h2>
                </div>
                <div className="about-info-text">
                    <p>For text</p>
                </div>
                <div className="about-info-img">
                    <img src={AboutImg}></img>
                </div>
            </div>
        </div>
);
};

export default About;