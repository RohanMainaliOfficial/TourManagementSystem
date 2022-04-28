
import React,{ useState } from 'react';
import {useLocation} from 'react-router-dom';
import {package_item} from './Navbarcomp'
import './form.css'

    let editImage=0;


function Update(){
    const location=useLocation();
    const {item}=location.state
    const[name,setName]=useState(item.name);
    const[image,setImage]=useState();
    const[id,setId]=useState(item.id);
    const[description,setDescription]=useState(item.description);
    const[price,setPrice]=useState(item.price);
    const[category,setCategory]=useState(item.category);
    const[seat,setSeat]=useState(item.seat);
    console.log(item.image)





    const submitHandler=()=>{
    console.log(editImage)
     const uploadData=new FormData();
    uploadData.append('name',name);
    if(editImage>0){
    console.log("check")
        uploadData.append('image',image);
    }
    uploadData.append('id',id);
    uploadData.append('description',description);
    uploadData.append('price',price);
    uploadData.append('seat',seat);
    uploadData.append('category',category);


     const url=`http://127.0.0.1:8000/api/update-package/${id}/`;
       fetch(url,{
    method: 'PATCH',
    body: uploadData
    })
     .then(response=> response.json())
        .then(data=>console.log(data))
    .catch(error=> console.log(error))

    console.log('submitted');
    console.log(image)
window.location.replace("http://localhost:3000/home");
    }




    return(
            <div className="container">
 <form className="form" >
  <label>
    Name:
    <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
  </label>

    <input type="textarea" placeholder="Description" name="description" value={description} onChange={(e)=> setDescription(e.target.value)}/>

      <label>
    Price:
    <input type="number" name="price"  value={price} onChange={(e)=> setPrice(e.target.value)}/>
  </label>

    <label>
    Seats:
    <input type="number" name="seat" value={seat} onChange={(e)=> setSeat(e.target.value)}/>
  </label>
  <label for="category">Category: </label>
<select name="category" id="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
  <option value="Trekking">Trekking</option>
  <option value="Popular">Popular</option>
  <option value="Long">Long Tour</option>
  <option value="Short">Short</option>
</select>

<input type="file"  onChange={(e)=> {
               editImage++;
               setImage(e.target.files[0])

}

}/>


</form>
<button onClick={submitHandler} >Update</button>
            </div>

    );
}

export default Update;