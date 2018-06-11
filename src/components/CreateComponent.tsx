import * as React from 'react';
import { ITemplate } from '../types';

export interface ICreateStateProps {
    authorizationToken: string;
    selectedTemplate: ITemplate;
}

export interface ICreateActionProps {
    createTemplate: (authorizationToken: string, selectedTemplate: ITemplate) => void;
}

export type CreateProps = ICreateStateProps & ICreateActionProps;

// TODO: Show some kind of loading, Creating the template takes a couple of seconds.
export default function Create(props: CreateProps) {
    props.createTemplate(props.authorizationToken, props.selectedTemplate);

    return (<div> Creating stuff </div>);
}