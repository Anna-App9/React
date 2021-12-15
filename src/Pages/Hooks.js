import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';



function Hooks(){

 
    const [name,setName] = useState("With the useState");
    

    const reset=()=>{
        setName("");
    }


{
    return(
        <div>
        
         <h1>Hooks.....!</h1>
         <p>Hi { name } </p>
         <Button onClick={reset}>Reset</Button>
         </div>
    );
    
}
}
export default Hooks;
