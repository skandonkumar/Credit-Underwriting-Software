import React,{Component} from 'react';

export default(props)=>{
    return(
        <div>
            <label>{props.label}</label>
            <input {...props.input} style={{marginBottom:'5px'}}/>
        </div>
    )
}