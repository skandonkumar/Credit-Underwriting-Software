import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header'
import Login from './login'
const Footer= () =><h2>Footer</h2>
const Dashboard = () =><h2>Dashboard</h2>
const Financials = () =><h2>Financials</h2>
const Ratios = () =><h2>Ratios</h2>
const Summary = () =><h2>Summary</h2>
const InfoPage = () => <h2>Information Page</h2>


class App extends Component{
    // componentDidMount(){
    //     this.props.fetchUser();
    // }

    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={InfoPage} />
                        <Route path="/login" component={Login}/>
                        <Route exact path="/home" component={Dashboard}/>
                        <Route exact path="/form/Financials" component={Financials}/>
                        <Route exact path="/form/Financials/Ratios" component={Ratios}/>
                        <Route exact path="/form/Financials/Ratios/Summary" component={Summary}/>

                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null,actions)(App); //The frst parameter of connect is mapStatetoProps and second argument is action creators
                                           //The action creators are connected as props to App component

