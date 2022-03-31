
import React,{ useState } from 'react';
import './form.css'



function Update(){



    return(
            <div className="container">
 <form className="form">
  <label>
    Name:
    <input type="text" name="name"  />
  </label>
  <label>
    ID:
    <input type="number" name="id"  />
  </label>


    <input type="textarea" placeholder="Description" name="description" />

      <label>
    Price:
    <input type="number" name="price"  />
  </label>

    <label>
    Seats:
    <input type="number" name="seat"  />
  </label>
  <label for="category">Category: </label>
<select name="category" id="category"  >
  <option value="Trekking">Trekking</option>
  <option value="Popular">Popular</option>
  <option value="Long">Long Tour</option>
  <option value="Short">Short</option>
</select>


  <input type="file" accept="image/*"/>

</form>
<button >Update</button>
            </div>

    );
}

export default Update;