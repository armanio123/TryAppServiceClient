import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from "react-router";
import { createStore } from 'redux';

import Create from "./components/CreateComponent";
import PrivateRoute from './components/PrivateRouteComponent';

import Login from './containers/LoginContainer';
import Templates from "./containers/TemplatesContainer";

import { Actions } from "./actions";
import rootReducer from "./reducers";
import { IStoreState } from './types';

import './index.css';

const preloadedState = {
    // loginState: {
    //     isAuthenticated: false,
    // },
    templatesState: {
        history: createBrowserHistory(),
        templates: [{
            iconUrl: require("./assets/jsLogo.svg"),
            isSelected: false,
            name: "Express"
        }, {
            iconUrl: require("./assets/vueLogo.svg"),
            isSelected: false,
            name: "Vue"
        }, {
            iconUrl: require("./assets/reactLogo.svg"),
            isSelected: false,
            name: "React"
        }, {
            iconUrl: require("./assets/angularLogo.svg"),
            isSelected: false,
            name: "Angular"
        }]
    },
};

const store = createStore<IStoreState, Actions, any, any>(rootReducer, preloadedState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={preloadedState.templatesState.history}>
            <Switch>
                <Route path="/" component={Templates} exact={true} />
                <Route path="/login" component={Login} />
                <Route path="/templates" component={Templates} />
                <PrivateRoute path="/create/:selectedTemplateName" component={Create} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);