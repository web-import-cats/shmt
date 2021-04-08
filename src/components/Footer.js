import React from "react";
import {Container} from "react-bootstrap";
import Facebook from "../img/facebook.png";
import Telegram from "../img/telegram.png";
import Instagram from "../img/instagram.png";


function Footer() {
    return (
        <footer id ="footer-wrap">
            <Container>
                <div class="h-100 d-flex flex-lg-column flex-column-reverse justify-content-center align-items-center">
                    <div className = "footer-text">
                        <div class = "d-flex flex-column justify-content-center align-items-center">
                            <span>2020 SHMT</span>
                            <span>ALL RIGHTS RESERVED ©</span>
                        </div>
                    </div>
                    <div className = "footer-social-network">
                        <div class = "d-flex justify-content-center align-items-center">
                            <a href="#"><img src={Facebook}></img></a>
                            <a href="#"><img src={Telegram}></img></a>
                            <a href="#"><img src={Instagram}></img></a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
