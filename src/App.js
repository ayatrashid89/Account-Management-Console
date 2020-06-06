import React,{Component} from 'react';
import User from './Component/user';
import {Users} from './users/userArray';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class  App extends Component {
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
    <div className="App">
       <User users={this.state.Users} modify= {this.modifyState.bind(this)}/>
     
    </div>
  );
}
}

export default App;
