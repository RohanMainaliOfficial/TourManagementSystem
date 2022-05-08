import React ,{useState} from 'react';
import {useLocation} from 'react-router-dom';
import {package_item} from './Navbarcomp'
import './Booking.css';
import Navbar from './Navbar'
var today=new Date();

function Booking_info(){





const location=useLocation();
console.log(location);
localStorage.removeItem("name");


  const [package_id, setId] = useState(location.state.Data.id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [phoneOne, setPhoneOne] = useState();
  const [phoneTwo, setPhoneTwo] = useState();
  const [date, setDate] = useState();
  const [peopleNumber, setPeopleNumber] = useState();
  const [otherInfo, setOtherInfo] = useState();
  const [status, setStatus] = useState("pending");
  var newSeat="";

  const updateSeat=()=>{
  console.log(newSeat)
  console.log("update")
        const seatData=new FormData();
      seatData.append("seat",newSeat)


      const url=`http://127.0.0.1:8000/api/update-package/${package_id}/`

    fetch(url,
    {
    method: 'PATCH',
    body: seatData
    }).then(response=> response.json())
        .then(data=>console.log(data))
    .catch(error=> console.log(error))
  }


  const handleChange=(event)=>{
  console.log("laksjdf")
  setPeopleNumber(event.target.value)
 }




const handleSubmit=()=>{


    console.log("submit");
    newSeat=location.state.Data.seat-peopleNumber;
    console.log("test"+newSeat);



    const uploadData = new FormData();
    uploadData.append("name", name);
    uploadData.append("package_id", package_id);
    uploadData.append("email", email);
    uploadData.append("phoneOne", phoneOne);
    uploadData.append("phoneTwo", phoneTwo);
    uploadData.append("date", date);
    uploadData.append("peopleNumber", peopleNumber);
    uploadData.append("otherInfo",otherInfo);
    uploadData.append("status",status);


     fetch("http://127.0.0.1:8000", {
      method: "GET",
    })

    fetch("http://127.0.0.1:8000/api/create-request/", {
      method: "POST",
      body: uploadData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));


setTimeout(() => {
  {updateSeat()};
    console.log('This will run after 1 second!')
  }, 1000);



  };



return(

<>

    <Navbar/>
<div className="Booking_Form" id="Booking_Form">
    <div className="personal_info">
        <div >        <h1 className='packageName'>{location.state.Data.name+" Tour Package"}</h1></div>

        <div>
        <label>Full Name</label>
       <input type="text" id="name"  className="a" placeholder="Your full name"  required pattern="[A-Za-z]*"
        onChange={(e)=>setName(e.target.value)}
       ></input>
       </div>
        <div>
        <label>Email</label>
        <input type="email" id="email" className="a" placeholder="a@gmailcom" pattern=".+@gmail.com"required
         onChange={(e)=>setEmail(e.target.value)}
        ></input>
        <span></span>
        </div>
        <section className='Contact'>
            <div>
        <label>Phone</label>
        <input type="text" id="phone" placeholder="9524217638" min="0"className="a" pattern="[9]+[0-9]*" required
         onChange={(e)=>setPhoneOne(e.target.value)}
        ></input>
      </div>
      <div className='secondary_number'>
        <label>Secondary Number  </label>
        <input type="text" id="secondary_Phone" placeholder="9524217638"  min="0"className="a" required pattern="[0-9]{10}"
         onChange={(e)=>setPhoneTwo(e.target.value)}
        ></input>

        </div>
        </section>
    </div>
    <div className="Booking_details">
        <div className="Depature_Date">
            <label>Depature Date</label>
            <input type="date"className="a"  min={today} max="2027-05-30" name="depature_date"
             onChange={(e)=>setDate(e.target.value)}
            ></input>

        </div>
        <div className="number">
            <label>Number of people</label>
            <input type="number" min="1" max={location.state.Data.seat} placeholder="Number Of People" className="a"required
             onChange={handleChange}
            ></input>

        </div>

    </div>
    <div className='otherinfo_book'>
    <div className="Other_info">
        <label>Other information</label>
        <textarea rows="4" cols="19"
         onChange={(e)=>setOtherInfo(e.target.value)}
        ></textarea>
    </div>

    </div>
</div>
<div>
      <button onClick={() => handleSubmit()}>Book</button>
    </div>




</>

);

}
export default Booking_info;