import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, formValueSelector, FieldArray} from 'redux-form';
import FinancialsField from './FinancialsFields';
import {Link} from 'react-router-dom';
import years from "./years";
import findSum from "./findSum";
import onlyAlphs from './Normalizers/onlyAlphs'

class FinancialsForm extends Component{
    renderFields(){
        return(
            <div>
                <Field type="text" name="BuyerName" label="Buyer's name" component={FinancialsField} normalize={onlyAlphs}/>
                <Field type="text" name="StatementQuality" label="Statement Quality" component={FinancialsField} normalize={onlyAlphs}/>
                <FieldArray visited = {this.props.visited} name="Cash" label="Cash" component={years} />
                <FieldArray visited = {this.props.visited} name="AccountsReceivable" label="Accounts Receivable" component={years}/>
                <FieldArray visited = {this.props.visited} name="Inventory" label="Inventory" component={years}/>
                <FieldArray visited = {this.props.visited} name="OtherCurrentAssets" label="OtherCurrentAssets" component={years}/>
                <FieldArray  values={this.props.TotalCurrentAssets} name="TotalCurrentAssets" label="TotalCurrentAssets" component={findSum}/>
                <FieldArray visited = {this.props.visited} name="FixedAssets" label="Fixed Assets" component={years}/>
                <FieldArray visited = {this.props.visited} name="OtherNonCurrentAssets" label="OtherNonCurrentAssets" component={years}/>
                <FieldArray visited = {this.props.visited} name="Intangibles" label="Intangibles" component={years}/>
                <FieldArray visited = {this.props.visited} name="TotalAssets" label="TotalAssets" component={years}/>
                <FieldArray visited = {this.props.visited} name="AccountsPayable" label="AccountsPayable" component={years}/>
                <FieldArray visited = {this.props.visited} name="LineOfCredit" label="LineOfCredit" component={years}/>
                <FieldArray visited = {this.props.visited} name="CurrentPeriodPrincipal" label="CurrentPeriodPrincipal" component={years}/>
                <FieldArray visited = {this.props.visited} name="OtherCurrentLiabilities" label="OtherCurrentLiabilities" component={years}/>
                <FieldArray  values={this.props.TotalCurrentLiabilities} name="TotalCurrentLiabilities" label="TotalCurrentLiabilities" component={findSum}/>
                <FieldArray visited = {this.props.visited} name="LongTermLiabilities" label="LongTermLiabilities" component={years}/>
                <FieldArray visited = {this.props.visited} name="TotalLiabilities" label="TotalLiabilities" component={years}/>
                <FieldArray visited = {this.props.visited} name="RetainedEarnings" label="RetainedEarnings" component={years}/>
                <FieldArray visited = {this.props.visited} name="NetWorth" label="NetWorth" component={years}/>
                <FieldArray visited = {this.props.visited} name="Sales" label="Sales" component={years}/>
                <FieldArray visited = {this.props.visited} name="CostOfGoodsSold" label="CostOfGoodsSold" component={years}/>
                {/*<FieldArray  values={this.props.GrossProfit} name="GrossProfit" label="GrossProfit" component={findSum}/>*/}
            </div>
        )
    }
    render(){
        return(
            <div>
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
            </div>
        );
    }
}

const sum=(...input)=>{
    let values = [{year1:0}, {year2:0}, {year3:0}, {year4:0}, {year5:0}];
    input.map((field,index)=>{
        field.map((year, count)=>{
            values[0].year1 += year.year1=== undefined?0:parseFloat(year.year1);
            values[1].year2 += year.year2=== undefined?0:parseFloat(year.year2);
            values[2].year3 += year.year3=== undefined?0:parseFloat(year.year3);
            values[3].year4 += year.year4=== undefined?0:parseFloat(year.year4);
            values[4].year5 += year.year5=== undefined?0:parseFloat(year.year5)
        })
    });
    // this.props.change(this.props.TotalCurrentAssets, values);
    return values
};

const diff=(...input)=>{

};

FinancialsForm = reduxForm({
    form: 'financialsForm',
    // validate:validate,
    destroyOnUnmount: false

})(FinancialsForm);

// function validate(values) {
//     const errors = {}
//
//     if(!values.BuyerName){
//         errors[this.props.BuyerName] = 'You must provide a value';
//     }
// }

const selector = formValueSelector('financialsForm');
FinancialsForm = connect(
    state =>{
        const Cash = selector(state, 'Cash');
        const AccountsReceivable = selector(state, 'AccountsReceivable');
        const Inventory = selector(state, 'Inventory');
        const OtherCurrentAssets = selector(state, 'OtherCurrentAssets');
        const FixedAssets = selector(state, 'FixedAssets');
        const OtherNonCurrentAssets = selector(state, 'OtherNonCurrentAssets');
        const Intangibles = selector(state, 'Intangibles');
        const TotalAssets = selector(state, 'TotalAssets');
        const AccountsPayable = selector(state, 'AccountsPayable');
        const LineOfCredit = selector(state, 'LineOfCredit');
        const CurrentPeriodPrincipal = selector(state, 'CurrentPeriodPrincipal');
        const OtherCurrentLiabilities = selector(state, 'OtherCurrentLiabilities');
        const LongTermLiabilities = selector(state, 'LongTermLiabilities');


        const TotalCurrentAssets = sum(!Cash?[]:Cash, !AccountsReceivable?[]:AccountsReceivable, !Inventory?[]:Inventory, !OtherCurrentAssets?[]:OtherCurrentAssets);
        const TotalCurrentLiabilities = sum(!AccountsPayable?[]:AccountsPayable, !LineOfCredit?[]:LineOfCredit, !CurrentPeriodPrincipal?[]:CurrentPeriodPrincipal, !OtherCurrentLiabilities?[]:OtherCurrentLiabilities);
        return{
            Cash,AccountsReceivable,Inventory,OtherCurrentAssets, TotalCurrentAssets, TotalCurrentLiabilities, LongTermLiabilities, FixedAssets,
            OtherNonCurrentAssets, Intangibles, TotalAssets, OtherCurrentLiabilities, CurrentPeriodPrincipal, LineOfCredit, AccountsPayable
        }
    }
)(FinancialsForm);

export default FinancialsForm