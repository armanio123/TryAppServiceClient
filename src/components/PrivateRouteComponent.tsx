import { Location } from 'history';
import * as React from 'react';
import { Redirect, Route } from 'react-router';

export interface IPrivateRouteProps {
    isAuthenticated?: boolean;
    component?: any;
    location?: Location;
    path?: string;
}

export default function PrivateRoute(props: IPrivateRouteProps) {
    return (
        <Route
            // {...props}
            render={p => props.isAuthenticated
                ? <props.component {...p} />
                : <Redirect
                    to={{ pathname: "/login", state: { from: props.location, isAuthenticated: false } }} />
            }
        />
    )
}