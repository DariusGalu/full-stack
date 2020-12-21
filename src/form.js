import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './form.css';    

function Form(props) {
    const isLoggedIn = localStorage.getItem('is_logged_in');
    if (!isLoggedIn) {
        props.history.push('/login');
    }
    console.log(typeof isLoggedIn);
    console.log(props);
    console.log(!isLoggedIn)

    const [newEmail, setNewEmail] = useState([]);
    const [date, setDate] = useState(null);

    const onCreate = () => {

        setLocalStorageValue('email', newEmail)
        setLocalStorageValue('date', date)
    };

    const setLocalStorageValue = (name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
    }


    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Form</h5>
                        <form class="form-signin">
                        <div class="form-label-group">
                        <input  value={newEmail} onChange={e => 
                            {setNewEmail(e.target.value)
                            }} 
                            type="email"/>
                            <label for="inputEmail">Email address</label>
                        </div>
                        <div class="form-label-group">
                        <input  value={date} onChange={e => 
                            {setDate(e.target.value)
                            }} 
                            type="date"/>
                            <label for="inputEmail">Date of Birth</label>
                        </div>
                        <Link class="btn btn-lg btn-primary btn-block text-uppercase" style={{textDecoration:'none'}} onClick={onCreate} to= "/home">Submit</Link>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;



