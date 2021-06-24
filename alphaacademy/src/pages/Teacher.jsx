import React, { Component } from 'react';

import fire from '../firebase'
import LoginTeacher from './Login-Teacher';
import HomeTeacher from './Home-Teacher';

class Teacher extends Component{
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
			{this.state.user ? (<HomeTeacher/>) : (<LoginTeacher/>)}
		</div>
		);
	}
}

export default Teacher;