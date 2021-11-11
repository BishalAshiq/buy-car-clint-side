import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login/login.jpg'


const Register = () => {
    const [loginData, setLoginData]= useState({});
    
    const {registerUser} = useAuth();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your Password Did Not Same');
            return
        }
        registerUser(loginData.email, loginData.password);
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
         <form onSubmit={handleLoginSubmit}>
         <TextField 
         sx={{width: '75%', m: 1}}
         id="standard-basic"
         label="Your Email"
         type="email"
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
         <TextField 
         sx={{width: '75%', m: 1}}
         id="standard-basic"
         type="password"
         label="Re-Type Your Password" 
         name="password2"
         onChange={handleOnChange}
         variant="standard"/>
         <Button sx={{width: '75%', m: 1}} type='submit' variant="contained">Register</Button>
         <NavLink style={{textDecoration: 'none'}} to="/login"><Button variant="text">Already Register? Please Login</Button></NavLink> 
         </form>
         </Grid>
         </Grid>
    </Container>
    );
};

export default Register;