import React, { useState } from "react";
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;

function Addform() {
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [id, setId] = useState();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [seat, setSeat] = useState();

  const newPackage = () => {
    const uploadData = new FormData();
    uploadData.append("name", name);
    uploadData.append("id", id);
    uploadData.append("description", description);
    uploadData.append("price", price);
    uploadData.append("seat", seat);
    uploadData.append("category", category);
    uploadData.append("image", image);

    fetch("http://127.0.0.1:8000/api/create-package/", {
      method: "POST",
      body: uploadData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

      window.location.replace("http://localhost:3000/home");
  };

  return (
    <div>
      <div class="row">
      <h1>New Package</h1>
      </div>
      <form className="form" enctype="multipart/form-data">
        <label>
          Package Name :
          <input
            type="text"
            class="form-control"
            placeholder="Package Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Package ID:
          <input
            type="number"
            class="form-control"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        

        

        <div class="form-group">
          <div class="row-xs-3">
        <label>
          Price:</label>
          <input
            type="number"
            class="form-control"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div class="row-xs-3">
        <label>
          Seats:</label>
          <input
            type="number"
            class="form-control"
            name="seat"
            value={seat}
            onChange={(e) => setSeat(e.target.value)}
          />
        </div>
        </div>

        
        <label for="category">Category: </label>
        <select
        class="custom-select my-1 mr-sm-2"
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option selected>Choose...</option>
          <option value="Trekking">Trekking</option>
          <option value="Popular">Popular</option>
          <option value="Long">Long Tour</option>
          <option value="Short">Short</option>
        </select>

        <label>Description:</label>
        <textarea
          class="form-control"
          placeholder="Description"
          rows="3"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br></br>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </form>
      <div class="row">
      <button 
      type="submit" 
      class = "btn btn-primary mb-2" 
      onClick={() => newPackage()}>Submit</button>
      </div>
    </div>
  );
}

export default Addform;
