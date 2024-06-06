import React, { useState } from 'react' 
import Input from '../components/Input.jsx';
import { useDispatch } from 'react-redux';
import { userLoginHandle } from '../store/features/userLoginSlice.js'
const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password }
    dispatch(userLoginHandle(data))
    console.log(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className='w-1/4 bg-white rounded px-8 py-5 mx-auto space-y-6'> 
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
