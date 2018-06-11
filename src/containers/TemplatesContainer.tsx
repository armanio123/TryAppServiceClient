import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import TemplatesComponent, { ITemplatesActionProps, ITemplatesStateProps } from '../components/TemplatesComponent';
import { IStoreState } from '../types';

function mapStateToProps(state: IStoreState): ITemplatesStateProps {
    return {
        selectedTemplateName: state.templatesState.selectedTemplateName,
        templates: state.templatesState.templates
    };
}

function mapDispatchToProps(dispatch: Dispatch<actions.Actions>, ownProps: any): ITemplatesActionProps {
    return {
        onNextClick: (selectedTemplateName: string) => ownProps.history.push(`/create/${selectedTemplateName}`),
        onTemplateClick: (selectedTemplateName: string) => dispatch(actions.selectTemplate(selectedTemplateName))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TemplatesComponent) as any);