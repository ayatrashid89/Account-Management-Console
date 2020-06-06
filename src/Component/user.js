import React, { Component } from 'react';
//import {Container,Row,Col,Button} from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../App.css';



class user extends Component {
    
    render() {
        const userArr = this.props.users.map(user => {
            return (
                    <span className="block-example border border-primary" key={user.id}>
                            <Col  className="col" >
                                <h2>{user.name}</h2>
                                <Button variant="primary" onClick={() => this.props.modify(user.id)}>Delete</Button>
                            </Col>
                    </span>
             
            );
        });

        return (

            <div>
                <Jumbotron fluid>
                     <h1>Hello Users</h1>
                </Jumbotron>
                <div className="container">
                    <Container>
                        <Row>
                        {userArr}
                        </Row> 
                    </Container>
                </div>
         </div>
        );
        
    }
}

export default user;