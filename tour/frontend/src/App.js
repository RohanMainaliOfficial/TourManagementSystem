import React from 'react';
import './App.css';

class App extends React.Component{
    render(){
    return(
      <div className="container">
        <div id="task-container">
           <div id="form-wrapper">

           <form id="form">
           <div className="flex-wrapper">

                <div style={{flex:6}}>
                <input className="form-control" id="title" type="text" ></input>

                </div>



                <div style={{flex:1}}>
                <input className="btn btn-warning" id="submit" type="submit" ></input>
                </div>
           </div>
           </form>
            </div>

        </div>

        </div>
    )
    }
}

export default App;
