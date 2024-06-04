import './App.css';
import Header from './components/Header'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';  
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className='py-2 px-6 bg-gray-100 h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
