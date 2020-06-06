import React,{Component} from 'react';
import User from './user';
import {Users} from '../users/userArray';
import 'bootstrap/dist/css/bootstrap.min.css';


class  Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Users: Users,
        update: null
    };
    console.log(this.state)

}

   
  modifyState(id) {
    const update = this.state.Users.filter(user => id !== user.id)
     this.setState({
      Users: update

    })
    }

render(){
  return (
    
    <div>
       <User users={this.state.Users} modify= {this.modifyState.bind(this)}/>
     
    </div>
   
   
  );
}
}

export default Main;
