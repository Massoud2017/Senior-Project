import React , { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import GoogleLoginButton from './GoogleLogin.js';
import { AuthContext } from "../helpers/AuthContext";
function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthState } = useContext(AuthContext);
	const navigate = useNavigate();

  const login = () => {
		const data = { username: username, password: password };
		axios.post('http://localhost:3001/auth/login', data).then((response) => {
			if (response.data.error) {
				alert(response.data.error);
			} else {
				localStorage.setItem('accessToken', response.data);
        //-- When logged in, redirect to menu page
        navigate('/menu');
        // window.location.reload();
        setAuthState(true);
        props.setCheckoutPopup(false);
			}
      
		});
  };
  
  return (
    <div className='login-body'>
        <div className='login-top-text-field'>
          <h2>SIGN IN</h2>
          <h3>VIEW YOUR ORDER HISTORY</h3>
            <div className='login-container'>
              <h1>Login</h1>
              <div className='login-form'>
                <div className='form-text-field'>
                  <input
                    required
                    type='text'
                    placeholder='Email'
                    onChange={(event)=> {
                      setUsername(event.target.value);
                    }}
                  />
                </div>
                <div className='form-text-field'>
                  <input
                    required
                    type='password'
                    placeholder='Password'
                    onChange={(e)=> {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                  <button className='form-login-btn' onClick={login}>Login</button>
                <div className='g-signin google-login-btn'>
                  <GoogleLoginButton/>
                </div>
                <div className='signup-link'>
                  Not a member yet? <Link to='/signup'>Create an account</Link><br/>
                  Forgot your password? <Link to='/forgotpassword'>Reset password</Link>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Login;