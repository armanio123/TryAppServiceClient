import * as React from 'react';
import { match } from 'react-router';
import './CreateComponent.css';

export interface ICreateProps {
    match?: match<{ selectedTemplateName: string }>;
}

export default function Create(props: ICreateProps) {
    return (
        <div className="create">
            <h2>Sign in to create your web app</h2>
            <ul>
                <li><button className="microsoft"><img className="logo" src={require("../assets/microsoftLogo.svg")} />Sign in with Microsoft</button></li>
                <li><button className="gitHub"><img className="logo" src={require("../assets/gitHubLogo.svg")} />Sign in with GitHub</button></li>
                <li><button className="google"><img className="logo" src={require("../assets/googlePlusLogo.svg")} />Sign in with Google</button></li>
                <li><button className="facebook"><img className="logo" src={require("../assets/facebookLogo.svg")} />Sign in with Facebook</button></li>
            </ul>
        </div>
    );
}