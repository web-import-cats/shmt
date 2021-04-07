import React from "react";
import {Container} from "react-bootstrap";
import Image from "../img/Image-main-page.png";
import Window from "../img/Windows-main-page.png";
import {SHOP_ROUTE} from "../utils/consts";

function Main() {
    return (
        <div id="main-page">
            <Container>
                <div className="h-100 d-flex align-items-md-center align-items-start">
                    <div className="main-page-wrap">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
                            <img src={Image} className="main-page-Image"></img>
                            <div className="main-page-right">
                                <div className="d-flex flex-column justify-content-center align-items-end">
                                    <img src={Window} className="main-page-window"></img>
                                    <a className="main-page-button" href={SHOP_ROUTE}>Просмотр шмоток</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
);
}

export default Main;
