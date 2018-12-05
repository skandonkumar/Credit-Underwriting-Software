import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import InfoPage from "../InfoPage";
import {Redirect} from 'react-router-dom';

class Home extends Component{

    render(){
        return(
            <div>
            <Link to = '/form/new' className="waves-effect waves-light btn-large">Create New Form</Link>
        <Link to = '/form/update' className= "waves-effect waves-light btn-large"> Update Form </Link>
        <Link to = '/form/export' className= "waves-effect waves-light btn-large"> Export as XLXS </Link>
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
