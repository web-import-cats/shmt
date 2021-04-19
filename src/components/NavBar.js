import React, {useContext} from 'react';
import { createBrowserHistory } from 'history';
import {Context} from "../index";
import {Nav} from "react-bootstrap";

let history = createBrowserHistory();

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <div class="nav-bar-wrap">
        <div className="nav-bar">
            <Nav className="justify-content-around align-items-center">
                <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link" href="shmot">Шмотки</Nav.Link></Nav.Item>
                <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link" href="free">Благотворительность</Nav.Link></Nav.Item>
                <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link" href="about">Про нас</Nav.Link></Nav.Item>
                <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link login-link" href="login">Войти</Nav.Link></Nav.Item>
            </Nav>
        </div>

    <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle"><span></span></label>

        <Nav as="ul" class="menu__box">
            <Nav.Item as="li" className="menu__li"><Nav.Link className="menu__item" href="#">Шмотки</Nav.Link></Nav.Item>
            <Nav.Item as="li" className="menu__li"><Nav.Link className="menu__item" href="#">Благотворительность</Nav.Link></Nav.Item>
            <Nav.Item as="li" className="menu__li"><Nav.Link className="menu__item" href="#">Про нас</Nav.Link></Nav.Item>
            <Nav.Item as="li" className="menu__li"><Nav.Link className="menu__item" href="#">Войти</Nav.Link></Nav.Item>
        </Nav>
    </div>
    </div>
);
};

export default NavBar;