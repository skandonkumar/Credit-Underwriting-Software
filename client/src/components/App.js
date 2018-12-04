import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import InfoPage from './InfoPage';
import Home from './forms/Home';
import Financials from './forms/Financials'
import FormNew from "./forms/FormNew";
import '../helpers/login.scss'
const Footer= () => <footer>
    <div className="footer-main">
        <div className="row">
            <div className="col s3 m3">
                <span className="footer-copyright">© 2018 Elevate Export Finance Corp.</span>
            </div>
            <div className="col s3 m3">
                <span className="phone">Phone: (833) 203-4426</span>
            </div>
            <div className="col s3 m3">
                <span className="phone">Email: info@elevatefinance.ca</span>
            </div>
            <div className="col s3 m3">
                    <span className="social-sites">
                        <a id="twitter-logo" href="https://twitter.com/ElevateExport"><img src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_30,h_30,al_c,q_80,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp" alt="No Logo"/></a>
                        <a id="linkedin-logo" href="https://www.linkedin.com/company/elevate-export-finance-corp/"><img src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_30,h_30,al_c,q_80,usm_0.66_1.00_0.01/6ea5b4a88f0b4f91945b40499aa0af00.webp" alt="No Logo"/></a>
                    </span>
            </div>
        </div>
    </div>
</footer>
const Ratios = () =><h2>Ratios</h2>
const Summary = () =><h2>Summary</h2>


class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
                <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <Route exact path="/" component={InfoPage} />
                        <Route exact path="/home" component={Home}/>
                        <Route path="/form/new" component={FormNew}/>
                        <Footer/>
                    </div>
                </BrowserRouter>
        )
    }
}

export default connect(null,actions)(App); //The frst parameter of connect is mapStatetoProps and second argument is action creators
                                           //The action creators are connected as props to App component

