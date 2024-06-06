import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { userAuthHandle } from '../store/features/userAuthSlice'
const Profile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userAuth);
    useEffect(() => {
        dispatch(userAuthHandle())
    },[])
  return (
    <div className='text-center py-20'>
        <div>{user?.name}</div>
        <div>{user?.email}</div> 
    </div>
  )
}

export default Profile
