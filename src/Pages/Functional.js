import React from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";


const Welcome=()=>
{
return (
    <h1>Welcome to Functional Component</h1>
    );
}

const functional=()=>{

    return(
        <Welcome/>
    )

}



export default Welcome;