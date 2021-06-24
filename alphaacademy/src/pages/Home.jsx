import React from 'react';
import '../styles/home.css'

import icon from "../image/studying.png";

function Home (){
    return(
        <>
            <div className="welcome-message">Welcome to <span className="alpha">&alpha;</span>lpha Academy</div>
            <div className="logoDiv">
                <img src={icon} alt="" className="logo" />
            </div>

            <h2 id="tag-line">Never Give Up, When Alpha Academy is Here</h2>
        </>
    )
}
export default Home; 