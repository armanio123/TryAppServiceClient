// import { ISelectableBoxProps } from '../components/SelectableBoxComponent';
import * as constants from '../constants';
import { ITemplate } from '../types';

export interface ISelectTemplate {
    selectedTemplate: ITemplate;
    type: constants.SELECT_TEMPLATE;
}

export interface ILogin {
    isAuthenticated?: boolean;
    token?: string;
    provider?: string;
    type: constants.LOGIN_REDIRECT | constants.SET_TOKEN;
}

export type Actions = ISelectTemplate | ILogin;


export function selectTemplate(selectedTemplate: ITemplate): ISelectTemplate {
    return {
        selectedTemplate,
        type: constants.SELECT_TEMPLATE
    };
}

export function login(provider: string): ILogin {
    const authUrl = `https://tryappservice.azure.com/api/resource?appServiceName=Function&provider=${encodeURIComponent(provider)}`;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json,*/*");
    headers.append('ms-x-user-agent', 'Functions/');

    // TODO: Choose the correct template. Not just function.
    const body = {
        appService: "Function",
        githubRepo: "",
        language: "C#",
        name: "HttpTrigger-CSharp"
    };

    // const body = {
    //     appService: "Web",
    //     dockerContainer: null,
    //     fileName: "ASP.NET Core 1.0.zip",
    //     githubRepo: null,
    //     isLinux: false,
    //     language: "C#",
    //     msdeployPackageUrl: "https://tryappservicetemplates.blob.core.windows.net/zipped/C%23/ASP.NET%20Core%201.0.zip",
    //     name: "ASP.NET Core 1.0",
    //     sprite: "sprite-ASPNETCore10 ASPNETCore10"
    // };

    fetch(authUrl, {
        body: JSON.stringify(body),
        headers,
        method: "POST"
    })
    .then(response => {
        // 400 = you already have a resource, 403 = No login credentials provided
        if (response.status === 403) {
            window.location.href = response.headers.get("loginurl") || "";
        }
    })
    .catch(reason => {
        console.log(reason);
    });

    return {
        provider,
        type: constants.LOGIN_REDIRECT
    }
}

export function setToken(token: string): ILogin {
    return {
        isAuthenticated: true,
        token,
        type: constants.SET_TOKEN,
    };
}