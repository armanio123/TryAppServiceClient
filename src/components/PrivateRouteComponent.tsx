// import { Location } from 'history';
import * as React from 'react';
import { Redirect, Route } from 'react-router';

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
                : <Redirect to={`/login/${rest.selectedTemplateName}`} />
            }
        />
    )
}

