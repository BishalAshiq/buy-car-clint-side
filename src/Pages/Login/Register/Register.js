import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login/login.jpg'

const Register = () => {
    const [loginData, setLoginData]= useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your Password Did Not Same');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Container>
        <Grid container spacing={2}>
         <Grid item xs={12} md={6}>
             <img style={{width:'100%'}} src={login} alt=""/>
         </Grid>
         <Grid sx={{mt: 15}} item xs={12} md={6}>
         <Typography variant="body1" gutterBottom>Create a New Account</Typography>
        {!isLoading && <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width: '75%', m: 1}}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur} 
                variant="standard"/>
                <TextField 
                sx={{width: '75%', m: 1}}
                id="standard-basic"
                label="Your Email"
                type="email"
                name="email"
                onBlur={handleOnBlur} 
                variant="standard"/>
                <TextField 
                sx={{width: '75%', m: 1}}
                id="standard-basic"
                type="password"
                label="Your Password" 
                name="password"
                onBlur={handleOnBlur}
                variant="standard"/>
                <TextField 
                sx={{width: '75%', m: 1}}
                id="standard-basic"
                type="password"
                label="Re-Type Your Password" 
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"/>
                <Button sx={{width: '75%', m: 1}} type='submit' variant="contained">Register</Button>
                <NavLink style={{textDecoration: 'none'}} to="/login"><Button variant="text">Already Register? Please Login</Button></NavLink> 
         </form>}
            {isLoading && <CircularProgress color="success" />}
            {user?.email && <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your Account Successfully Added <strong>check it out!</strong>
            </Alert>}
            { authError && <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error <strong>Write Again!</strong>
            </Alert>}
         </Grid>
         </Grid>
    </Container>
    );
};

export default Register;