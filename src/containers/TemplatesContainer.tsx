import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import TemplatesComponent, { ITemplatesActionProps, ITemplatesStateProps } from '../components/TemplatesComponent';
import * as constants from '../constants';
import { IStoreState } from '../types';

function mapStateToProps(state: IStoreState): ITemplatesStateProps {
    return {
        authToken: state.loginState.token!,
        created: state.trialState.created,
        isAuthenticated: !!state.loginState.token,
        selectedTemplateName: state.templatesState.selectedTemplateName,
        templates: state.templatesState.templates,
        timeLeft: state.trialState.timeLeft,
        url: state.trialState.url,
    };
}

function mapDispatchToProps(dispatch: Dispatch<actions.Actions>, ownProps: any): ITemplatesActionProps {
    return {
        getTrialInfo: (authToken: string) => dispatch(actions.fetchExistingTasData(authToken)),
        onNextClick: (selectedTemplateName: string) => ownProps.history.push(`${constants.BASE_URL}/create/${selectedTemplateName}`),
        onTemplateClick: (selectedTemplateName: string) => dispatch(actions.selectTemplate(selectedTemplateName))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TemplatesComponent) as any);