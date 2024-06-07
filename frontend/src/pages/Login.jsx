import React, { useEffect, useState } from 'react' 
import Input from '../components/Input.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginHandle } from '../store/features/asyncUserFunction/userAsyncThunk.js';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLogin, status } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const data = { email, password }
    dispatch(userLoginHandle(data)) 
  }

  useEffect(() => {

    if (isLogin) { 
      return navigate('/profile');
    }
  }, [isLogin])



  return (
    <form onSubmit={handleSubmit} className='w-11/12 md:w-1/2 lg:w-1/4 bg-white rounded px-8 py-5 mx-auto space-y-6'> 
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
      <button type='submit' className='border-2 px-4 py-1.5 w-full rounded-lg'>Login</button>
    </form>
  )
}

export default Login;
