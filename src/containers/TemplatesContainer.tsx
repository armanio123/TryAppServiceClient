import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
// import { ISelectableBoxProps } from '../components/SelectableBoxComponent';
import TemplatesComponent from '../components/TemplatesComponent';
import { IStoreState, ITemplate } from '../types';

function mapStateToProps(state: IStoreState) {
    return {
        selectedTemplate: state.templatesState.selectedTemplate,
        templates: state.templatesState.templates
    };
}

function mapDispatchToPros(dispatch: Dispatch<actions.Actions>) {
    return {
        onTemplateClick: (selectedTemplate: ITemplate) => dispatch(actions.selectTemplate(selectedTemplate))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TemplatesComponent) as any);