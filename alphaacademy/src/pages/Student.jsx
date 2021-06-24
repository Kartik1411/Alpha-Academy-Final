import React, { Component } from 'react';

import fire from '../firebase'
import LoginStudent from './Login-Student';
import HomeStudent from './Home-Student';

class Student extends Component{
	constructor(props)
	{
		super(props);
		this.state={
		user : {}
		}
	}
	componentDidMount()
	{
		this.authListener();
	}
	authListener(){
		fire.auth().onAuthStateChanged((user)=>{
		if(user)
		{
			this.setState({user})
		}
		else{
			this.setState({user : null})
		}
		})
	}

	render(){
		return (
		<div className="App">
			{this.state.user ? (<HomeStudent/>) : (<LoginStudent/>)}
		</div>
		);
	}
}

export default Student;