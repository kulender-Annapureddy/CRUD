import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <nav >
            <div className='navsbars' >
            
            <div className='logo'>
         <Link to='/' className='links'>Personalio</Link>
         </div>
         <div className='eployeelogo'>
            <Link to='/users' className='links'>Users</Link>
         </div>
         </div>
        </nav>

    </div>
  )
}

export default Navbar