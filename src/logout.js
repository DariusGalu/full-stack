import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Logout() {
    const [is_loged_in, setIs_loged_in] = useState('');
    const [newIs_loged_in, setnewIs_loged_in] = useState('');


    const onCreate = () => {
        localStorage.setItem('is_logged_in', "false")
    };

    return (
        <div>
            <Link onClick={onCreate} to= "/home">Log Out</Link>
        </div>
    )
}

export default Logout;
