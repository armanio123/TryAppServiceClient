import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from "react-router";
import { createStore } from 'redux';
import { TemplateAction } from "./actions";
import Create from "./components/CreateComponent";
import Templates from "./containers/TemplatesContainer";
import './index.css';
import { templateReducer } from "./reducers/TemplatesReducer";
import { IStoreState } from './types';

const preloadedState = {
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
};

const store = createStore<IStoreState, TemplateAction, any, any>(templateReducer, preloadedState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={preloadedState.history}>
            <Switch>
                <Route path="/" component={Templates} exact={true}  />
                <Route path="/templates" component={Templates} />
                <Route path="/create/:selectedTemplateName" component={Create} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);