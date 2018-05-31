import { Actions } from '../actions';
import * as constants from '../constants';
import { ITemplatesState } from '../types';

const initialState = {
    templates: [{
        iconUrl: require("../assets/jsLogo.svg"),
        isSelected: false,
        name: "Express"
    }, {
        iconUrl: require("../assets/vueLogo.svg"),
        isSelected: false,
        name: "Vue"
    }, {
        iconUrl: require("../assets/reactLogo.svg"),
        isSelected: false,
        name: "React"
    }, {
        iconUrl: require("../assets/angularLogo.svg"),
        isSelected: false,
        name: "Angular"
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