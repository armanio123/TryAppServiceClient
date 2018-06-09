import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import LoginComponent, { ILoginProps } from '../components/LoginComponent';
import { IStoreState } from '../types';

function mapStateToProps(state: IStoreState): ILoginProps {
    return {
        isAuthenticated: state.loginState.isAuthenticated
    };
}

function mapDispatchToProps(dispatch: Dispatch<actions.ILogin>): ILoginProps {
    return {
        onLoginClick: (provider: string) => dispatch(actions.login(provider)),
        setToken: (token: string) => dispatch(actions.setToken(token))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent) as any);