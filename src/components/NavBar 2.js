import React, {useContext} from 'react';
import { createBrowserHistory } from 'history';
import {Context} from "../index";
import {Col, Row, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import logo from '../img/logo.jpg'
let history = createBrowserHistory();

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="white" className="header-nav-inner" fixed="top">
            <Container>
                <Row className="w-100 justify-content-between align-items-center">
                    <Col lg={3}>
                        <NavLink to={SHOP_ROUTE}>
                            <img src={logo}></img>
                        </NavLink>
                    </Col>
                    <Col lg={7}>
                        <Nav className="justify-content-around align-items-center">
                            <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link" href="#">Шмотки</Nav.Link></Nav.Item>
                            <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link" href="#">Благотворительность</Nav.Link></Nav.Item>
                            <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link" href="#">Про нас</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>

            <Nav className="hamburger-menu">
                <input id="menu-toggle" type="checkbox"/>
                <label className="menu-btn" htmlFor="menu-toggle">
                    <span></span>
                </label>
                <Nav as="ul" className="menu-box">
                    <div className="d-flex flex-column justify-content-around align-items-center">
                        <Nav.Item as="li" className="menu-item"><Nav.Link className="menu-item-1" href="#">Шмотки</Nav.Link></Nav.Item>
                        <Nav.Item as="li" className="menu-item"><Nav.Link className="menu-item-2" href="#">Благотворительность</Nav.Link></Nav.Item>
                        <Nav.Item as="li" className="menu-item"><Nav.Link className="menu-item-3" href="#">Про нас</Nav.Link></Nav.Item>
                    </div>
                </Nav>
            </Nav>
        </Navbar>

    );
};

export default NavBar;