import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props){
        super(props);
        this.state={
            userName: "",
            id:"",
        }

    }

    handleChange(e){
      this.setState({
          [e.target.name]: e.target.value
      });

    }
    handleSubmit(e){
        e.preventDefault();
        this.props.add({
            userName:this.state.userName,
            id:this.state.id,

        })

        this.setState({
            userName: "",
            id:"",
        })

    }

    render() {
        return (
            <form className="container my-3" onSubmit={this.handleSubmit.bind(this)}>
                <div className ="form-group">
                    <label htmlFor="user name">User Name</label>
                    <input type="text" className="form-control" id="" aria-describedby="user name"
                     value={this.state.userName} 
                     name="userName"
                     onChange={this.handleChange.bind(this)} />
                    </div>
                <div className="form-group">
                    <label htmlFor="id">Id</label>
                    <input type="text" className="form-control" id="" aria-describedby="id" 
                    value={this.state.id} 
                    name="id"
                    onChange={this.handleChange.bind(this)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
           </form>
        );
    }
}

export default AddUser;