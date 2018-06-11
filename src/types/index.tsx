export interface ITemplate {
    fileName?: string;
    language?: string | null;
    dockerContainer: string | null;
    name: string;
    sprite: string;
    appService: string;
    githubRepo: string | null;
    msdeployPackageUrl: string;
    isLinux: boolean;
}

export interface ITemplatesState {
    selectedTemplateName: string;
    templates: ITemplate[];
}

export interface ILoginState {
    token?: string;
}

export interface IStoreState {
    loginState: ILoginState;
    templatesState: ITemplatesState;
}