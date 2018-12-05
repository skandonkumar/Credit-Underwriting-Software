import React,{Component} from 'react';
import connect from "react-redux/es/connect/connect";

class ExportForm extends Component {
    render() {
        return (
            < div > Hello < /div>
    )
        ;
    }
}
function mapStatetoProps(state){
    return {auth:state.auth}; }

export default connect(mapStatetoProps)(ExportForm);
