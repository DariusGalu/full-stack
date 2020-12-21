import React, { useEffect, useState } from 'react';

function Form() {

    const [email, setEmail] = useState([]);
    const [newEmail, setNewEmail] = useState('');


    useEffect(() => {
        const readEmail = () => {
            if(localStorage.getItem('email'))  {
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
                <h1>Input data</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={newEmail} onChange={e => setNewEmail(e.target.value)} type="email"/>
                    <h5>Date of Birth</h5>
                    {/* <input value={newDateofbirth} onChange={e => setNewDateofbirth(e.target.value)} type="date"/> */}
                    <button onClick={onCreate}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
