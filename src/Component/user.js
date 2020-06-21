import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import AddUser from "./AddUser";
import { connect } from "react-redux";
import { deleteUser } from "../actions/userActions";
import { Link } from "react-router-dom";
import "../App.css";
import { Spring } from "react-spring/renderprops";

class user extends Component {
	render() {
		const userArr = this.props.Users.map((user) => (
			<div className=' card col-lg-5 m-4 ' key={user.id}>
				<h2>{user.userName}</h2>

				<h3>{user.id / 2}kg </h3>
				<Button variant='primary' onClick={() => this.props.deleteUser(user.id)}>
					Delete
				</Button>
			</div>
		));

		return (
			<div>
				<Jumbotron fluid className='header'>
					<Spring from={{ opacity: 0 }} to={{ opacity: 3 }} config={{ duration: 1000, delay: 100 }}>
						{(props) => <h1 style={props}>Convert your weight from lbs to kg</h1>}
					</Spring>
					<Spring from={{ number: 0 }} to={{ number: 1 }} config={{ duration: 1000, delay: 1200 }}>
						{(props) => <h4>{props.number}</h4>}
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

export default connect(mapStateToProps, { deleteUser })(user);
