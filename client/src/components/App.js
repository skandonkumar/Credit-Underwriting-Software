import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import InfoPage from './InfoPage';
import Home from './forms/Home';
import UpdateForm from "./forms/UpdateForm";
import ExportForm from "./forms/ExportXlxs";
import FormNew from "./forms/FormNew";
import Footer from './Footer'

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
                <BrowserRouter>
                    <div className="container-fluid">
                        <Header/>
                        <Route exact path="/" component={InfoPage} />
                        <Route exact path="/home" component={Home}/>
                        <Route path="/form/new" component={FormNew}/>
                        <Route path ="/form/update" component={UpdateForm} />
                        <Route path ="/form/export" component={ExportForm} />
                        <Footer/>
                    </div>
                </BrowserRouter>
        )
    }
}

export default connect(null,actions)(App); //The first parameter of connect is mapStatetoProps and second argument is action creators
                                           //The action creators are connected as props to App component

