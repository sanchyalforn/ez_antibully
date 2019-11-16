import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/login/login';
import { Home } from './components/group-list/group-list';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={ Login } />
				<Route path="/home" exact component={ Home } />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
