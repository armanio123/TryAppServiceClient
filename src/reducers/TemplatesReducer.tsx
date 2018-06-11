import { ISelectTemplate } from '../actions';
import * as constants from '../constants';
import { ITemplatesState } from '../types';

// TODO: Use the correct templates.
export const initialState = {
    selectedTemplateName: "Express",
    templates: [{
        appService: "Web",
        dockerContainer: null,
        fileName: "Express.zip",
        githubRepo: null,
        isLinux: false,
        language: "Default",
        msdeployPackageUrl: "https://tryappservicetemplates.blob.core.windows.net/zipped/Default/Express.zip",
        name: "Express",
        sprite: "jsLogo.svg" // TODO: Use the sprite
    }, {
        CsmTemplateFilePath: "D:\\home\\site\\wwwroot\\ARMTemplates\\LinuxResource.json",
        appService: "Web",
        dockerContainer: null,
        githubRepo: null,
        isLinux: true,
        msdeployPackageUrl: "D:\\home\\site\\wwwroot\\App_Data\\LinuxTemplates\\Node.jsLinuxApp.zip",
        name: "Vue.js", // Template used: "Node.js Web App on Linux",
        sprite: "vueLogo.svg"
    }, {
        appService: "Web",
        dockerContainer: null,
        fileName: "Boilerplate.zip",
        githubRepo: null,
        isLinux: false,
        language: "HTML5",
        msdeployPackageUrl: "https://tryappservicetemplates.blob.core.windows.net/zipped/HTML5/Boilerplate.zip",
        name: "React", // Template used: "Boilerplate",
        sprite: "reactLogo.svg"
    }, {
        appService: "Web",
        dockerContainer: null,
        fileName: "HTML5 Empty Site.zip",
        githubRepo: null,
        isLinux: false,
        language: "HTML5",
        msdeployPackageUrl: "https://tryappservicetemplates.blob.core.windows.net/zipped/HTML5/HTML5%20Empty%20Site.zip",
        name: "Angular", // "HTML5 Empty Site",
        sprite: "angularLogo.svg"
    }]
};

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