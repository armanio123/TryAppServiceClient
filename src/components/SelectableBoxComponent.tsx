import * as React from 'react';
import '../styles/SelectableBoxComponent.css';

export interface ISelectableBoxStateProps {
    iconUrl: string;
    isSelected: boolean;
    name: string;
}

export interface ISelectableBoxActionProps {
    onClick: () => void;
}

export type SelectableBoxProps = ISelectableBoxStateProps & ISelectableBoxActionProps;

export function SelectableBoxComponent(props: SelectableBoxProps) {
    const selectedClassName = props.isSelected ? "selected" : "";

    return (
        <div className="selectableBox" onClick={props.onClick}>
            <div className={`icon ${selectedClassName}`}>
                <div className="selection">
                    <img src={require('../assets/checked.svg')} />
                </div>
                <div className="content">
                    <img src={props.iconUrl} />
                </div>
            </div>
            <div className="description">
                <span>{props.name}</span>
            </div>
        </div>
    );
}