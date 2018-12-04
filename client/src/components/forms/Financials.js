import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, formValueSelector, FieldArray} from 'redux-form';
import FinancialsField from './FinancialsFields';
import {Link} from 'react-router-dom';
import years from "./years";
import findSum from "./findSum";

class FinancialsForm extends Component{
    renderFields(){
        const {array:{push}, pristine, Cash} = this.props
        // console.log(this.props)
        return(
            <div>
                <Field type="text" name="BuyerName" label="Buyer's name" component={FinancialsField}/>
                <Field type="text" name="StatementQuality" label="Statement Quality" component={FinancialsField}/>
                <FieldArray name="Cash" label="Cash" component={years}/>
                <FieldArray name="AccountsReceivable" label="Accounts Receivable" component={years}/>
                <FieldArray name="Inventory" label="Inventory" component={years}/>
                <FieldArray name="OtherCurrentAssets" label="OtherCurrentAssets" component={years}/>
                <FieldArray values={this.props.TotalCurrentAssets} name="TotalCurrentAssets" label="TotalCurrentAssets" component={findSum}/>
            </div>
        )
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onFinancialsSubmit)}>
                    {this.renderFields()}
                    <Link to="/home" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">Next <i className="material-icons right">done</i> </button>
                    {/*<input type="reset" className="yellow btn-flat right white-text reset-btn" value="Reset" />*/}
                </form>
            </div>
        );
    }
}


FinancialsForm = reduxForm({
    form: 'financialsForm',
    destroyOnUnmount: false
})(FinancialsForm)

const selector = formValueSelector('financialsForm')
FinancialsForm = connect(
    state =>{
        const TotalCurrentAssets = selector(state, 'Cash', 'AccountsReceivable', 'Inventory', 'OtherCurrentAssets' )
        return{
            TotalCurrentAssets
        }
    }
)(FinancialsForm)

export default FinancialsForm