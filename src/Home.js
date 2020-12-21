import React, { useState } from 'react';
import './home.css';

function Home() {

    const getTable = () => {
        return(

            
            // <table>
            //     <td>
            //     <th>
            //         Email
            //     </th>
            //     <tr>
            //         {JSON.parse(localStorage.getItem('email')) || 'Nu exista niciun email in localStorage!'}
            //     </tr>
            //     </td>
            //     <td>
            //     <th>
            //         Date
            //     </th>
            //     <tr>
            //         {JSON.parse(localStorage.getItem('date')) || 'Nu exista nicio data de nastere in localStorage'}
            //     </tr>
            //     </td>
            // </table>



<table id="t">
<thead>
  <tr>
    <th>Email</th>
    <th>Date of Birthday</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>{JSON.parse(localStorage.getItem('email')) || 'Nu exista niciun email in localStorage!'}</td>
    <td>{JSON.parse(localStorage.getItem('date')) || 'Nu exista nicio data de nastere in localStorage'}</td>
  </tr>
</tbody>
<tfoot>
  <tr>
    <td>Example text</td>
    <td>Example text</td>
    
  </tr>
</tfoot>
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


