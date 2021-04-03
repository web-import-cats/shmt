import React from "react";
import NavBar from "./NavBar";
import {Col, Container, Nav, Navbar, NavLink, Row} from "react-bootstrap";
import {HOME_ROUTE} from "../utils/consts";
import logo from "../img/logo.jpg";

function Header() {
    return (
        <Navbar bg="white" className="header-nav-inner" fixed="top">
            <Container>
                <Row className="w-100 justify-content-between align-items-center">
                    <Col>
                        <NavLink href={HOME_ROUTE}>
                            <img src={logo}></img>
                         </NavLink>
                    </Col>
                     <Col lg={8}>
                        <NavBar />
                    </Col>
                </Row>
            </Container>
        </Navbar>

);
}

export default Header;
