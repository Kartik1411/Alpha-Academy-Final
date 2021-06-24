import React , { Component } from "react";
import fire from "../firebase";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Header from './../components/header';
import RightSideBar from './../components/rightside-bar';
import LeftSideBar from './../components/leftside-bar';

import Practice from './Practice';
import Help from './Help';
import Physics from './Physics';
import Maths from './Maths';
import Home from './Home';
import PageNotFound from './PageNotFound';

class HomeStudent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            
        }
    }
    
    render()
    {
        return(
            <div>
                {/* <button onClick={this.logout}>Logout</button> */}

                <Header />
                <Router>
                    <LeftSideBar />
                    <RightSideBar />

                    <Switch>
                        <Route path="/student-login" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/physics" exact component={Physics} />
                        <Route path="/maths" exact component={Maths} />
                        <Route path="/practice" exact component={Practice} />
                        <Route path="/help" exact component={Help} />
                        <Route path="*" exact component={PageNotFound} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default HomeStudent;