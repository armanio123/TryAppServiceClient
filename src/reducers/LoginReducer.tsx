import { ILogin } from '../actions';
import { ILoginState } from '../types';

export function getToken() {
    // If query parameters contains 'cookie', means it's a redirection and we need to store the token on a cookie.
    const tokenQueryParam = new URLSearchParams(window.location.search).get("cookie");
    if (tokenQueryParam) {
        // cookie expires in an hour, same as the allocated resource.
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 1);

        document.cookie = `token=${tokenQueryParam};expires=${currentDate.toUTCString()};path=/`;

        return tokenQueryParam;
    }

    // If we already have a token in a cookie, return that
    const tokenCookie = /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/.exec(document.cookie)!;
    if (tokenCookie[1]) {
        return tokenCookie[1];
    }

    return "";
}

export const initialState: ILoginState = {
    token: getToken()
}

export function loginReducer(state: ILoginState = initialState, action: ILogin): ILoginState {
    return state;
}