import React from 'react';
import { Link } from 'react-router-dom';


function Login(props) {
    console.log(props);

    const onCreate = () => {
        localStorage.setItem('is_logged_in', "true");
        props.history.push('/form')
    };

  
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Log Page</h5>
                        <form class="form-signin">
                        <Link class="btn btn-lg btn-primary btn-block text-uppercase" style={{textDecoration:'none'}} onClick={onCreate}>Log In</Link>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;
