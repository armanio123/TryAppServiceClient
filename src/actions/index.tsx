import * as constants from '../constants';
import { ITemplate } from '../types';

export interface ISelectTemplate {
    selectedTemplateName: string;
    type: constants.SELECT_TEMPLATE;
}

export interface ILogin {
    type: constants.LOGIN_REDIRECT;
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

    fetch(authUrl, {
        headers: getHeaders(),
        method: "POST"
    })
        .then(response => {
            // 400 = you already have a resource, 403 = No login credentials provided
            if (response.status === 403) {
                window.location.href = response.headers.get("loginurl") || "";
            }

            throw Error(response.statusText);
        })
        .catch(reason => {
            // TODO: Do/show something when the url errored out.
            // tslint:disable-next-line:no-console
            console.log(reason);
        });

    return {
        type: constants.LOGIN_REDIRECT
    }
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

export function deleteTemplate(authorizationToken: string, retryCallback: () => void): ICreate {
    const resourceApi = `${constants.TRY_APP_API}/resource`;

    fetch(resourceApi, {
        headers: getHeaders(authorizationToken),
        method: "DELETE"
    })
        .then(response => {
            retryCallback();
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