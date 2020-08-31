import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";

class AddUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			id: "",
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.state.userName && this.state.id
			? this.props.addUser({
					first_name: this.state.userName,
					email: this.state.id,
			  })
			: alert("please enter your name and your email");

		this.setState({
			userName: "",
			id: "",
		});
	}

	render() {
		return (
			<form className='container my-3' onSubmit={this.handleSubmit.bind(this)}>
				<div className='row justify-content-center'>
					<div className='form-group'>
						<div className='col align-self-center'>
							<label htmlFor='user name'>Enter your name:</label>
							<input
								type='text'
								className='form-control'
								id=''
								aria-describedby='user name'
								value={this.state.userName}
								name='userName'
								onChange={this.handleChange.bind(this)}
							/>
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='form-group'>
						<div className='col align-self-center'>
							<label htmlFor='id'>Enter your email:</label>
							<input
								type='text'
								className='form-control'
								id=''
								aria-describedby='id'
								value={this.state.id}
								name='id'
								onChange={this.handleChange.bind(this)}
							/>
						</div>
					</div>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		);
	}
}

export default connect(null, { addUser })(AddUser);
