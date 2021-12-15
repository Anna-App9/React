import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Components/Sidebar';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './Pages/Functional';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Pure from './Pages/Pure';
import Propstate from './Pages/Propstate';

ReactDOM.render(
  <React.StrictMode>,
    <Sidebar/>
    <Router>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/funct' element={<Welcome/>}/>
      <Route exact path='/pure' element={<Pure/>}/>
      <Route exact path='/props' element={<Propstate city="Noida"/>}/>
    </Routes>
</Router>
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
