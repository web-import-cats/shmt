import React from "react";
import NavBar from "./NavBar";
import {Col, Container, Navbar, NavLink, Row, Image} from "react-bootstrap";
import {HOME_ROUTE} from "../utils/consts";
import logo from "../img/logo.jpg";

function Header() {
    return (
        <Navbar bg="white" className="header-nav-inner" fixed="top">
            <Container>
                <Row className="w-100 justify-content-between align-items-center">
                    <Col>
                        <NavLink href={HOME_ROUTE}>
                            <Image src={logo}></Image>
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
