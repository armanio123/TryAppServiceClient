import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Dispatch } from "redux";
import * as actions from '../actions';
import CreateComponent, { ICreateActionProps, ICreateStateProps } from "../components/CreateComponent";
import { IStoreState, ITemplate } from "../types";

function mapStateToProps(state: IStoreState): ICreateStateProps {
    return {
        authorizationToken: state.loginState.token!,
        selectedTemplate: state.templatesState.templates.find(x => x.name === state.templatesState.selectedTemplateName)!
    };
}

function mapDispatchToProps(dispatch: Dispatch<actions.Actions>): ICreateActionProps {
    return {
        createTemplate: (authorizationToken: string, selectedTemplate: ITemplate) => dispatch(actions.createTemplate(authorizationToken, selectedTemplate))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateComponent) as any);