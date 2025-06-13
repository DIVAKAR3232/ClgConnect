import { Link,useNavigate }from 'react-router-dom';
import { FaEnvelope,FaLock} from 'react-icons/fa';
import { useState,useEffect} from 'react';
const Login = () => {
    const HandleSubmit=()=>{

    }
  return (
    <div style={{ backgroundColor: '#edecf1', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='bg-white sm:px-10 md:px-14 py-7  text-black space-y-4 rounded shadow-lg'>
        <h1 className='text-3xl font-bold'>Login</h1>
        
        <form onSubmit={HandleSubmit} className="space-y-4">
            
            <div className="flex items-center border border-gray-300 rounded px-3">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className="w-full p-2 outline-none"
                />
            </div>

            <div className="flex items-center border border-gray-300 rounded px-3">
                <FaLock className="text-gray-500 mr-2" />
                <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-2 outline-none"
                />
            </div>
             {/* {errorMessage && <p className="error">{errorMessage}</p>} */}
      
            <button type="submit" className="bg-blue-600 w-full rounded p-2 text-white hover:bg-blue-500 hover:shadow-lg hover:rounded-md transition">Login</button>
        </form>
      
        <p >
            If you don't have Account <Link to="/signup" className="text-black font-bold hover:text-blue-600 hover:shadow-2xl transition">SignUp</Link> | <Link to="/" className="text-black font-bold hover:text-blue-600">Home</Link>
        </p>
      </div>  
    </div>
  )
}
 
export default Login;