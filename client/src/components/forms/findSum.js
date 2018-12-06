import React, {Component} from 'react';
import {Field} from "redux-form";

class findSum extends Component{
    constructor(props){
        super(props);
        for (let i=0; i<5; i++){
            props.fields.push({})
        }
    }

    render(){
        const {fields, label, values} = this.props;
        const years = [];
        years.push(values[0][0].year1);
        years.push(values[0][1].year2);
        years.push(values[0][2].year3);
        years.push(values[0][3].year4);
        years.push(values[0][4].year5);
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
                                    <p>{years[index]}</p>
                                </td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                </ul>
        )
    }
}
export default findSum