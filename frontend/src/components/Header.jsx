import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { userLogoutHandle, userAuthHandle } from '../store/features/asyncUserFunction/userAsyncThunk'

const Header = () => {
    const navigate = useNavigate();
    const { isLogin } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(userLogoutHandle());
    }

    useEffect(() => { 
        dispatch(userAuthHandle())
        if (isLogin) {
            return navigate('/profile');
        }
    }, []);
    
    return (
        <div className='flex justify-between'>
            <div>
                Logo IMg
            </div>
            <div >
                <ul>
                    <li className='flex gap-12'>
                        <NavLink style={{color: 'black', textDecoration: 'none'}} to="/">Home</NavLink>
                         
                        {isLogin ? (
                            <>
                                <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/profile">Profile</NavLink>
                                <button onClick={handleLogout} style={{ color: 'black', textDecoration: 'none' }} >Logout</button>
                            </>
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

