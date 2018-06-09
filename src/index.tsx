import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from "react-router";
import { createStore } from 'redux';

import Create from "./components/CreateComponent";

import Login from './containers/LoginContainer';
import PrivateRoute from './containers/PrivateRouteContainer';
import Templates from "./containers/TemplatesContainer";

import { Actions } from "./actions";
import rootReducer from "./reducers";
import { IStoreState } from './types';

import './index.css';
import { initialState } from './reducers/TemplatesReducer';

// TODO: Set the initial state correctly from the reducer, or get the information from the API.
// TODO: Check the initial state for the Auth. If the user has already been logged we want to set isAuthorized = true.
const preloadedState: IStoreState = {
    loginState: {},
    templatesState: initialState
};

const store = createStore<IStoreState, Actions, any, any>(rootReducer, preloadedState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
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