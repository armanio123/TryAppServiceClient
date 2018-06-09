import { Location } from 'history';
import * as React from 'react';
import { Redirect } from 'react-router';
import './LoginComponent.css';

export interface ILoginProps {
    isAuthenticated?: boolean;
    location?: Location,
    onLoginClick?: (provider: string) => void;
    setToken?: (parameters?: string) => void;
}

export default class Login extends React.Component<ILoginProps> {
    public componentDidMount() {
        // It has been redirected from auth. Grab the token.
        const tokenParameter = /\bcookie=([^$]*)/i.exec(this.props.location!.search);
        if (tokenParameter) {
            this.props.setToken!(tokenParameter[1]);
        }
    }

    public render() {
        if (this.props.isAuthenticated) {
            const { from } = this.props.location!.state || { from: { pathname: "/" } };

            return (<Redirect to={from} />);
        }

        return (
            <div className="login">
                <h2>Sign in to create your web app</h2>
                <ul>
                    <li><button className="microsoft" onClick={() => this.props.onLoginClick!("microsoft")}><img className="logo" src={require("../assets/microsoftLogo.svg")} />Sign in with Microsoft</button></li>
                    <li><button className="gitHub" onClick={() => this.props.onLoginClick!("github")}><img className="logo" src={require("../assets/gitHubLogo.svg")} />Sign in with GitHub</button></li>
                    <li><button className="google" onClick={() => this.props.onLoginClick!("google")}><img className="logo" src={require("../assets/googlePlusLogo.svg")} />Sign in with Google</button></li>
                    <li><button className="facebook" onClick={() => this.props.onLoginClick!("facebook")}><img className="logo" src={require("../assets/facebookLogo.svg")} />Sign in with Facebook</button></li>
                </ul>
            </div>
        )
    }
}