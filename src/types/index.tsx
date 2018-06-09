// import { History, Location } from 'history';
// import { ISelectableBoxProps } from '../components/SelectableBoxComponent';

export interface ITemplate {
    fileName: string;
    language: string | null;
    dockerContainer: string | null;
    name: string;
    sprite: string;
    appService: string;
    githubRepo: string | null;
    msdeployPackageUrl: string;
    isLinux: boolean;
}

export interface ITemplatesState {
    // history?: History;
    selectedTemplate: ITemplate;
    templates: ITemplate[];
}

export interface ILoginState {
    isAuthenticated?: boolean;
    token?: string;
    // location?: Location;
}

export interface IStoreState {
    loginState: ILoginState;
    templatesState: ITemplatesState;
}