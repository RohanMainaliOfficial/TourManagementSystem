import React, { Component } from "react";
import "./styles.css";
import { Form, Button } from "react-bootstrap";

export default class login extends Component {

  state = {
    Credentials: {username: '', password: ''}
  }

  login = event => {
    console.log(this.state.Credentials);
    fetch('')
  }

  inputChanged = event => {
    const cred = this.state.Credentials;
    cred[event.target.name] = event.target.value;
    this.setState({Credentials: cred});
  }

  render() {
    return (
      <Form>
        <div className="box-mid">
        <h3>Admin Login</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" 
                    placeholder="Username" name="username"
                    value={this.state.Credentials.username}
                    onChange={this.inputChanged}/>
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" 
                    placeholder="Enter password" name="password"
                    value={this.state.Credentials.password}
                    onChange={this.inputChanged}/>
                </div>
                <div className="form-group">
                    
                </div>
                <Button onClick={this.login} className="btn btn-dark btn-block">Login</Button>
        </div>
                
                
            </Form>

    );
  }
}
