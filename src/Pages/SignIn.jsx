import React, { useState, useEffect } from 'react';
import './Css/SignIn.css';

const SignIn = () => {

  const [errorMessage,setErrorMessage] = useState("");      
  const [usersLogin,setUserLogin] = useState("sign");
  
  const [user,setUser] = useState({
    login:false,
    name:"",
    email:"",
    password:"",
  })


  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    // Check if session has expired
    const authToken = localStorage.getItem('auth_token');
    if (authToken) {
      const tokenExpiration = localStorage.getItem('token_expiration');
      if (tokenExpiration && new Date(tokenExpiration) < new Date()) {
        // Session has expired
        setSessionExpired(true);
        // Clear token and expiration
        localStorage.removeItem('auth_token');
        localStorage.removeItem('token_expiration');
      }
    }
  }, []);


  const changeHandler = (e) =>{
    setUser ({...user,[e.target.name] : e.target.value})
  }

  const addUser = async (e) =>{
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/api/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      });

      const data = await response.json();
      
      if (data.success) {
        const expirationTime = new Date(Date.now() + 60 * 60 * 1000);
        
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('token_expiration', expirationTime);        
        window.location.replace('/');
      }
      else {
          setErrorMessage(data.error||'An error occurred. Please try again later.');
      }
  
    }
  
    catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }

  }


  return (
    <div className="sign-in-form">
        <form className="sign-in" onSubmit={addUser}>
        {
          usersLogin === "login"? <h2>Login</h2> : <h2>Sign Up</h2> 
        }
            <div className="sign-in-area">
              {
                usersLogin === "login"? <></> : <input type="text" placeholder='Enter your name' name='name' value={user.name} onChange={changeHandler} required/>
              } 
            </div>
            
            <div className="sign-in-area">
              <input type="email" placeholder='Enter your email' name='email' value={user.email} onChange={changeHandler} required/>
            </div>       
            
            <div className="sign-in-area">
              <input type="password" placeholder='Enter your passward' name='password' value={user.password} onChange={changeHandler} required/>
            </div>

            <div className="sign-in-area">
              <button type='submit' onClick={()=>{
                usersLogin==='login'?setUser({...user,login:true}):setUser({...user,login:false});
              }}>Continue</button>
            </div>

            <div className="sign-in-area"> 
            {
              usersLogin === "login"? 
              <p>Don't have an account ?<span onClick={()=> setUserLogin("sign")}> Sign up</span> </p>:
              <p>Already have an account ?<span onClick={()=> setUserLogin("login")}> Login</span> </p>
            }
            </div>
            <div className="sign-in-area">
              <p>{errorMessage}</p>
            </div>
        </form>
    </div>
  )
}

export default SignIn
