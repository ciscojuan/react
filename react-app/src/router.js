import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Articles from './containers/Articles';
import Characters from './containers/Characters';
import Error from './components/Error';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/films" component={Articles} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/characters/:id" component={Characters} />
            <Route component={Error} />
        </Switch>
    )
}
export default Router;