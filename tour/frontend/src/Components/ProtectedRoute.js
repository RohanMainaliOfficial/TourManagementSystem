import React from 'react'
import {Routes ,Route, Navigate,Link} from 'react-router-dom'
import auth from './Login'
import Navbarcomp from './Navbarcomp'
import AddForm from './AddForm';
import Update from './Update';

function ProtectedRoute({element:Component,...rest}){



    if(localStorage.getItem("login")==="true"){

if(Component.type.name==="Navbarcomp"){

return <Navbarcomp/>
localStorage.clear();
}
else if(Component.type.name==="Addform"){
return <AddForm/>
}
else if(Component.type.name==="Update"){
return <Update/>

    }
    }
else{
   return <Navigate to="/"  />
}

}
;export default ProtectedRoute;