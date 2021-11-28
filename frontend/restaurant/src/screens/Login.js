import React , {useState, useEffect} from 'react';
import Axios from 'axios'
import style from './style.css'

function Login() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = () => {
     Axios.post('http://localhost:3001/api/insert', {userID:userID, password:password}).then(() =>{
       alert("successful insert");
     });
  }; 
    return (
      <div>
        
         <form className="form-login">
          
           <label for ="id"> Username </label>  
                <input class="userId" type="userid" id="Username" name="Username" placeholder="Username"  onChange={(e)=> {
                  setUserID(e.target.value)
                }}/><br/> <br/>
            
            <label for ="password" > Password </label>  
            <input type="password" id="password" name="password" placeholder="Password" onChange={(e)=> {
                  setPassword(e.target.value)
                }}/><br/> <br/>
                <button class="btn-login" onClick={SignIn}>Sign In</button>
          </form> 
      </div>
    )
}

export default Login;
