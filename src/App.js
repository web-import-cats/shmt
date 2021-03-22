import React, {createContext} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from './components/Footer';
import './style/main.scss';

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
