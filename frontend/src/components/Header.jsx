import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div>
            Logo IMg
        </div>
        <div >
            <ul>
                <li className='flex gap-12'>
                    <NavLink style={{color:'black', textDecoration:'none'}} to="/">Home</NavLink>
                    <NavLink style={{color:'black', textDecoration:'none'}} to="/signup">Sign Up</NavLink>
                    <NavLink style={{color:'black', textDecoration:'none'}} to="/login">Login</NavLink>
                </li>
            </ul>      
        </div>
    </div>
  )
}

export default Header

