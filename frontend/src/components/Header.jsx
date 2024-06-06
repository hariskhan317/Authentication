import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
const { isLogin } = useSelector((state) => state.userAuth)
return (
    <div className='flex justify-between'>
        <div>
            Logo IMg
        </div>
        <div >
            <ul>
                <li className='flex gap-12'>
                    <NavLink style={{color: 'black', textDecoration: 'none'}} to="/">Home</NavLink>
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/profile">Profile</NavLink>
                    {/* <NavLink style={{color: 'black', textDecoration: 'none'}} to="/signup">Sign Up</NavLink>
                    <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/login">Login</NavLink>
                    <button style = {{ color: 'black', textDecoration: 'none' }} >Logout</button> */}
                    {isLogin ? (
                        <button style = {{ color: 'black', textDecoration: 'none' }} >Logout</button>
                    ) : (<>
                            <NavLink style={{color: 'black', textDecoration: 'none'}} to="/signup">Sign Up</NavLink>
                            <NavLink style={{color: 'black', textDecoration: 'none' }} to="/login">Login</NavLink>
                    </>)}
                </li>
            </ul>      
        </div>
    </div>
)
}

export default Header

