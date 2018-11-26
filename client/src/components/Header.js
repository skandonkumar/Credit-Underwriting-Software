import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <nav>
               <div className="nav-wrapper">
                   <a className="left brand-logo">
                       Feedback Service Web Application
                   </a>
                   <ul className="right">
                       <li>
                           <Link to="/login">Register/Login</Link>
                       </li>
                   </ul>
               </div>
            </nav>
        );
    }
}

export default Header;