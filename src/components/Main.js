import React from "react";
import {Col, Container, Nav, Navbar, NavLink, Row} from "react-bootstrap";
import logo from "../img/logo.jpg";

function Main() {
    return (
        <div id="main-page">
            <Container>
                <div className="w-100 h-100 d-flex flex-wrap justify-content-around align-items-center">
                    <img src={logo}></img>
                    <div className="d-flex flex-column justify-content-center align-items-end">
                        <img className="main-page-window" src={logo}></img>
                        <button className="main-page-button">Просмотр шмоток</button>
                    </div>
                </div>
            </Container>
        </div>
);
}

export default Main;
