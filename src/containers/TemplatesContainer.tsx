import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { ISelectableBoxProps } from '../components/SelectableBoxComponent';
import TemplatesComponent from '../components/TemplatesComponent';
import { IStoreState } from '../types';

function mapStateToProps(state: IStoreState) {
    return {
        history: state.history,
        selectedTemplate: state.selectedTemplate,
        templates: state.templates
    };
}

function mapDispatchToPros(dispatch: Dispatch<actions.TemplateAction>) {
    return {
        onTemplateClick: (selectedTemplate: ISelectableBoxProps) => dispatch(actions.selectTemplate(selectedTemplate))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TemplatesComponent) as any);