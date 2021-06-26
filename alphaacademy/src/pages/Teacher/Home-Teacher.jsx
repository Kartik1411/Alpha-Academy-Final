import React , { Component } from "react";
import fire from "./../../firebase";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Header from '../../components/header';
import RightSideBarTeacher from './../../components/rightside-bar-teacher';
import LeftSideBarTeacher from './../../components/leftside-bar-teacher';

import Practice from '../Practice';
import Help from '../Help';
import Physics from './Physics-Teacher';
import Maths from './Maths-Teacher';
import Home from '../Home';
import PageNotFound from '../PageNotFound';

class HomeTeacher extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            
        }
    }
    logout(){
        fire.auth().signOut();
    }
    render()
    {
        return(
            <div>
                {/* <button onClick={this.logout}>Logout</button> */}

                <Header />
                <Router>
                    <LeftSideBarTeacher />
                    <RightSideBarTeacher />

                    <Switch>
                        <Route path="/" exact component={Home} />
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
export default HomeTeacher;