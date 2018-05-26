import { History } from 'history';
import { ISelectableBoxProps } from '../components/SelectableBoxComponent';

export interface IStoreState {
    history: History,
    templates: ISelectableBoxProps[];
    selectedTemplate: ISelectableBoxProps;
}