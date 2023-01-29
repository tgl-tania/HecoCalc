import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';
import '../css/login.css'
import UserPool from '../UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const onSubmit = event => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log('onSuccess:', data);
      },

      onFailure: err => {
        console.error('onFailure:', err);
      },
    });
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
          <TextField 
            id="standard-basic" 
            label="Enter Email..." 
            variant="standard" 
            size='50px' 
            value={email} 
            onChange={event => setEmail(event.target.value)} 
          />
          <TextField 
            id="standard-basic" 
            label="Enter Password..." 
            variant="standard" 
            value={password}
            onChange={event => setPassword(event.target.value)}
            />
          <button className='loginButton' type='submit' onClick={onSubmit}>
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