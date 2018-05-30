import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import LoginComponent from '../components/LoginComponent';
import { IStoreState } from '../types';

function mapStateToProps(state: IStoreState) {
    return {
        isAuthenticated: state.loginState.isAuthenticated
    };
}

function mapDispatchToPros(dispatch: Dispatch<actions.ILogin>) {
    return {
        onLoginClick: (provider: string) => dispatch(actions.login(provider))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(LoginComponent) as any);