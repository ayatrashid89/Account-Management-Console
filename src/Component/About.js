import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Link} from  'react-router-dom';

function About(props) {
    return (
        <div className="container">
             <Jumbotron fluid>
                     <h1>About Component</h1>
                </Jumbotron>
             <Link to='./'>Back to home</Link>
        </div>
    );
}

export default About;   