import { History } from 'history';
import * as React from 'react';
import { ISelectableBoxProps, SelectableBoxComponent } from './SelectableBoxComponent';
import './TemplatesComponent.css';

export interface ITemplatesProps {
    history?: History;
    templates?: ISelectableBoxProps[];
    selectedTemplate?: ISelectableBoxProps;
    onTemplateClick?: (selectedName?: ISelectableBoxProps) => void;
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
                            isSelected={v.isSelected}
                            iconUrl={v.iconUrl}
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