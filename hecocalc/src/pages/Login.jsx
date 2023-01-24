import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';
import '../css/login.css'

function Login() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <> 
      <div className='container'>
        <div className='leftSide'>
          <div className='Main'>HecoCalc</div>
          <div className='Sub'>by HecoAnalytics</div>
        </div>
        <div className='rightSide'>
          <img src='./assets/hecologo.png' alt="jsx-a11y/alt-text" onClick={navigateToHome} />

          <div className='Title'>Sign In</div>

          <div className='signInBox'>
          <TextField id="standard-basic" label="Enter Email..." variant="standard" size='50px'/>
          <TextField id="standard-basic" label="Enter Password..." variant="standard" />
          <button className='loginButton'>
          SIGN IN
          </button>
          
          </div>
        </div>
        <div className='Footer'>Don't have an account? Reach out to contact@HecoAnalytics.com</div>
        </div>
    </>
  )
}

export default Login


