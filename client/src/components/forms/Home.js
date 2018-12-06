import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import InfoPage from "../InfoPage";
import {Redirect} from 'react-router-dom';

class Home extends Component{

    render(){
        return(
            <div className="button-wrap">
            <div className="row">
                <div className="col s4 m4">
                    <Link to = '/form/new' className="waves-effect waves-light btn-large home-btn">Create New Form</Link>
                </div>
                <div className="col s4 m4">
                    <Link to = '/form/update' className= "waves-effect waves-light btn-large home-btn"> Update Form </Link>
                </div>
                <div className="col s4 m4">
                    <Link to = '/form/export' className= "waves-effect waves-light btn-large home-btn"> Export as XLXS </Link>
                </div>
            </div>
        {/*<Link className="waves-effect waves-light btn-large">Open existing Form</Link>*/}
        {/*<Link className="waves-effect waves-light btn-large">Export as .xlxs</Link>*/}
    </div>
    )
    }
}

function mapStatetoProps(state){
    return {auth:state.auth}
}
export default connect(mapStatetoProps)(Home);
