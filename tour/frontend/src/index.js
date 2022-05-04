import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Link,Navigate,Route,Routes} from 'react-router-dom';
import './Components/Style.css';
import AddForm from './Components/AddForm';
import Navbarcomp from './Components/Navbarcomp';
import Update from './Components/Update';
import Package_detail from './Components/Package-detail';
import Login from "./admin_login/login";
import ProtectedRoute from './Components/ProtectedRoute';
import  Booking_info from './Components/Book';

ReactDOM.render(
  <React.StrictMode>



        <BrowserRouter>
                <Routes>
                   <Route path="/" element={ <Navigate to="/login" />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/home" element=< ProtectedRoute element={<Navbarcomp/>} />  />
                    <Route path="/add" element=< ProtectedRoute element={<AddForm/>} />  />
                    <Route path="/update" element=< ProtectedRoute element={<Update/>} />  />
                    <Route path="/package_details" element=< ProtectedRoute element={<Package_detail/>} />  />
                    <Route path="/book" element={<Booking_info/>} />
                </Routes>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();