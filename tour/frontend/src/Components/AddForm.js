import React,{ useState } from 'react';
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>



function Addform(){


    const[name,setName]=useState("");
    const[image,setImage]=useState();
    const[id,setId]=useState();
    const[description,setDescription]=useState("");
    const[price,setPrice]=useState();
    const[category,setCategory]=useState();
    const[seat,setSeat]=useState();


    const newPackage=()=>{
    const uploadData=new FormData();
    uploadData.append('name',name);
    uploadData.append('id',id);
    uploadData.append('description',description);
    uploadData.append('price',price);
    uploadData.append('seat',seat);
    uploadData.append('category',category);
    uploadData.append('image',image);

    fetch('http://127.0.0.1:8000/api/create-package/',{
    method: 'POST',
    body: uploadData
    })
    .then(response=> response.json())
        .then(data=>console.log(data))
    .catch(error=> console.log(error))
window.location.replace("http://localhost:3000/home");
    }




    return(
            <div>
 <form className="form" enctype="multipart/form-data">
  <label>
    Name:
    <input type="text" name="name" value={name}  onChange={(e)=>setName(e.target.value)} />
  </label>
  <label>
    ID:
    <input type="number" name="id" value={id}  onChange={(e)=>setId(e.target.value)}/>
  </label>


    <input type="textarea" placeholder="Description" name="description"
     value={description}  onChange={(e)=>setDescription(e.target.value)}/>

      <label>
    Price:
    <input type="number" name="price" value={price}  onChange={(e)=>setPrice(e.target.value)}/>
  </label>

    <label>
    Seats:
    <input type="number" name="seat" value={seat}  onChange={(e)=>setSeat(e.target.value)}/>
  </label>
  <label for="category">Category: </label>
<select name="category" id="category"  onChange={(e)=>setCategory(e.target.value)}>
  <option value="Trekking">Trekking</option>
  <option value="Popular">Popular</option>
  <option value="Long">Long Tour</option>
  <option value="Short">Short</option>
</select>


  <input type="file" accept="image/*"  onChange={(e)=> setImage(e.target.files[0]) }/>

</form>
<button onClick={()=>newPackage()}>Submit</button>
            </div>

    );
}

export default Addform;