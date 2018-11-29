import React,{Component} from 'react';
import Financials from './Financials';
import Ratios from './Ratios';
import {reduxForm} from 'redux-form';

class FormNew extends Component{
    constructor(props) {
        super(props);

        this.state = {
            // financials: false,
            ratios: false,
            summary: false
        };
    }

    renderContent(){
        if(this.state.ratios === true){
            return <Ratios onBack={()=>this.setState({ratios:false})}/>;
        }
        return <Financials onFinancialsSubmit={()=>this.setState({ratios:true})}/>;
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'financialsForm'
})(FormNew);