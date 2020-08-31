import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import AddUser from "./AddUser";
import { connect } from "react-redux";
import { deleteUser, fetchUsers } from "../actions/userActions";
import { Link } from "react-router-dom";
import "../App.css";
import { Spring } from "react-spring/renderprops";

class user extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		const userArr = this.props.Users.map((user) => (
			<div className=' card col-lg-5 m-4 ' key={user.id}>
				<h2>{user.first_name}</h2>

				<h3>{user.email}</h3>
				<Button variant='primary' onClick={() => this.props.deleteUser(user.email)}>
					Delete
				</Button>
			</div>
		));

		return (
			<div>
				<Jumbotron fluid className='header'>
					<Spring
						from={{ opacity: 0, marginTop: 100 }}
						to={{ opacity: 3, marginTop: 10 }}
						config={{ duration: 1000, delay: 10 }}>
						{(props) => <h1 style={props}> Using Redux, RESTful API & React-Spring </h1>}
					</Spring>
				</Jumbotron>
				<div className='container'>
					<div className='row'>
						<AddUser />
					</div>
					<div className='row justify-content-center'>{userArr}</div>
				</div>
				<Link to='./contact'>contact</Link>
				<Link to='./about'>about</Link>
			</div>
		);
	}
}
//make redux state available to the props
const mapStateToProps = (state) => ({
	Users: state.rootUsers.reducerUsers,
});

export default connect(mapStateToProps, { deleteUser, fetchUsers })(user);
