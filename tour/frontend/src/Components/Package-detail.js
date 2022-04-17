import React from 'react';
import {useLocation} from 'react-router-dom';
import {package_item} from './Navbarcomp';
import './ViewPackage.css';

function Package_detail(){

const location=useLocation();
const {item}=location.state

return(

<>
    <div class="package_details_container">
        <div className="package_details_left">
        <img src={"http://127.0.0.1:8000"+item.image }className="package-img"/>
        </div>
        <div className="package_details_right">
        <div className="details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h5>{"Price "+item.price}</h5>
        <h5>{"Seats "+item.seat}</h5>
        <h5>{"Category "+item.category}</h5>
        <h5>{"id "+item.id}</h5>
        </div>


        </div>
    </div>
</>

);

}
export default Package_detail;
