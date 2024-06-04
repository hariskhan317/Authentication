import React from 'react'
import Input from '../components/Input.jsx';

const Login = () => {
  return (
    <form style={{background:"white",width:'50%', postion: 'absolute', left: 0, right: 0, margin:'auto'}}> 
    <div >
      <Input label={"Name"} />
    </div>
    <div>
      <Input label={"Email"} />
    </div>
    <div>
      <Input label={"Password"} />
    </div>
  </form>
  )
}

export default Login
