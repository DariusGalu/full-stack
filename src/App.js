import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Form from './form';
import Login from './login';
import Logout from './logout'
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('');

  // useEffect(() => {
  //   setIsLoggedIn(JSON.parse(localStorage.getItem('is_logged_in')))
  //   console.log(JSON.parse(localStorage.getItem('is_logged_in')))
  //   //window.open('/login');
  // },[])
  
  return (
    
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link"  to= "/form">Form</Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link" to= "/login">Login</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to= "/logout">Logout</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to= "/">Home</Link>
          </li>
        </ul>
      </div>
</nav>


   <Route path = "/" exact component={Home}></Route>
   <Route path = "/form" component={Form}></Route>
   <Route path = "/login" component={Login}></Route>
   <Route path = "/logout" component={Logout}></Route>
    </Router>
  );
}

export default App;

