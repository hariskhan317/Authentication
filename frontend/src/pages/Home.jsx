import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom'; 
import { userAuthHandle } from '../store/features/asyncUserFunction/userAsyncThunk.js'

const Home = () => {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.user);  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAuthHandle())
    // if (isLogin) { 
    //   return navigate('/profile');
    // } 
  },[])
  return (
    <section class="hero bg-blue-500 text-white py-16 mt-32">
      <div class="container mx-auto text-center">
        <h1 class="text-5xl font-bold mb-4">Welcome to AuthApp</h1>
        <p class="text-xl mb-6">Secure your application with robust authentication powered by MERN stack and Redux.</p>
        <p class="text-lg mb-6">
      AuthApp is a powerful, secure, and easy-to-use authentication system built with MongoDB, Express, React, and Node.js. 
      With state management handled by Redux, AuthApp provides a seamless experience for user authentication and authorization.
    </p>
      </div>
    </section>

  )
}

export default Home
