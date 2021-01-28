import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import LandingPage from 'pages/LandingPage'
import ErrorPage from 'pages/error/404';

export default function Router() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="*" component={ErrorPage} />
            </Switch>
            <ToastContainer />
        </>
    )
}
