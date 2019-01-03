import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import HomePage from './component/HomePage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './component/NavBar'

ReactDOM.render((
	<Router>
		<React.Fragment>
			<NavBar/>
			<Route exact path="/snacks" component={App}/>
			<Route exact path="/" component={HomePage}/>
		</React.Fragment>
	</Router>), document.getElementById('root'));
