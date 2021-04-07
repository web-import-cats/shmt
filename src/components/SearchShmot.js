import React from 'react';
import { Container} from "react-bootstrap";
import Watch from "../img/watch-img.png";
import Register from "../img/reg-img.png";
import {SHOP_ROUTE} from "../utils/consts";
import {REGISTRATION_ROUTE} from "../utils/consts";

const SearchShmot = () => {
    return (
        <div id="search-shmot">
            <Container>
                <div class="h-100 d-flex flex-column align-items-center">
                    <h2 class="search-shmot-caption">НАЧНЁМ ИСКАТЬ ШМОТ?</h2>
                    <div class="search-shmot-bottom">
                        <div class="h-100 d-flex flex-lg-row flex-column justify-content-lg-around justify-content-start align-items-lg-start align-items-center">
                                <div class="search-shmot-watch">
                                    <img src={Watch}></img>
                                    <div class="search-shmot-watch-button">
                                        <a href={SHOP_ROUTE}>Поглазеть</a>
                                    </div>
                                </div>
                                <div class="search-shmot-regist">
                                    <img src={Register}></img>
                                    <div class="search-shmot-regist-button">
                                        <a href={REGISTRATION_ROUTE}>Регистрация</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
);
};

export default SearchShmot;