import React from 'react';
import './signup.css';

function signup() {
  return (
    <body>
      <div>
        <form>
          <h1>SIGNUP</h1>
          <label htmlFor='name'>Name:</label>
          <input type="text" id='name' required/>

          <label htmlFor='email'>Email:</label>
          <input type="email" id='email' required/>

          <label htmlFor='newPassword'>Password:</label>
          <input type="password" id='newPassword' required/>

          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input type="password" id='confirmPassword' required/>
          <div class="btn">  
          <input type="submit" value="Register"/>
        </div>  
        </form>
      </div>
    </body>
  );
}
export default signup;