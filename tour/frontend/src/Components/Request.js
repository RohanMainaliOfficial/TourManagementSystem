import React, { Component } from "react";
import {Link} from 'react-router-dom';



export default class Request extends Component{


    constructor(props){
    super(props);
    this.state={
          packages:[],
           }
       this.fetchPackage=this.fetchPackage.bind(this)

    };

    componentWillMount(){
        this.fetchPackage()

    }
// ----------------------feting Data from api --------------------------------------------------------------
    fetchPackage(){

        console.log("Fetching....")
        fetch('http://127.0.0.1:8000/api/view-request/')
        .then(response=>response.json())
        .then(data=>this.setState({packages:data}))

    }

    handleDelete(id,name){


    const url=`http://127.0.0.1:8000/api/delete-request/${id}/`;
           fetch(url,{
        method: 'DELETE',
        })
         .then(response=> response.json())
            .then(data=>console.log(data))
        .catch(error=> console.log(error))
        console.log('submitted');
        }




 render() {
    var packages=this.state.packages
    var self=this


    return (
    <>

    <h1 id="add-days-title"> Customer Details </h1>

      <div className="add-days-container">

           <div className="add-days-row">

            {packages.map(function(package_item){
             return(
             <>
             <div className="package_days_list">
                                             <h2>{package_item.name}</h2>

             <Link to= '/add-days-form' state= {{
                   item:package_item
                   }}>
             </Link>

             </div>
             </> )
                })}
             </div>
      </div>
      </>
      )
}
}