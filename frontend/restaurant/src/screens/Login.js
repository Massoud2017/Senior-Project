import React , {useState, useEffect} from 'react';
import Axios from 'axios'


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
         <form className="form">
           <label for ="email"> Email </label>  
                <input type="userID" id="userID" name="userID" onChange={(e)=> {
                  setUserID(e.target.value)
                }}/><br/> <br/>
            
            <label for ="password"> Password </label>  
            <input type="password" id="password" name="password" onChange={(e)=> {
                  setPassword(e.target.value)
                }}/><br/> <br/>
                <button onClick={SignIn}>Sign In</button>
          </form> 
      </div>
    )
}

export default Login;
