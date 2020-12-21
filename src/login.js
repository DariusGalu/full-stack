import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
    const [is_loged_in, setIs_loged_in] = useState('');
    const [newIs_loged_in, setnewIs_loged_in] = useState('');


    const onCreate = () => {
        localStorage.setItem('is_logged_in', "true")
    };

    return (
        <div>
            <Link onClick={onCreate} to= "/form">Log In</Link>
        </div>
    )
}

export default Login;
