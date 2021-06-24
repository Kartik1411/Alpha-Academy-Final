import React from 'react';
import '../styles/left.css'
import { Link, BrowserRouter as Router } from 'react-router-dom';

function LeftSideBar () {

    return(
    <section className="left">
        {/* <h2>hello</h2> */}

        <ul>
            <li>
                <Link to="/home" exact className="links"> Home </Link>
            </li>
            <li> 
                <Link to="/physics" exact className="links"> Physics </Link>
            </li>
            <li> 
                <Link to="/maths" exact className="links"> Maths </Link> 
            </li>
        </ul>
    </section>

)
}

export default LeftSideBar;