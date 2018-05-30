import { ISelectableBoxProps } from '../components/SelectableBoxComponent';
import * as constants from '../constants';

export interface ISelectTemplate {
    selectedTemplate: ISelectableBoxProps;
    type: constants.SELECT_TEMPLATE;
}

export interface ILogin {
    provider: string;
    type: constants.LOGIN;
}

export type Actions = ISelectTemplate | ILogin;

export function selectTemplate(selectedTemplate: ISelectableBoxProps): ISelectTemplate {
    return {
        selectedTemplate,
        type: constants.SELECT_TEMPLATE
    };
}

export function login(provider: string): ILogin {
    return {
        provider,
        type: constants.LOGIN
    }
}