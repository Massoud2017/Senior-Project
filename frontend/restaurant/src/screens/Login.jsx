import React from 'react'

function Login() {
    return (
      <div>
         <form>
           <label for ="email"> Email </label>  
                <input type="email" id="email" name="email"></input> <br/> <br/>
            <label for ="password"> Password </label>  
                <input type="password" id="password" name="password"></input><br/> <br/>
                <button>Sign In</button>
          </form> 
      </div>
    )
}

export default Login
