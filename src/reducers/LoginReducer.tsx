import { ILogin } from '../actions';
import * as constants from '../constants';
import { ILoginState } from '../types';

const initialState: ILoginState = {
}

export function loginReducer(state: ILoginState = initialState, action: ILogin): ILoginState {
    // TODO: We might want to show some kind of state when redirections is happening.
    // It might happent to fast to even display something but it might not as well.
    
    switch (action.type) {
        case constants.SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
    }

    return state;
}