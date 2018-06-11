import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import LoginComponent, { ILoginActionProps, ILoginStateProps } from '../components/LoginComponent';
import { IStoreState } from '../types';

function mapStateToProps(state: IStoreState, ownProps: any): ILoginStateProps {
    return {
        isAuthenticated: !!state.loginState.token,
        // TODO: Figure out a way to bind the query params even before getting the mapToStates, as this values should already be set as the preloadedState/initialState.
        selectedTemplateName: ownProps.match.params.selectedTemplateName || state.templatesState.selectedTemplateName,
        token: state.loginState.token || new URLSearchParams(ownProps.location.search).get("cookie")
    };
}

function mapDispatchToProps(dispatch: Dispatch<actions.ILogin>): ILoginActionProps {
    return {
        onLoginClick: (provider: string) => dispatch(actions.login(provider)),
        updateFromRedirect: (token: string, templateName: string) => {
            dispatch(actions.setToken(token));
            dispatch(actions.selectTemplate(templateName));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent) as any);