import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Articles from './containers/Articles';
import Article from './components/Article';
import Search from './components/Search';
import Error from './components/Error';
import Form2 from './components/Form2';
import Admin from './components/Admin';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/article/:id" component={Article} />
            <Route exact path="/articles/search/:search" component={Search} />
            {/*           <Route path="/redirect/:search" render={
                (props) => {
                    var search = props.params.search;
                    <Redirect to={'/articles/search/' + search} />  
                }
            } /> */}
            <Route exact path="/create" component={Form2} />
            <Route exact path="/admin" componet={Admin} />
            <Route component={Error} />
        </Switch>
    )
}
export default Router;