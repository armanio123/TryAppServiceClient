import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import LoginComponent, { ILoginActionProps, ILoginStateProps } from '../components/LoginComponent';
import { IStoreState } from '../types';

function mapStateToProps(state: IStoreState): ILoginStateProps {
    return {
        isAuthenticated: !!state.loginState.token,
        selectedTemplateName: state.templatesState.selectedTemplateName,
        token: state.loginState.token
    };
}

function mapDispatchToProps(dispatch: Dispatch<actions.ILogin>): ILoginActionProps {
    return {
        onLoginClick: (provider: string) => dispatch(actions.login(provider))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent) as any);