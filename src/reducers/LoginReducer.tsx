import { ILogin } from '../actions';
import * as constants from '../constants';
import { ILoginState } from '../types';

const initialState: ILoginState = {
    isAuthenticated: false
}

export function loginReducer(state: ILoginState = initialState, action: ILogin): ILoginState {
    switch (action.type) {
        case constants.LOGIN:
            return {
                ...state,
                isAuthenticated: true
            };
    }

    return state;
}