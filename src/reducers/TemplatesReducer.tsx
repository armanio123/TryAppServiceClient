import { Actions } from '../actions';
import * as constants from '../constants';
import { ITemplatesState } from '../types';

const featuredTemplate = {
    fileName: "Express.zip",
    language: "Default",
    dockerContainer: null,
    name: "Express",
    sprite: "jsLogo.svg",
    appService: "Web",
    githubRepo: null,
    msdeployPackageUrl: "https://tryappservicetemplates.blob.core.windows.net/zipped/Default/Express.zip",
    isLinux: false
}

export const initialState = {
    selectedTemplate: featuredTemplate,
    templates: [
        featuredTemplate,
        {
            fileName: "Express.zip",
            language: "Default",
            dockerContainer: null,
            name: "Express",
            sprite: "vueLogo.svg",
            appService: "Web",
            githubRepo: null,
            msdeployPackageUrl: "https://tryappservicetemplates.blob.core.windows.net/zipped/Default/Express.zip",
            isLinux: false
        }, {
            fileName: "Express.zip",
            language: "Default",
            dockerContainer: null,
            name: "Express",
            sprite: "reactLogo.svg",
            appService: "Web",
            githubRepo: null,
            msdeployPackageUrl: "https://tryappservicetemplates.blob.core.windows.net/zipped/Default/Express.zip",
            isLinux: false
        }, {
            fileName: "Express.zip",
            language: "Default",
            dockerContainer: null,
            name: "Express",
            sprite: "angularLogo.svg",
            appService: "Web",
            githubRepo: null,
            msdeployPackageUrl: "https://tryappservicetemplates.blob.core.windows.net/zipped/Default/Express.zip",
            isLinux: false
        }]
};

export function templateReducer(state: ITemplatesState = initialState, action: Actions): ITemplatesState {
    switch (action.type) {
        case constants.SELECT_TEMPLATE:
            const newTemplates = state.templates!.map(x => {
                return {
                    ...x,
                    isSelected: x.name === action.selectedTemplate.name
                };
            });

            return {
                ...state,
                selectedTemplate: { ...action.selectedTemplate },
                templates: newTemplates
            };
    }

    return state;
}