import React,{Component} from 'react';
import Financials from './Financials';
import Ratios from './Ratios';
import {reduxForm} from 'redux-form';

class FormNew extends Component{
    constructor(props) {
        super(props);
        this.state = {
            financialsVisited:false,
            ratios: false,
            summary: false
        };
    }

    renderContent(){
        if(this.state.ratios === true){
            return <Ratios onBack={()=>{
                this.setState({ratios:false})

            }}/>;
        }
        return <Financials visited = {this.state.financialsVisited} onFinancialsSubmit={()=>{
            this.setState({ratios:true})
            this.setState({financialsVisited:true})
        }}/>;
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
