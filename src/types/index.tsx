export interface ITemplate {
    appService: string;
    dockerContainer: string | null;
    githubRepo: string | null;
    isLinux: boolean;
    msdeployPackageUrl: string;
    name: string;
    sprite: string;
}

export interface ITemplatesState {
    selectedTemplateName: string;
    templates: ITemplate[];
}

export interface ILoginState {
    token: string | null;
}

export interface IStoreState {
    loginState: ILoginState;
    templatesState: ITemplatesState;
}