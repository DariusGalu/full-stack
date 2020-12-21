import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {

    const [email, setEmail] = useState([]);
    const [newEmail, setNewEmail] = useState('');


    useEffect(() => {
        const readEmail = () => {
            if(localStorage.getItem('email')) {
                setEmail(JSON.parse(localStorage.getItem('email')));

            }
        }
        readEmail()
    }, []);


    const onCreate = () => {
        email.push(newEmail)
        localStorage.setItem('email', JSON.stringify(email))
        setNewEmail('');
    };

    return (
        <div className="form">
            <div className="form_container">
                <h1>Root Page</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={newEmail} onChange={e => setNewEmail(e.target.value)} type="email"/>
                    <Link style={{textDecoration:'none'}} onClick={onCreate} to= "/home">Submit</Link>
                </form>
            </div>
        </div>
    )
}

export default Form;
