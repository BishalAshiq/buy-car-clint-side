import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login/login.jpg'


const Login = () => {
    const [loginData, setLoginData]= useState({});
   const {user, loginUser, isLoading, signInWithGoogle, authError} =useAuth();

   const location = useLocation();
   const history = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e =>{
    loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = ()=>{
        signInWithGoogle(location, history)
    }

    return (
       <Container>
           <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img style={{width:'100%'}} src={login} alt=""/>
            </Grid>
            <Grid sx={{mt: 15}} item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>LOGIN HERE</Typography>
            <form onSubmit={handleLoginSubmit}>
            <TextField 
            sx={{width: '75%', m: 1}}
            id="standard-basic"
            label="Your Email"
            name="email"
            onChange={handleOnChange} 
            variant="standard"/>
            <TextField 
            sx={{width: '75%', m: 1}}
            id="standard-basic"
            type="password"
            label="Your Password" 
            name="password"
            onChange={handleOnChange}
            variant="standard"/>
            <Button sx={{width: '75%', m: 1}} type='submit' variant="contained">Login</Button>
            <NavLink style={{textDecoration: 'none'}} to="/register"><Button variant="text">Are You New here? Register</Button></NavLink> 
            {isLoading && <CircularProgress color="success" />}
            {user?.email && <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your Account Successfully Added <strong>check it out!</strong>
            </Alert>}
            { authError && <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error <strong>Write Again!</strong>
            </Alert>}
            </form>
            <p>----------------------</p>
            <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
            </Grid>
            </Grid>
       </Container>
    );
}; 

export default Login;