import React, {Component} from 'react';
import {Switch, BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import {authRoutes} from "../routes";
import {publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {map} from "react-bootstrap/ElementChildren";

const AppRouter = () => {
    const isAuth = false;

    return (
        <BrowserRouter>
            <Switch>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                <Redirect to={SHOP_ROUTE} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;