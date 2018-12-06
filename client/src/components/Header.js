import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import '../helpers/styles.scss'


class Header extends Component {
    renderContent(){
        switch (this.props.auth) {
            case null:
                return
            case false:
                return(
                    <span><a href="/auth/google">Login with Google</a> </span>
                )
            default:
                return(
                    <span><a href="/api/logout">Logout</a></span>
                )
        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <div className="logo-wrapper">
                        <img src="https://static.wixstatic.com/media/84b1a5_a00c60e9ae934100a65a81d71a7b11a3~mv2.png/v1/fill/w_78,h_52,al_c,q_80,usm_0.66_1.00_0.01/84b1a5_a00c60e9ae934100a65a81d71a7b11a3~mv2.webp" alt="No Logo"/>
                    </div>
                    <div className="title-wrapper">
                        <Link to={this.props.auth ? '/home' : '/'} className="left brand-logo">
                            Credit Underwriting Web Application
                        </Link>
                    </div>
                    <div className="right">
                        {this.renderContent()}
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStatetoProps(state){
    return {auth:state.auth}
}
export default connect(mapStatetoProps)(Header);