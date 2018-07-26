import { ISaveTrialInfo, ISelectTemplate } from '../actions';
import * as constants from '../constants';
import { ITemplatesState, ITrialState } from '../types';

const defaultSelectedTemplate = "Node.js VSCode Web App on Linux";

// TODO: Use the correct templates.
const templates = [{
    appService: "Web",
    dockerContainer: null,
    githubRepo: null,
    isLinux: true,
    msdeployPackageUrl: "D:\\home\\site\\wwwroot\\App_Data\\LinuxTemplates\\Node.jsVSCodeLinuxApp.zip",
    name: "Node.js VSCode Web App on Linux",
    sprite: "jsLogo.svg", 
    uiName: "Express"
}, {
    appService: "Web",
    dockerContainer: null,
    githubRepo: null,
    isLinux: true,
    msdeployPackageUrl: "D:\\home\\site\\wwwroot\\App_Data\\LinuxTemplates\\Node.jsLinuxApp.zip",
    name: "Vue.js", // "Node.js Web App on Linux",
    sprite: "vueLogo.svg",
    uiName: "Vue.js"
}, {
    appService: "Web",
    dockerContainer: null,
    githubRepo: null,
    isLinux: false,
    msdeployPackageUrl: "https://tryappservicetemplates.blob.core.windows.net/zipped/HTML5/Boilerplate.zip",
    name: "React", // "Boilerplate",
    sprite: "reactLogo.svg",
    uiName: "React"
}, {
    appService: "Web",
    dockerContainer: null,
    githubRepo: null,
    isLinux: false,
    msdeployPackageUrl: "https://tryappservicetemplates.blob.core.windows.net/zipped/HTML5/HTML5%20Empty%20Site.zip",
    name: "Angular", // "HTML5 Empty Site",
    sprite: "angularLogo.svg",
    uiName: "Angular"
}];

const selectedTemplateName = getSelectedTemplate();

function getSelectedTemplate() {
    const lastSegment = getLastUrlSegment();
    const find = templates.find(x => x.name.toLowerCase() === lastSegment.toLowerCase())

    return find ? find.name : defaultSelectedTemplate;
}

function getLastUrlSegment(): string {
    // If URL ends with '/', remove it.
    const cleanPathname = window.location.pathname.replace(/\/$/, '');

    return cleanPathname.substr(cleanPathname.lastIndexOf('/') + 1);
}

export const initialState: ITemplatesState = {
    selectedTemplateName,
    templates
};

export const initialTrialState: ITrialState = {
    created: false,
    timeLeft: -1,
    url: ""
}

export function trialReducer(state: ITrialState = initialTrialState, action: ISaveTrialInfo): ITrialState {
    switch (action.type) {
        case constants.SAVE_TRIAL:
            return {
                ...state, timeLeft: action.timeLeft, url: action.url, created: action.created
            }
    }
    return state;
}

export function templateReducer(state: ITemplatesState = initialState, action: ISelectTemplate): ITemplatesState {
    switch (action.type) {
        case constants.SELECT_TEMPLATE:
            return {
                ...state,
                selectedTemplateName: action.selectedTemplateName
            };
    }

    return state;
}