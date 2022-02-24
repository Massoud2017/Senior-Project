import React , {useState, useEffect} from 'react';
import Axios from 'axios'
// import GoogleLoginButton from './components/GoogleLoginButton'


function Login() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = () => {
     Axios.post('http://localhost:3001/api/insert', {userID:userID, password:password}).then(() =>{
       alert("successful insert");
     });
  };
  
  return (
    <div className='login-body'>
      <div className='login-container'>
        <h1>Login</h1>
        {/* <form method='post' className="form-login"> */}
        <form>
          <div className='form-text-field'>
            <input type='text' required id='username' name='username' 
              placeholder='Username'  onChange={(e)=> {
              setUserID(e.target.value)
            }}/>
          </div>
          <div className='form-text-field'>
            <input type='password' required id='password' name='password' 
              placeholder='Password' onChange={(e)=> {
                setPassword(e.target.value)
            }} />
          </div>
          {/* <button className='form-login-btn' onClick={SignIn}>Sign In</button> */}
          <input type='submit' value='Login' />
          {/*-- For Nam to implement Google login */}
          {/* <GoogleLoginButton className='google-login-btn' /> */}
          {/* -- End of Google Login */}
          <div className='signup-link'>
            Not a member? <a href='#'>Signup</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
