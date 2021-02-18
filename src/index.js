import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import ShmotkiStore from "./store/ShmotkiStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        shmotki: new ShmotkiStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
