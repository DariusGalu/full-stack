import React, { useEffect, useState } from 'react';

function Form() {

    const [email, setEmail] = useState([]);
    const [dateofbirth, setDateofBirth] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newDateofbirth, setNewDateofbirth] = useState('');


    useEffect(() => {
        const readEmail = () => {
            if(localStorage.getItem('email')) {
                setEmail(JSON.parse(localStorage.getItem('email')));
                
            }
        }
        readEmail()
    }, []);

    useEffect(() => {
        const readBirth = () => {
            if(localStorage.getItem('birth')) {
                setDateofBirth(JSON.parse(localStorage).getItem('birth'))
            }
        }
        readBirth()
    }, []);

    const onCreate = () => {
        email.push(newEmail)
        dateofbirth.push(newDateofbirth)
        localStorage.setItem('email', JSON.stringify(email))
        localStorage.setItem('birth', JSON.stringify(dateofbirth))
        setNewEmail('');
        setNewDateofbirth('');
    };
    return (
        <div className="form">
            <div className="form_container">
                <h1>Input data</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={newEmail} onChange={e => setNewEmail(e.target.value)} type="email"/>
                    <h5>Date of Birth</h5>
                    <input value={newDateofbirth} onChange={e => setNewDateofbirth(e.target.value)} type="dateofbirth"/>
                    <button variant="primary" onClick={onCreate}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
