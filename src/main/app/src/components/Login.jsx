import React, { Component } from "react";
import ApiService from "../service/ApiService";

class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''
        }
        this.existUser = this.existUser.bind(this);
    }
    
existUser = (e) => {
        e.preventDefault();
        let user = {email: this.state.email, password: this.state.password};
        ApiService.existUser(user)
            .then(res => {
               this.setState({messageFromServer: res.data.Message})
              
               if(res.data.Status == 1){
                this.props.history.push('/recipe');
                }
            })
    }
    
onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
        
render() {
  return (
    <div>
      <h2 >Login</h2>
      
       <div class="container">
       <h3>{this.state.messageFromServer}</h3>
      
       <form>
       
                    
                    <input type="text"  name="email" placeholder="Enter Email" className="form-control" value={this.state.email} onChange={this.onChange}/>
               
                
      
                   
                    <input type="password"  name="password" placeholder="Enter Password" className="form-control" value={this.state.password} onChange={this.onChange}/>
              
                
     
        <button onClick={this.existUser}>Login</button>
        </form>
      </div>
    </div>
  );
}
}
export default Login;
