import { connect } from "react-redux";
import { withRouter } from "react-router";
import PrivateRouteComponent, { IPrivateRouteProps } from "../components/PrivateRouteComponent";
import { IStoreState } from "../types";

function mapStateToProps(state: IStoreState, ownProps: any): IPrivateRouteProps {
    // TODO: If directly putting the URL, the selected template is replaced by the default one. Fix it.
    // Match doesn't contains the params for some reason.
    // i.e. localhost/create/angular ==> selectedTemplate: Express.
    return {
        component: ownProps.component,
        isAuthenticated: !!state.loginState.token,
        selectedTemplateName: ownProps.match.params.selectedTemplateName || state.templatesState.selectedTemplateName
    }
};

export default withRouter(connect(mapStateToProps)(PrivateRouteComponent) as any) as any;