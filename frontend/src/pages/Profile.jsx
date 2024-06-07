import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';  
import { useNavigate } from 'react-router-dom'; 
import { userAuthHandle, updateUserHandle } from '../store/features/asyncUserFunction/userAsyncThunk';
import Input from '../components/Input.jsx'; 

const Profile = () => { 
  const { user,isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //const fileRef = useRef(null);
  const navigate = useNavigate();
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPassword, setUpdatedPassword] = useState(''); 
  // const [photo, setPhoto] = useState('')

  useEffect(() => {
    dispatch(userAuthHandle())

    if (!isLogin) { 
      return navigate('/');
    } 
    console.log({isLogin})
  }, [isLogin]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = { updatedName, updatedEmail, updatedPassword }
    dispatch(updateUserHandle(data)) 
  }
  
  return (
    <div className='py-20'>  
      <form onSubmit={handleUpdate} className='w-11/12 md:w-9/12 lg:w-1/2 bg-white rounded px-8 py-5 mx-auto space-y-6'> 
        {/* <div className='flex justify-center w-full'>
          <input 
            ref={fileRef}
            accept='image/*'
            onChange={(e) => setPhoto(e.target.files[0])}
            hidden
            type="file" /> 
          <img onClick={() => fileRef.current.click()} src={photo?.name || user?.photo} className='h-40 w-40 mx-auto' alt="Profile" />
        </div> */}
        <Input
        defaultValue={user?.name}
          label="Name"
          name="name"
          type="text"
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <Input
          defaultValue={user?.email}
          label="Email"
          name="email"
          type="email"
          onChange={(e) => setUpdatedEmail(e.target.value)}
        />
        <Input
          defaultValue={''}
          label="Password"
          name="password"
          type="password"
          onChange={(e) => setUpdatedPassword(e.target.value)}
        />
      <button type='submit' className='border-2 px-4 py-1.5 w-full rounded-lg'>Change</button>
    </form>

    </div>
  )
}

export default Profile
