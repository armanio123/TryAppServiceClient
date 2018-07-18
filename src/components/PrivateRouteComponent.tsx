// import { Location } from 'history';
import * as React from 'react';
import { Redirect, Route } from 'react-router';
import * as constants from '../constants';

export interface IPrivateRouteProps {
    isAuthenticated: boolean;
    component: any;
    selectedTemplateName: string;
}

export default function PrivateRouteComponent({ component: Component, ...rest }: IPrivateRouteProps) {
    return (
        <Route
            {...rest}
            render={props => rest.isAuthenticated
                ? <Component {...props} />
                : <Redirect to={`${constants.BASE_URL}/login/${rest.selectedTemplateName}`} />
            }
        />
    )
}

