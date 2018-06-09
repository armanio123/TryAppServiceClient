import { History } from 'history';
import * as React from 'react';
import { SelectableBoxComponent } from './SelectableBoxComponent';
import './TemplatesComponent.css';
import { ITemplate } from '../types';

export interface ITemplatesProps {
    history?: History;
    templates?: ITemplate[];
    selectedTemplate?: ITemplate;
    onTemplateClick?: (selectedTemplate: ITemplate) => void;
}

export default function TemplatesComponent(props: ITemplatesProps) {

    const continueIsDisabled = props.selectedTemplate === undefined;

    return (
        <div className="templates">
            <h2>Select a template and create your Web App</h2>
            <ul>
                {props.templates!.map((v) =>
                    <li key={v.name}>
                        <SelectableBoxComponent
                            name={v.name}
                            isSelected={props.selectedTemplate!.name === v.name}
                            iconUrl={require(`/assets/${v.sprite}`)}
                            onClick={() => { props.onTemplateClick!(v) }} />
                    </li>
                )}
            </ul>
            <div className="actions">
                <button type="button"
                    disabled={continueIsDisabled}
                    onClick={() => props.history!.push(`/create/${props.selectedTemplate!.name}`)}>CONTINUE</button>
            </div>
        </div>
    )
}