import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import FinancialsField from './FinancialsFields';
import {Link} from 'react-router-dom';

class FinancialsForm extends Component{
    renderFields(){
        return(
            <div>
                <Field type="text" name="BuyerName" label="Buyer's name" component={FinancialsField}/>
                <Field type="text" name="StatementQuality" label="Statement Quality" component={FinancialsField}/>
                <Field type="text" name="Rate" label="Rate" component={FinancialsField}/>
            </div>
        )
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onFinancialsSubmit)}>
                    {this.renderFields()}
                    <Link to="/home" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">Next <i className="material-icons right">navigate_next</i> </button>
                    <input type="reset" className="yellow btn-flat right white-text reset-btn" value="Reset" />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'financialsForm',
    destroyOnUnmount:false
})(FinancialsForm);