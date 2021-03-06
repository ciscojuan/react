import { React } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home  from '../containers/Home';
import Login from '../containers/Login';
import Layout from '../components/Layout';
import Register from '../containers/Registro';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>    
                <Route exact path="/" component={ Home } />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;