import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const{user, logOut} = useAuth();
    return (
        <div className='nav'>
            <div data-aos="fade-right">
                <h2>SelVik MoTors</h2>
            </div>

           <div data-aos="fade-left">
           <Link to="/home">Home</Link>
           <Link to="/dashboard">Dashboard</Link>
           <Link to="/aboutUs">About US</Link>
           
           {
               user?.email? 
               <Button style={{color: 'white', fontSize: '18px'}} onClick={logOut}>Log Out</Button>
               : 
               <Link to="/login"><Button style={{color: 'white', fontSize: '18px'}}>Login</Button></Link>
           }

           </div>
        </div>
    );
};

export default Navigation;