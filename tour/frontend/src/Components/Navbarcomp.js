import React, { Component } from "react";
import {useState} from "react";


import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import './Style.css';
import { Button, CardGroup, Container, Row } from "react-bootstrap";
import AddForm from './AddForm';
import Dialogue from './Dialogue';
import Update from './Update';
import {Link} from 'react-router-dom';
import {Modal} from 'react-modal';
import { Card, Col } from "react-bootstrap";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Tooltip } from "@mui/material";



export default class Navbarcomp extends Component {



    constructor(props){
    super(props);
    this.state={
          packages:[],

       activeItem:{
        message:"",
        isLoading:false,
        id:0,
        check:true,
       },
       editing: false
           }
       this.fetchPackage=this.fetchPackage.bind(this)

    };

    componentWillMount(){
        this.fetchPackage()

    }
// ----------------------feting Data from api --------------------------------------------------------------
    fetchPackage(){

        console.log("Fetching....")
        fetch('http://127.0.0.1:8000/api/packages/')
        .then(response=>response.json())
        .then(data=>this.setState({packages:data}))

    }

//    -------------------------------------------------------------------------------
 onClick(){
    <Link to="/update"></Link>
}


//--------------------------Display Confirm Delete message---------------------------------------------------------
handleDelete(id,name){
this.setState({
            activeItem:{
                 message:`Are you sure you want to delete ${name} Package?`,
                 isLoading:true,
                 id:id,
                 check:true,
       }
       })
}

checkOption(check){
check=false;
this.conformDelete(check);

}

//--------------------------------------------------------------------------------------------------------------------

conformDelete(choice){

    if(choice){
    this.setState({
                activeItem:{
                isLoading:false,
                check:true,
                }})
    const url=`http://127.0.0.1:8000/api/delete-package/${this.state.activeItem.id}/`;
           fetch(url,{
        method: 'DELETE',
        })
         .then(response=> response.json())
            .then(data=>console.log(data))
        .catch(error=> console.log(error))
        console.log('submitted');
        this.setState({packages:this.state.packages.map(package_item=>package_item.id!==this.state.activeItem.id)})
        this.fetchPackage();

        window.location.replace("http://localhost:3000/home");

    }
    else{
    console.log("You Clicked No");
    }



      this.setState({
      activeItem:{
      isLoading:false,
      check:true,
        }})


}


  render() {
    var packages=this.state.packages
    var activeItem=this.state.activeItem
    var self=this
    var url='http://127.0.0.1:8000';


    return (
    <>
      <h2 style={{textAlign:'center'}}>Packages</h2>
      <div>

           <div class="card-columns">
            
            {packages.map(function(package_item){
             return(
             <>
             
                <Card   
                text={'dark'} 
                className="m-3"
                style={{height:'18rem', width:'18rem'}}>
                  <Link to= '/package_details' state= {{
                   item:package_item
                   }}>
                  <Card.Img variant="top" src={'http://127.0.0.1:8000'+package_item.image}/>
                    <Card.Title className="title">{package_item.name}</Card.Title>
                    <div>Price: Rs {package_item.price}</div>

                    </Link>

                    <div className="btn-right">
                   <Link to= '/update' state= {{
                   item:package_item
                   }}> 
                   <Button variant="Primary" className="btn-update button" onClick={()=>console.log(package_item.id)}>Update</Button></Link>
                    <Button variant="secondary" className="btn-delete button" onClick={()=>self.handleDelete(package_item.id,package_item.name)}>Delete</Button>
                    </div>
                </Card>
           
           
            {/*<Link to= '/package_details' state= {{
                   item:package_item
                   }}>
              <div className="packages" >
              <h3 className="package-name">{package_item.name + " Tour Package"}</h3>
              <img src={'http://127.0.0.1:8000'+package_item.image} className="package-image"/>
              <h4>{"Rs. "+package_item.price}</h4>


              <div className="btn-right">
                   <Link to= '/update' state= {{
                   item:package_item
                   }}> <button type="submit" className="btn-update button" onClick={()=>console.log(package_item.id)}>Update</button></Link>
                    <button  className="btn-delete button" onClick={()=>self.handleDelete(package_item.id,package_item.name)}>Delete</button>
                    </div>

              </div>
              </Link>*/}



               </>
                  )
                })}
               
           </div>


            {activeItem.isLoading && <Dialogue onDialog={()=>self.conformDelete(activeItem.check)}  onCheck={()=>self.checkOption(activeItem.check)}message={activeItem.message}/>}

      </div>
      <div className="add-icon">
        <Tooltip title = "add new package" arrow placement="left-start">
    <Fab color="primary" aria-label="add">
            <Link to="/add"><AddIcon style={{color:"white"}}/></Link>

            </Fab>
            </Tooltip>
    </div>
      </>
    );
  }
}