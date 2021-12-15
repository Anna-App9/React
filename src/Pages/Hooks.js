import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from './useForm';
import '../App.css';



function Hooks(){
       //Basic useState
       const [sample,setSample] = useState("With the basic useState");
       const [value,handleChange] = useForm({
           name:"",
           email:"",
   
       });

    useEffect(()=>{
        console.log("Hey I load first");
    },[value.name]    //render only when name is changed
    );
    


    

    const reset=()=>{
        setSample("");
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
                 <p>Try: {sample}</p>
                 <Button onClick={reset}>Reset</Button>
             </li>
             <li>
                 Multiple useState for Forms: <br></br><br></br>
                 <label>Name</label>
                 <input type="text" name="name" value={value.name} onChange={handleChange}/>
                 <br></br><br></br>
                 <label>Email</label>
                 <input type="text" name="email" value={value.email} onChange={handleChange}/>

    
             </li>
         </ul>
         

         </div>
    );
    
}
}
export default Hooks;
