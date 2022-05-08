

import React ,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


function AddDiscount(){

    const[id,setId]=useState();
    const[discount,setDiscount]=useState();

      const giveDiscount=()=>{
      const discountData=new FormData();
      discountData.append("discount",discount)
      const url=`http://127.0.0.1:8000/api/update-package/${id}/`

    fetch(url,
    {
    method: 'PATCH',
    body: discountData
    }).then(response=> response.json())
        .then(data=>console.log(data))
    .catch(error=> console.log(error))
  }




return(

    <>
    <div className="addDiscountContainer">
    <form>
    <input type="number" placeholder="Enter package id" value={id} onChange={(e)=>setId(e.target.value)}></input>
    <input type="number" placeholder="Enter Discount in %" value={discount}onChange={(e)=>setDiscount(e.target.value)}></input>
    </form>
    <button className="discountSubmit" onClick={giveDiscount()}>Apply</button>

    </div>

    </>

)


}
export default AddDiscount;