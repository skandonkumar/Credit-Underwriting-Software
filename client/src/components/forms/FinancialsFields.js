import React,{Component} from 'react';

export default({input, label})=>{
    return(
        <div className="form-element">
            <label>{label}</label>
            <input {...input} className="form-field" style={{marginBottom:'5px'}}/>
        </div>
    )
}