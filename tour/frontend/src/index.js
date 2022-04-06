import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

// import AddForm from './Components/AddForm';
// import Navbarcomp from './Components/Navbarcomp';
// import Update from './Components/Update';
import App from './App';

ReactDOM.render(
  <React.StrictMode>



        <BrowserRouter>
                <Routes>
{/* <Route path="/" element={<Navbarcomp/>} />
                    <Route path="/add" element={<AddForm/>} />
                    <Route path="/update" element={<Update/>} /> */}
                    <Route path="/" element={<App/>} />
                    
                </Routes>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
