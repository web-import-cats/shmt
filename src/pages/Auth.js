import React from 'react';
import {Container} from "react-bootstrap";
import {REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    return (
        <div id = "login-page">
            <Container>
                <div class = "h-100 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="auth-caption">Вход в аккаунт</h2>
                    <form className="auth-form-wrap">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <input type="email" placeholder = "Email" className="auth-form-input"></input>
                            <input type="password" placeholder = "Пароль" minlength="8" className="auth-form-input"></input>
                            <a href={REGISTRATION_ROUTE} class = "auth-form-register-link">Регистрация</a>
                            <button className="auth-form-button">Продолжить</button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Auth;