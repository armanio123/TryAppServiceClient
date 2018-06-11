import * as constants from '../constants';
import { ITemplate } from '../types';

export interface ISelectTemplate {
    selectedTemplateName: string;
    type: constants.SELECT_TEMPLATE;
}

export interface ILogin {
    token?: string;
    provider?: string;
    type: constants.LOGIN_REDIRECT | constants.SET_TOKEN | constants.SELECT_TEMPLATE;
}

export interface ICreate {
    type: constants.CREATING_TEMPLATE | constants.DELETING_TEMPLATE;
}

export type Actions = ISelectTemplate | ILogin | ICreate;

export function selectTemplate(selectedTemplateName: string): ISelectTemplate {
    return {
        selectedTemplateName,
        type: constants.SELECT_TEMPLATE
    };
}

export function login(provider: string): ILogin {
    // TODO: Hardcode AppServiceName=Function temprary, change to the correct name when available.
    const authUrl = `${constants.TRY_APP_API}/resource?appServiceName=Function&provider=${encodeURIComponent(provider)}`;

    // TODO: Login is cached or something. When called the second time it forwards 
    // to https://tryappservice.azure.com/?code=3e32eb34b432f295cea1&state=http:%2F%2Flocalhost:3000%2Flogin%2FReact%3FappServiceName%3DFunction%26provider%3Dgithub
    fetch(authUrl, {
        headers: getHeaders(),
        method: "POST"
    })
        .then(response => {
            // 400 = you already have a resource, 403 = No login credentials provided
            if (response.status === 403) {
                window.location.href = response.headers.get("loginurl") || "";
            }
        })
        .catch(reason => {
            // TODO: Do/show something when the url errored out.
            // tslint:disable-next-line:no-console
            console.log(reason);
        });

    return {
        provider,
        type: constants.LOGIN_REDIRECT
    }
}

export function setToken(token: string): ILogin {
    return {
        token,
        type: constants.SET_TOKEN,
    };
}

export function createTemplate(authorizationToken: string, selectedTemplate: ITemplate): ICreate {
    const resourceApi = `${constants.TRY_APP_API}/resource`;

    fetch(resourceApi, {
        body: JSON.stringify(selectedTemplate),
        headers: getHeaders(authorizationToken),
        method: "POST"
    })
        .then(response => {
            // 400 = you already have a resource, 403 = No login credentials provided
            if (response.status === 400) {
                // Delete existing template and retrying.
                // This might not be wanted as it's going to delete the users information.
                deleteTemplate(authorizationToken, () => createTemplate(authorizationToken, selectedTemplate));
                throw Error(response.statusText);
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            window.location.href = data.url;
        })
        .catch(reason => {
            // tslint:disable-next-line:no-console
            console.log(reason);
        });

    return {
        type: constants.CREATING_TEMPLATE
    }
}

export function deleteTemplate(authorizationToken: string, callback: () => void): ICreate {
    const resourceApi = `${constants.TRY_APP_API}/resource`;

    fetch(resourceApi, {
        headers: getHeaders(authorizationToken),
        method: "DELETE"
    })
        .then(response => {
            callback();
        })
        .catch(reason => {
            // TODO: Do/show something when the url errored out.
            // tslint:disable-next-line:no-console
            console.log(reason);
        });

    return {
        type: constants.DELETING_TEMPLATE
    }
}

function getHeaders(authorizationToken?: string) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json,*/*");
    headers.append('ms-x-user-agent', 'Functions/');

    if (authorizationToken) {
        headers.append("Authorization", `Bearer ${authorizationToken}`);
    }

    return headers;
}