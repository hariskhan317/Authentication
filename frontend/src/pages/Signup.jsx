import React, { useState } from 'react' 
import { useDispatch } from 'react-redux'
import Input from '../components/Input.jsx';
import { userSignup } from '../store/features/UserSiginSlice.js';

const Signup = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const data = { name, email, password }
    dispatch(userSignup(data)) 
  }

  return (
    <form onSubmit={handleSubmit} className='w-1/4 bg-white rounded px-8 py-5 mx-auto space-y-6'> 
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
