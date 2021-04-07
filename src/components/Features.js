import React from 'react';
import {Container, Image} from "react-bootstrap";
import Feature1 from "../img/feature-1-window.png";
import Feature2 from "../img/feature-2-window.png";

const Features = () => {
    return (
        <div id="features-page">
            <div class="feature-1-wrap">
                <Container>
                    <div class="feature-1">
                        <img src={Feature1} class="feature-1-img"></img>
                        <h3 class="feature-1-caption caption">НАША ОСОБЕННОСТЬ №1</h3>
                        <p class="feature-1-text text">Текст Текст Текст Текст Текст Текст Текст Текст Текст ТекстТекст Текст Текст Текст  Текст ТекстТекст ТекстТекст ТекстТекст ТекстТекст ТекстТекст Текст</p>
                    </div>
                </Container>
            </div>

            <div class="feature-2-wrap">
                <Container>
                    <div class="feature-2">
                        <img src={Feature2} class="feature-2-img"></img>
                        <h3 class="feature-2-caption caption">НАША ОСОБЕННОСТЬ №2</h3>
                        <p class="feature-2-text text">Текст Текст Текст Текст Текст Текст Текст Текст Текст ТекстТекст Текст Текст Текст  Текст ТекстТекст ТекстТекст ТекстТекст ТекстТекст ТекстТекст Текст</p>
                    </div>
                </Container>
            </div>
        </div>
);
};

export default Features;