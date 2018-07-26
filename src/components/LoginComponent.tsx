import * as React from 'react';
import { Redirect } from 'react-router';
import '../styles/LoginComponent.css';

export interface ILoginStateProps {
    isAuthenticated: boolean;
    selectedTemplateName: string;
}

export interface ILoginActionProps {
    onLoginClick: (provider: string) => void;
}

export type LoginProps = ILoginStateProps & ILoginActionProps;

export default class Login extends React.Component<LoginProps> {
    public render() {
        return (
            this.props.isAuthenticated
                ? <Redirect to={`/create/${this.props.selectedTemplateName}`} />
                : <div className="login">
                    <h2>Sign in to create your web app</h2>
                    <ul>
                        <li><button className="microsoft" onClick={() => this.props.onLoginClick("microsoft")}><img className="logo" src={require("../assets/microsoftLogo.svg")} />Sign in with Microsoft</button></li>
                        <li><button className="gitHub" onClick={() => this.props.onLoginClick("github")}><img className="logo" src={require("../assets/gitHubLogo.svg")} />Sign in with GitHub</button></li>
                        <li><button className="google" onClick={() => this.props.onLoginClick("google")}><img className="logo" src={require("../assets/googlePlusLogo.svg")} />Sign in with Google</button></li>
                        <li><button className="facebook" onClick={() => this.props.onLoginClick("facebook")}><img className="logo" src={require("../assets/facebookLogo.svg")} />Sign in with Facebook</button></li>
                    </ul>
                </div>
        );
    }
}