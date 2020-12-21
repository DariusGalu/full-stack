import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Form from './form';
import Login from './login';
import Logout from './logout'
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">
   <ul>
     <li><Link to= "/form">Form</Link> </li>
     <li><Link to= "/login">Login</Link></li>
     <li><Link to= "/logout">Logout</Link></li>
     <li><Link to= "/home">Home</Link> </li>

   </ul>
   </div>
   <Route path = "/" exact component={Home}></Route>
   <Route path = "/form" component={Form}></Route>
   <Route path = "/login" component={Login}></Route>
   <Route path = "/logout" component={Logout}></Route>
    
    </Router>
  );
}

export default App;

