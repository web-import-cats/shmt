import React, {useContext} from 'react';
import { createBrowserHistory } from 'history';
import {Context} from "../index";
import {Nav} from "react-bootstrap";

let history = createBrowserHistory();

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <div className="nav-bar">
            <Nav className="justify-content-around align-items-center">
                <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link" href="shmot">Шмотки</Nav.Link></Nav.Item>
                <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link" href="free">Благотворительность</Nav.Link></Nav.Item>
                <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link" href="about">Про нас</Nav.Link></Nav.Item>
                <Nav.Item as="li" className="header-nav-item"><Nav.Link className="header-nav-link login-link" href="login">Войти</Nav.Link></Nav.Item>
            </Nav>
        </div>
);
};

export default NavBar;