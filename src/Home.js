import React, { useState } from 'react'

function Home() {

    const getTable = () => {
        return(
            <table>
                <td>
                <th>
                    Email
                </th>
                <tr>
                    {JSON.parse(localStorage.getItem('email')) || 'Nu exista niciun email in localStorage!'}
                </tr>
                </td>
                <td>
                <th>
                    Date
                </th>
                <tr>
                    {JSON.parse(localStorage.getItem('date')) || 'Nu exista nicio data de nastere in localStorage'}
                </tr>
                </td>
            </table>
        )
    }

    return (
        <div>
            <h1>Home</h1>
            {getTable()}
        </div>

)}

export default Home


