import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';



function Hooks(){

    useEffect(()=>{
        console.log("Hey I load first");
    }
    );
    

   //Basic useState
    const [name,setName] = useState("With the basic useState");
    

    const reset=()=>{
        setName("");
    }


{
    return(
        <div>
        
         <h1>Hooks.....!</h1>
         <ul>
             <li>
                 Check Console for useEffect Hook!
             </li>

             <li>
                 Basic useState Reset
                 <p>Try: {name}</p>
                 <Button onClick={reset}>Reset</Button>
             </li>
             <li>
                 Multiple useState for Forms: <br></br><br></br>
                 <label>Name</label>
                 <input type="text"/>
                 <br></br><br></br>
                 <label>Email</label>
                 <input type="text"/>

    
             </li>
         </ul>
         

         </div>
    );
    
}
}
export default Hooks;
