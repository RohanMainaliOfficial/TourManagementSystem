import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './components/Style.css';
import AddForm from './components/AddForm';
import Navbarcomp from './components/Navbarcomp';
import Update from './components/Update';
import Package_detail from './components/Package-detail';
import Login from "./admin_login/login";
import ProtectedRoute from './components/ProtectedRoute';


ReactDOM.render(
  <React.StrictMode>



        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/home" element=<ProtectedRoute element={<Navbarcomp/>} />  />
                    <Route path="/add" element=<ProtectedRoute element={<AddForm/>} />  />
                    <Route path="/update" element=<ProtectedRoute element={<Update/>} />  />
                    <Route path="/package_details" element=<ProtectedRoute element={<Package_detail/>} />  />
                </Routes>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();