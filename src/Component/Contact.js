import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";

function Contact(props) {
	return (
		<div className='container'>
			<Jumbotron fluid>
				<h1>Contact Component</h1>
			</Jumbotron>
			<Link to='./'>Back to home</Link>
		</div>
	);
}

export default Contact;
