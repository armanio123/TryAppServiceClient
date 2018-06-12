import { connect } from "react-redux";
import { withRouter } from "react-router";
import PrivateRouteComponent, { IPrivateRouteProps } from "../components/PrivateRouteComponent";
import { IStoreState } from "../types";

function mapStateToProps(state: IStoreState, ownProps: any): IPrivateRouteProps {
    return {
        component: ownProps.component,
        isAuthenticated: !!state.loginState.token,
        selectedTemplateName: state.templatesState.selectedTemplateName
    }
};

export default withRouter(connect(mapStateToProps)(PrivateRouteComponent) as any) as any;