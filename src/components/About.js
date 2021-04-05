import React from 'react';
import {Container, Image, Col} from "react-bootstrap";
import AboutImg from "../img/AboutImg.png";

const About = () => {
    return (
        <div id="about">
            <Container fluid>
                <div className="d-flex flex-lg-row flex-column justify-content-around align-items-center">
                    <Col lg={6}>
                        <div className="about-info">
                            <div className="d-flex flex-column justify-content-center align-items-start">
                                <h2 className="about-info-caption">О нас</h2>
                                <p className="about-info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper, nibh accumsan lobortis pellentesque, risus magna sagittis diam, nec bibendum tortor quam ut nunc. Aliquam dictum malesuada tortor ac aliquet. Praesent sed euismod nulla..</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                            <Image src={AboutImg}></Image>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
);
};

export default About;