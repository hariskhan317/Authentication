import React from 'react' 
import Input from '../components/Input.jsx';

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(name, email, password);
  }

  return (
      <form onSubmit={handleSubmit} className='w-1/4 bg-white rounded px-8 py-5 mx-auto space-y-6'> 
        <Input label="Name" name="name" type="text" />
        <Input label="Email" name="email" type="email" />
        <Input label="Password" name="password" type="password" />
        <button type='submit' className='border-2 px-4 py-1.5 rounded-lg'>Signup</button>
      </form>
  )
}

export default Signup;
