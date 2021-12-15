import React, {memo, useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from './useForm';
import '../App.css';
import Memohook from './Memo';



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

    console.log("Parent");

{
    return(
        <div>
        
         <h1>Hooks.....!</h1>
         <ul>
             <li>
                 <h2>Check Console for useEffect Hook!</h2>
             </li>

             <li>
                 <h2>Basic useState Reset</h2>
                 <p>Try: {sample}</p>
                 <Button onClick={reset}>Reset</Button>
             </li>
             <li>
                 Multiple useState for Forms: <br></br><br></br>
                 <form>
                 <label>Name</label>
                 <input type="text" name="name" value={value.name} onChange={handleChange}/>
                 <br></br><br></br>
                 <label>Email</label>
                 <input type="text" name="email" value={value.email} onChange={handleChange}/>
                 </form>
                 <Memohook/>

   
             </li>
             <li> 
                 <h2>Memo Hook</h2>
                 <p>Used to avoid render of Child Component(counter here) whenever there's a change in the Parent component(Hook inputs)</p>
                 <h3>Counter</h3>
                              
                 </li>
                 
                 

            
         </ul>
         

         </div>
    );
    
}
}
export default Hooks;
