import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userAuthHandle } from '../store/features/userAuthSlice'
const Profile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.userAuth);
    useEffect(() => {
        dispatch(userAuthHandle())
    },[dispatch])
  return (
    <div>
          {user.name}
          {user.email} 
    </div>
  )
}

export default Profile
