import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import AddUser from "./AddUser";
import {connect} from 'react-redux';
import {deleteUser} from '../actions/userActions';
import { Link } from "react-router-dom";
import "../App.css";

class user extends Component {
	render() {
		const userArr = this.props.Users.map((user) => (
			
				<div className=" card col-12 col-lg-6 mt-3 p-2 " key={user.id}>
					    <h2>{user.userName}</h2>
					<Button variant='primary' onClick={() => this.props.deleteUser(user.id)}>
						Delete
					</Button>
				</div>
		)
		);

		return (
			<div>
				<Jumbotron fluid>
					<h1>Hello Users</h1>
				</Jumbotron>
				<div className='container'>
					<div className="row">
						{userArr}
					</div>
					<div className="row">
						<AddUser/>
					</div> 
				</div>
				<Link to='./contact'>contact</Link>
				<Link to='./about'>about</Link>
			</div>
		);
	}
}
//make redux state available to the props
const mapStateToProps = (state) => ({
	Users: state.rootUsers.reducerUsers
})

export default connect(mapStateToProps, {deleteUser})(user);
