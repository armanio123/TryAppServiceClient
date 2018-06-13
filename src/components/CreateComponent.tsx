import * as React from 'react';
import "../styles/spinner.css";
import { ITemplate } from '../types';

export interface ICreateStateProps {
    authorizationToken: string;
    selectedTemplate: ITemplate;
}

export interface ICreateActionProps {
    createTemplate: (authorizationToken: string, selectedTemplate: ITemplate) => void;
}

export type CreateProps = ICreateStateProps & ICreateActionProps;

export default function Create(props: CreateProps) {
    props.createTemplate(props.authorizationToken, props.selectedTemplate);

    return (
        <div>
            <h2>Your service is being provisioned</h2>
            <div className="spinner">
                <img className="circle" src={require("../assets/spinner.svg")} />
                <p className="label">Spinning up your web app, please stand by...</p>
            </div>
        </div>);
}