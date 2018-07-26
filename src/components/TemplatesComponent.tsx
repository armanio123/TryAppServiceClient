import * as React from 'react';
import '../styles/TemplatesComponent.css';
import { ITemplate } from '../types';
import { LinkComponent } from './LinkComponent';
import { SelectableBoxComponent } from './SelectableBoxComponent';

export interface ITemplatesStateProps {
    authToken: string;
    isAuthenticated: boolean;
    templates: ITemplate[];
    selectedTemplateName: string;
    url: string;
    timeLeft: number;
    created: boolean;
}

export interface ITemplatesActionProps {
    getTrialInfo: (authToken: string) => void;
    onNextClick: (selectedTemplateName: string) => void;
    onTemplateClick: (selectedTemplateName: string) => void;

}

export type TemplatesProps = ITemplatesStateProps & ITemplatesActionProps;

export default class TemplatesComponent extends React.Component<TemplatesProps> {
    constructor(props: TemplatesProps) {
        super(props);
        if (this.props.isAuthenticated) {
            this.props.getTrialInfo(this.props.authToken);
        }
    }

    public render() {
        return (
            <div>
                {this.props.created ? <LinkComponent url={this.props.url} timeLeft={this.props.timeLeft}/> : null}
                
                <div className="templates">
                    <h2>Select a template and create your Web App</h2>
                    {this.props.created ?  <p className="warning-text">(Your existing trial service will be deleted)</p> : null}
                    <ul>
                        {this.props.templates.map((v) =>
                            <li key={v.name}>
                                <SelectableBoxComponent
                                    name={v.uiName}
                                    isSelected={this.props.selectedTemplateName === v.name}
                                    iconUrl={require(`../assets/${v.sprite}`)}
                                    onClick={() => { this.props.onTemplateClick(v.name) }} />
                            </li>
                        )}
                    </ul>
                    <div className="actions">
                        <button type="button" onClick={() => this.props.onNextClick(this.props.selectedTemplateName!)}>CONTINUE</button>
                    </div>
                </div>
            </div>
        );
    }
}