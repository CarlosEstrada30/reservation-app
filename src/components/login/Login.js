import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import {Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Login = () => {

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
        navigate("/reservation-app");
      });
    }
}

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'url(https://ejemplosimagenes.com/wp-content/uploads/2015/07/im%C3%A1genes-de-f%C3%BAtbol-6.jpg)', backgroundSize: 'cover' }}>
      <Paper elevation={3} sx={{ padding: 4, background: 'rgba(255, 255, 255, 0.8)' }}>
        <Typography variant="h5" component="h1" sx={{ marginBottom: 2, color: '#333' }}>
          Iniciar sesión
        </Typography>
        <GoogleLogin
          clientId="TU_CLIENT_ID_DE_GOOGLE"
          onSuccess={responseGoogle}
          cookiePolicy={'single_host_origin'}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              style={{
                backgroundColor: '#fff',
                color: '#333',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '16px',
                borderRadius: '4px',
                marginTop: '10px',
                display: 'block',
                width: '100%',
              }}
            >
              Iniciar sesión con Google
            </button>
          )}
        />
      </Paper>
    </Container>
  );
};

export default Login;