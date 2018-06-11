import * as React from 'react';
import '../styles/TemplatesComponent.css';
import { ITemplate } from '../types';
import { SelectableBoxComponent } from './SelectableBoxComponent';

export interface ITemplatesStateProps {
    templates: ITemplate[];
    selectedTemplateName: string;
}

export interface ITemplatesActionProps {
    onNextClick: (selectedTemplateName: string) => void;
    onTemplateClick: (selectedTemplateName: string) => void;
}

export type TemplatesProps = ITemplatesStateProps & ITemplatesActionProps;

export default function TemplatesComponent(props: TemplatesProps) {
    return (
        <div className="templates">
            <h2>Select a template and create your Web App</h2>
            <ul>
                {props.templates.map((v) =>
                    <li key={v.name}>
                        <SelectableBoxComponent
                            name={v.name}
                            isSelected={props.selectedTemplateName === v.name}
                            iconUrl={require(`../assets/${v.sprite}`)}
                            onClick={() => { props.onTemplateClick(v.name) }} />
                    </li>
                )}
            </ul>
            <div className="actions">
                <button type="button" onClick={() => props.onNextClick(props.selectedTemplateName!)}>CONTINUE</button>
            </div>
        </div>
    )
}