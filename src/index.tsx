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
import { initialState as initialLoginState } from './reducers/LoginReducer';
import { initialState as initialTemplateState } from './reducers/TemplatesReducer';

import * as constants from './constants';

// TODO: Pass accessibility. Keyboard dont work. No screen reader tests.
// TODO: We might want to have a error page for scenarios where the template/page doesn't exists.

const preloadedState: IStoreState = {
    loginState: initialLoginState,
    templatesState: initialTemplateState
};

const store = createStore<IStoreState, Actions, any, any>(rootReducer, preloadedState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path={constants.BASE_URL + "/"} component={Templates} exact={true} />
                <Route path={constants.BASE_URL + "/login"} component={Login} exact={true} />
                <Route path={constants.BASE_URL + "/login/:selectedTemplateName"} component={Login} exact={true} />
                <PrivateRoute path={constants.BASE_URL + "/create/:selectedTemplateName"} component={Create} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);