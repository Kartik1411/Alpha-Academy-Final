import React, {Component} from 'react';
import '../styles/right.css';
import { Link } from 'react-router-dom';
import fire from "../firebase";

class RightSideBar extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            
        }
    }
    logout(){
        fire.auth().signOut();
    }

    render(){
        return(
        <section className="right">
            <ul>
                <li> 
                    <Link to="/practice" exact className="links"> Practice </Link>
                </li>
                <li> 
                    <Link to="/help" exact className="links"> Help </Link> 
                </li>
            </ul>

            <button id="btn" onClick={this.logout}>Logout</button>
        </section>
        )
    }
}

export default RightSideBar;