import React from 'react';
import {Route,BrowserRouter,Redirect,Switch} from 'react-router-dom';
//pages
import GamePage from './components/GamePage';
import MainPage from './components/MainPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/game" component={GamePage} />
                <Route path="/login" component={MainPage} />
                <Route render={() => (<Redirect to="/login" />)} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;