import { connect } from "react-redux";
import { withRouter } from "react-router";
import PrivateRouteComponent from "../components/PrivateRouteComponent";
import { IStoreState } from "../types";

function mapStateToProps(state: IStoreState) {
    return {
        isAuthenticated: !!state.loginState.token
    }
};

export default withRouter(connect(mapStateToProps)(PrivateRouteComponent) as any) as any;