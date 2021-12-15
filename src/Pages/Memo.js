import React, {useState, memo} from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';



const Memohook =()=>
{

   const [count,setCount]=useState(0);
   const addCount=()=>{
       setCount(count+1);

   }
   console.log("Counter", count);


    return(
        <>
         <h3>Welcome To Child of MemoHook!</h3>
         <h3>Counter</h3>
         {count}
         <Button onClick={addCount}>Increment</Button>

         </>
    );
}
export default memo(Memohook);


