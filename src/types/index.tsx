import { History, Location } from 'history';
import { ISelectableBoxProps } from '../components/SelectableBoxComponent';

export interface ITemplatesState {
    history?: History;
    selectedTemplate?: ISelectableBoxProps;
    templates: ISelectableBoxProps[];
}

export interface ILoginState {
    isAuthenticated: boolean;
    location?: Location;
}

export interface IStoreState {
    loginState: ILoginState;
    templatesState: ITemplatesState;
}