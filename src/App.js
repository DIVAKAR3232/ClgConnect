import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './components/Login';
import Signin from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/> 
          <Route path="/signup" element={<Signin/>}/>
      </Routes>
    </Router>
      
  );
}

export default App;
