import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./user";
import { Users } from "../utilities/UserArray";
import About from "./About";
import Contact from "./Contact";
import {Provider} from 'react-redux';
import store from '../store';
import { Switch, Route} from "react-router-dom";

class Main extends Component {
	

   render() {
		return (
			<Provider store={store}>
			<div>
				<Switch>
					<Route exact path='/' render={() => <User/>} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
			</div>
			</Provider>
		);
	}
}

export default Main;
