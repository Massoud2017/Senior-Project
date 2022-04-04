import React , {useState, useEffect,useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import GoogleLoginButton from './GoogleLogin.js';
import { AuthContext } from "../helpers/AuthContext";
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthState } = useContext(AuthContext);
	let navigate = useNavigate();

  const login = () => {
		const data = { username: username, password: password };
		axios.post('http://localhost:3001/auth/login', data).then((response) => {
			if (response.data.error) {
				alert(response.data.error);
			} else {
				localStorage.setItem('accessToken', response.data);
        //-- When logged in, redirect to homepage
        navigate('/');
        // window.location.reload();
        setAuthState(true);
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
                <div className='g-signin'>
                  <GoogleLoginButton/>
                </div>
                <div className='signup-link'>
                  Not a member? <Link to='/signup'>Create an account</Link><br/>
                  Forgot your password? <Link to='/changepassword'>Reset password</Link>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Login;