import React from 'react';
import {Container} from "react-bootstrap";

const Register = () => {
    return (
        <div id = "register-page">
            <Container>
                <div class = "h-100 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="auth-caption">Регистрация</h2>
                    <form className="auth-form-wrap">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <input type="text" placeholder = "Имя" minlength="2" className="auth-form-input"></input>
                            <input type="email" placeholder = "Email" className="auth-form-input"></input>
                            <input type="password" placeholder = "Пароль" minlength="8" className="auth-form-input"></input>
                            <button className="auth-form-button">Продолжить</button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Register;