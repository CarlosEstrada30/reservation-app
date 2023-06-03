// Bring in the GoogleLogin
// component from the library
import { GoogleLogin } from '@react-oauth/google';
import React from 'react'
import { useNavigate } from "react-router-dom";

function LoginGoogle() {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response.credential)
    if (response.credential){
      fetch('http://localhost:5000/auth?token='+ response.credential,{
        credentials: 'include',
        // To cause browsers to send a request with credentials included on both same-origin and cross-origin calls, 
        // add credentials: 'include' to the init object you pass to the fetch() method.
       })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.access_token)
        localStorage.setItem('reservation_jwt', response.access_token);
        navigate("/");
      });
    }
}
  
  return (
    <GoogleLogin

            onSuccess={responseGoogle}
          
            onError={() => {
              console.log('Login Failed');
            }}
          
          />
  )
}

export default LoginGoogle