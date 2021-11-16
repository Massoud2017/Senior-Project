import React from 'react'

function Signup() {
    return (
        <div>
        <form>
        <h1>Create an an Account</h1>
        <input type="text" id="full-name" name="name" placeholder="*Full Name"></input> <br/> <br/>
        <input type="email" id="email" name="email" placeholder="*Email"></input> <br/> <br/>
        <input type="password" id="password" name="password" placeholder="*New Password"></input> <br/> <br/>
        <input type="password" id="password" name="password" placeholder="*Confirm New Password"></input> <br/> <br/>
        
        <button>Create My Account</button>
       </form> 
       </div>
    )
}

export default Signup
