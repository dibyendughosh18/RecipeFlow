import React, { Component } from "react";
import ApiService from "../service/ApiService";
import "../App.css";


class Register extends Component{

    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            confirmPassword: ''
        }
        this.saveUser = this.saveUser.bind(this);
    }

 saveUser = (e) => {
        e.preventDefault();
        let user = {email: this.state.email, password: this.state.password, confirmPassword: this.state.confirmPassword};
        ApiService.addUser(user)
            .then(res => {
                 this.setState({messageFromServer: res.data.Message})
              
               if(res.data.Status == 1){
                this.props.history.push('/login');
                }
            });
    }
    
onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
        
render() {
  return (
    <div>
      <h2 >Register</h2>
      
      <div class="container">
      <h3>{this.state.messageFromServer}</h3>
       <form>
      
                   
                    <input type="text"  name="email" placeholder="Enter Email" className="form-control" value={this.state.email} onChange={this.onChange}/>
             
                
     
                    
                    <input type="password"  name="password" placeholder="Enter Password" className="form-control" value={this.state.password} onChange={this.onChange}/>
              
                
       
                   
                    <input type="password"  name="confirmPassword" placeholder="Enter Confirm Password" className="form-control" value={this.state.confirmPassword} onChange={this.onChange}/>
               
     
        <button onClick={this.saveUser}>Register</button>
        </form>
        </div>
      
    </div>
  );
}
}
export default Register;
