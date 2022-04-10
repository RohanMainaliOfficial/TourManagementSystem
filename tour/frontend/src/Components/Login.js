import React from 'react';
import {useState} from 'react';
import { Component } from "react";
import {Link,Routes,Route} from 'react-router-dom';
import Protected from './Protected';



export default class Login extends Component{


   constructor(props){
   localStorage.clear();

    super(props);
    this.state={
        authenticated: false,
       activeItem:{
        username:'',
        password: '',
       },

    };
    }




isAuth(){
this.setState({authenticated:true,});
localStorage.setItem('check',true);
}
onClick(){
console.log("hello");
return "hello";
}

render(){
    var activeItem=this.state.activeItem;
    var authenticated=this.state.authenticated;
    var self=this;

return(
    <div>
    <form >
    <input type="text" method="POST" name="username" onChange={(event)=>{
    activeItem.username=event.target.value;
    }} />
    <input type="password" method="POST" name="password" onChange={(event)=>{
    activeItem.password=event.target.value;
    }} />

    </form>
        <button type="Submit" onClick={()=>{
        if(activeItem.username==="admin" && activeItem.password=== "admin"){
        self.isAuth();
        console.log("hello");
        window.location.replace("http://localhost:3000/admin");

        }
        }}>Login</button>

</div>

);
}
}