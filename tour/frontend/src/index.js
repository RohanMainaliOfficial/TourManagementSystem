import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import AddForm from './Components/AddForm';
import Navbarcomp from './Components/Navbarcomp';
import Update from './Components/Update';
import Login from './Components/Login';
import Protected from './Components/Protected';

ReactDOM.render(
  <React.StrictMode>



        <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Login/>} />
                    <Route path="/add" element={<AddForm/>} />
                    <Route path="/update" element={<Update/>} />
                    <Route exact path='/admin' element={<Protected/>}>
                        <Route exact path='/admin' element={<Navbarcomp/>}/>
                    </Route>

                </Routes>

        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
