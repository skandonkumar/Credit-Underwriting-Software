import React from 'react';
import {connect} from 'react-redux';

const Ratios = ({onBack, formValues})=>{
    return(
        <div>
            <h5>Ratios form</h5>
            <div>
                <div>
                    <label>Buyer's Name</label>
                    <div>{formValues.BuyerName}</div>
                </div>
                <div>
                    <label>Statement Quality</label>
                    <div>{formValues.StatementQuality}</div>
                </div>
                <div>
                    <label>Rate</label>
                    <div>{formValues.Rate}</div>
                </div>
            </div>
            <button className="teal btn-flat left white-text" onClick={onBack}>Back</button>
        </div>
    );
};

function mapStateToProps(state){
    return{
        formValues: state.form.financialsForm.values
    };
}

export default connect(mapStateToProps)(Ratios);