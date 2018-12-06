import React, {Component} from 'react';
import {Field} from 'redux-form';
import onlyAlphs from "./onlyAlphs";
import onlyNums from "./onlyNums";

export default({fields, meta, label})=>(
    <ul>
        <li>
            <label>{label}</label>
            <button type = "button" className="blue-grey btn-small right white-text" onClick={()=> {
                for (let i=0; i<5; i++){
                    fields.push({})
                }
            }} disabled={!!meta.dirty}>
                Add 5 years <i className="material-icons right"/>
            </button>
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

const renderYears = ({ input, label, type, fieldName})=>(
    <div>
        <label>Year {label}</label>
        <div>
            <input {...input} type={type} placeholder= {`${fieldName} for year ${label}`}/>
        </div>
    </div>
)