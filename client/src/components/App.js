import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import InfoPage from './InfoPage';
import Home from './forms/Home';
import Financials from './forms/Financials'
import FormNew from "./forms/FormNew";
const Footer= () =><footer>Footer</footer>
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

