import React,{ useState } from 'react';
import {useLocation} from 'react-router-dom';
import {package_item} from './Navbarcomp'
import './form.css'

    let editImage=0;


function AddDaysForm(){
    const location=useLocation();
    const {item}=location.state
    const arr=[]
    var count=1;
    for(var i=0;i<item.days;i++){
    arr.push(0);
    }

    const increment=()=>{
    console.log(count);

    count++;
        console.log(count);

    }
    return(
    <>
    <h1>{item.name}</h1>
                 <form className="add-description-form">

        {arr.map(function(package_item){
             return(
             <>
             <input type="textarea" className="days-description" placeholder={"Enter day "+ count+" description "}></input>
             {increment()}

             </> )
                })}
                <button className="days-description-submit">Add</button>
                 </form>
    </>

    )


    }
export default AddDaysForm;
