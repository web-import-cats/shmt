import React from 'react';
import AboutImg from "../img/AboutImg.png";

const About = () => {
    return (
        <div id="about">
            <div className="about-info">
                    <h2 class="about-info-caption caption">О нас</h2>
                    <p class="about-info-text text">For text</p>
                    <img class="about-info-img" src={AboutImg}></img>
            </div>
        </div>
);
};

export default About;