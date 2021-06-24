import React from 'react'

import Teacher from './pages/Teacher'
import Student from './pages/Student'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Teacher} />
					<Route path="/student-login" exact component={Student} />
					{/* <Route path="*" exact component={PageNotFound} /> */}
				</Switch>
			</Router>
		</div>
	)
}

export default App
