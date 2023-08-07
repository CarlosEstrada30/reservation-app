import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import {Container, Paper, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Login = () => {

  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response.credential)
    if (response.credential){
      axios.get(process.env.REACT_APP_API_URL+'/auth?token='+ response.credential)
        .then(response => {
          console.log('Respuesta del servidor:', response.data);
          localStorage.setItem('reservation_jwt', response.data.access_token);
          navigate("/reservation-app");
        })
        .catch(error => {
          console.error('Error en la solicitud:', error);
        });



      // fetch(process.env.REACT_APP_API_URL+'/auth?token='+ response.credential,{
      //   method: 'GET',
      //   mode: 'cors',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   }})
      // .then((response) => {
      //   return response.json();
      // })
      // .then((response) => {
      //   console.log(response.access_token)
      //   localStorage.setItem('reservation_jwt', response.access_token);
      //   navigate("/reservation-app");
      // });
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