import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from './useForm';
import '../App.css';
import Memohook from './Memo';



function Hooks() {
    //Basic useState
    const [sample, setSample] = useState("With the basic useState");
    const [value, handleChange] = useForm({
        name: "",
        email: "",

    });

    useEffect(() => {
        console.log("Hey I load first");
    }, [value.name]    //render only when name is changed
    );



    const inputRef = useRef();
    const accessRef = () => {
        console.log(inputRef);
    }

    const reset = () => {
        setSample("");
    }

    console.log("Parent");

    {
        return (
            <div>

                <h1>Hooks.....!</h1>


                <h2>1. Check Console for useEffect Hook!</h2>

                <h2>2. a). Basic useState Reset</h2>
                <p>Try: {sample}</p>
                <Button onClick={reset}>Reset</Button>

                <h2> 2. b)Multiple useState for Forms:</h2> <br></br><br></br>
                
                <form>
                <div className="row g-3 align-items-center">
                    <label>Name</label>
                    <input type="text" name="name" className='form-control' value={value.name} onChange={handleChange} />
                    <br></br><br></br>
                    <label>Email</label>
                    <input type="text" name="email" value={value.email} onChange={handleChange} />
                    </div>
                </form>
                <Memohook />
             



                <h2>3. Memo Hook</h2>
                <p>Used to avoid render of Child Component(counter here) whenever there's a change in the Parent component(Hook inputs)</p>




                <h2>4. useRef</h2>
                <p>It is used to get the current reference of the tag where in its used, on clicking the button, it gives the input tyoe.</p>
                <input type="text" ref={inputRef}>
                </input>
                <Button onClick={accessRef}>check useRef</Button>










            </div>
        );

    }
}
export default Hooks;
