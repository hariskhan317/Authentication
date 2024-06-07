import React, { useState, useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import Input from '../components/Input.jsx';
import { userSignupHandle } from '../store/features/asyncUserFunction/userAsyncThunk.js';
import { useNavigate } from "react-router-dom"; 

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const data = { name, email, password }
    dispatch(userSignupHandle(data)) 
  }

  useEffect(() => {
    if (isLogin) { 
      return navigate('/profile');
    }
  }, [isLogin])

  
  return (
    <form onSubmit={handleSubmit} className='w-11/12 md:w-1/2 lg:w-1/4 bg-white rounded px-8 py-5 mx-auto space-y-6'> 
      <Input
        value={name}
        label="Name"
        name="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        value={email}
        label="Email"
        name="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        value={password}
        label="Password"
        name="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' className='border-2 px-4 py-1.5 w-full rounded-lg'>Signup</button>
    </form>
  )
}

export default Signup;
