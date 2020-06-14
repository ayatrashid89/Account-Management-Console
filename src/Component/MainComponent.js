import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./user";
import { Users } from "../utilities/UserArray";
import About from "./About";
import Contact from "./Contact";
import { Switch, Route, Redirect, Link } from "react-router-dom";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Users: Users,
			update: null,
		};
		console.log(this.state);
	}

	modifyState(id) {
		const update = this.state.Users.filter((user) => id !== user.id);
		this.setState({
			Users: update,
		});
	}


	addUsers(userData){
        this.setState({
			Users: [...this.state.Users, userData]
		})

	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' render={() => <User users={this.state.Users} modify={this.modifyState.bind(this)}  add={this.addUsers.bind(this)} />} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default Main;
