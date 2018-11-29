import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class InfoPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col s10 m5">
                    <div className="card-panel teal lighten-4">
                        <span className="white-text">
                            Hello
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStatetoProps(state){
    return {auth:state.auth}
}
export default connect(mapStatetoProps)(InfoPage);