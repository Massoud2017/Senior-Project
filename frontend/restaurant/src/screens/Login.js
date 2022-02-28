import React , {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
//-- Uncomment me when you're ready ----------------------------
// import GoogleLoginButton from './components/GoogleLoginButton'
//--------------------------------------------------------------

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

	let navigate = useNavigate();

  const login = () => {
		const data = { username: username, password: password };
		axios.post('http://localhost:3001/auth/login', data).then((response) => {
			if (response.data.error) {
				alert(response.data.error);
			} else {
				console.log(response);
				console.log(response.data);
				sessionStorage.setItem('accessToken', response.data);
				// navigate('/');
			}
		});
  };
  
  return (
    <div className='login-body'>
      <div className='login-container'>
        <h1>Login</h1>
        <form>
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
          {/* <input type='submit' value='Login' /> */}
          {/*-- For Nam to implement Google login */}
          {/* <GoogleLoginButton className='google-login-btn' /> */}
          {/* -- End of Google Login */}
          <div className='signup-link'>
						Not a member? <Link to='/signup'>Signup</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
