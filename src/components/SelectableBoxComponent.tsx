import * as React from 'react';
import './SelectableBoxComponent.css';

export interface ISelectableBoxProps {
    iconUrl?: string;
    isSelected?: boolean;
    name?: string;
    onClick?: () => void;
}

export function SelectableBoxComponent(props: ISelectableBoxProps) {
    const selectedClassName = props.isSelected ? "selected" : "";

    return (
        <div className="selectableBox" onClick={props.onClick}>
            <div className={`icon ${selectedClassName}`}>
                <div className="selection">
                    <img src={require('../assets/checked.svg')} />
                </div>
                <div className="content">
                    <img src={props.iconUrl}/>
                </div>
            </div>
            <div className="description">
                <span>{props.name}</span>
            </div>
        </div>
    );
}