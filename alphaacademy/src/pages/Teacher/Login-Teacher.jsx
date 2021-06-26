
import React , { Component } from "react";
import fire from "../../firebase";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './../../styles/login.css';


class LoginTeacher extends Component{
    constructor(props)
    {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email : "",
            password : ""
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
            alert("Enter Valid Details")
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
            alert("Enter valid email")
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render()
    {
        return(
            <>
                <h1 id="name">
                    Alpha Academy
                </h1>
                <div className="form">
                    <h1 id="head">Login as Teacher</h1>
                    <form>
                        <label >Email</label>
                        <br />
                        
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email Address"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />

                        <br />
                        <br />
                        <label >Password</label>
                        <br />
                        <input
                            name="password"
                            type= "password"
                            onChange={this.handleChange}
                            id="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                        />

                        <br />
                        <br />
                        <button onClick={this.login}>Login</button>
                        <button>
                            <Link to="/student-login" exact id="link"> Login as Student </Link>
                        </button>
                        <button onClick={this.signup}>SignUp</button>
                    </form>
                </div>
            </>
        )
    }
}
export default LoginTeacher;