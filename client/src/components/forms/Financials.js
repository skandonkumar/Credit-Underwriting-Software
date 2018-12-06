import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, formValueSelector, FieldArray} from 'redux-form';
import FinancialsField from './FinancialsFields';
import {Link} from 'react-router-dom';
import years from "./years";
import findSum from "./findSum";
import onlyAlphs from "./onlyAlphs"
import onlyNums from "./onlyNums"

class FinancialsForm extends Component{
    //const onlyNums = value.replace(/[^\d]/g, '')
    renderFields(){

        const {array:{push}, pristine, Cash} = this.props
        console.log(this.props);
        // const onlyAlphs = input.value.replace(/^[A-Za-z]+$/, '')
        return(
            <div>
                <Field type="text" name="BuyerName" label="Buyer's name" component={FinancialsField} normalize={onlyAlphs}/>
                <Field type="text" name="StatementQuality" label="Statement Quality" component={FinancialsField} normalize={onlyAlphs}/>
                <FieldArray name="Cash" label="Cash" component={years}/>
                <FieldArray name="AccountsReceivable" label="Accounts Receivable" component={years}/>
                <FieldArray name="Inventory" label="Inventory" component={years}/>
                <FieldArray name="OtherCurrentAssets" label="OtherCurrentAssets" component={years}/>
                <FieldArray  values={this.props.TotalCurrentAssets} name="TotalCurrentAssets" label="TotalCurrentAssets" component={findSum}/>
            </div>
        )
    }
    render(){
        return(

                <form onSubmit={this.props.handleSubmit(this.props.onFinancialsSubmit)}>
                    <div className="container">
                        <div className="form-main">
                            <div className="row">
                                <div className="col s12 m12">
                                    <div className="form-wrap financial-form">
                                        <h1 className="form-header">Financial Form</h1>
                                        {this.renderFields()}
                                        <Link to="/home" className="red btn-flat white-text animate">Cancel</Link>
                                        <button type="submit" className="teal btn-flat right white-text animate">Next <i className="material-icons right">done</i> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

        );
    }
}

const sum=(...input)=>{
    input.map((field, index)=>{
        if (!field.length === 1){
            console.log(field)
        }
    })
}

FinancialsForm = reduxForm({
    form: 'financialsForm',
    destroyOnUnmount: false
})(FinancialsForm)

const selector = formValueSelector('financialsForm')
FinancialsForm = connect(
    state =>{
        const Cash = selector(state, 'Cash')
        const AccountsReceivable = selector(state, 'AccountsReceivable')
        const Inventory = selector(state, 'Inventory')
        const OtherCurrentAssets = selector(state, 'OtherCurrentAssets')
        const TotalCurrentAssets = sum(!Cash?[]:Cash, !AccountsReceivable?[]:AccountsReceivable, !Inventory?[]:Inventory, !OtherCurrentAssets?[]:OtherCurrentAssets)
        return{
            Cash,AccountsReceivable,Inventory,OtherCurrentAssets,TotalCurrentAssets
        }
    }
)(FinancialsForm)

export default FinancialsForm