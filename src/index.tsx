import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from "react-router";
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'

import Create from "./containers/CreateContainer";
import Login from './containers/LoginContainer';
import PrivateRoute from './containers/PrivateRouteContainer';
import Templates from "./containers/TemplatesContainer";

import { Actions } from "./actions";
import rootReducer from "./reducers";
import { IStoreState } from './types';

import './index.css';
import { initialState as initialLoginState } from './reducers/LoginReducer';
import { initialState as initialTemplateState, initialTrialState } from './reducers/TemplatesReducer';

// TODO: Pass accessibility. Keyboard dont work. No screen reader tests.
// TODO: We might want to have a error page for scenarios where the template/page doesn't exists.

const preloadedState: IStoreState = {
    loginState: initialLoginState,
    templatesState: initialTemplateState,
    trialState: initialTrialState
};

const store = createStore<IStoreState, Actions, any, any>(rootReducer, preloadedState, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path="/" component={Templates} exact={true} />
                <Route path="/login" component={Login} exact={true} />
                <Route path="/login/:selectedTemplateName" component={Login} exact={true} />
                <PrivateRoute path="/create/:selectedTemplateName" component={Create} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);