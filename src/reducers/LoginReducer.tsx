import { ILogin } from '../actions';
import * as constants from '../constants';
import { ILoginState } from '../types';

const initialState: ILoginState = {
    isAuthenticated: false
}

export function loginReducer(state: ILoginState = initialState, action: ILogin): ILoginState {
    switch (action.type) {
        case constants.LOGIN_REDIRECT:
            break;
        case constants.SET_TOKEN:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                token: action.token
            };
    }

    return state;
}