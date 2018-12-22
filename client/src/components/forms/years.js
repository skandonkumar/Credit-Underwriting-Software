import React, {Component} from 'react';
import {Field} from 'redux-form';
import onlyNums from './Normalizers/onlyNums'
import {connect} from 'react-redux'

class Years extends Component{
    constructor(props){
        super(props);
        if(!props.visited) {
            for (let i = 0; i < 5; i++) {
                props.fields.push({})
            }
        }
    }

    render(){
       const {fields, label} = this.props;
        return(
            <ul>
                <li>
                    <label>{label}</label>
                </li>
                <table>
                    <tbody>
                    <tr>
                        {fields.map((year, index) => (
                            <td key={index}>
                                <Field
                                    name = {`${year}.year${index+1}`}
                                    type = "text"
                                    component = {renderYears}
                                    label = {index+1}
                                    fieldName = {label}
                                    normalize={onlyNums}
                                />
                            </td>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </ul>
        )
    }
}

export default Years


const renderYears = ({ input, label, type, fieldName})=>(
    <div>
        <label>Year {label}</label>
        <div>
            <input {...input} type={type} placeholder= {`${fieldName} for year ${label}`}/>
        </div>
    </div>
);