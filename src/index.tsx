import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from "react-router";
import { createStore } from 'redux';

import Create from "./containers/CreateContainer";
import Login from './containers/LoginContainer';
import PrivateRoute from './containers/PrivateRouteContainer';
import Templates from "./containers/TemplatesContainer";

import { Actions } from "./actions";
import rootReducer from "./reducers";
import { IStoreState } from './types';

import './index.css';
import { initialState } from './reducers/TemplatesReducer';

// TODO: Pass accessibility. Keyboard dont work. No screen reader tests.
// TODO: Fix issue when creating a template. If press back, it forwards to login with the default template selected (Express)

// TODO: Check the initial state for the Auth. If the user has already been logged we want to set isAuthorized = true.
// I'm not sure we want that, better check.
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
                <Route path="/login/:selectedTemplateName" component={Login} />
                <Route path="/templates" component={Templates} />
                <PrivateRoute path="/create/:selectedTemplateName" component={Create} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);