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
import Hooks from './Pages/Hooks';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
     <Router>
   <div className="container-fluid">
    <div className="row flex-nowrap">

    
    <Sidebar/>
    <div className="col py-3">
   
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/funct' element={<Welcome/>}/>
      <Route exact path='/pure' element={<Pure/>}/>
      <Route exact path='/props' element={<Propstate city="Noida"/>}/>
      <Route exact path='/hooks' element={<Hooks/>}/>
    </Routes>

        </div>
</div>
</div>
</Router>
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
