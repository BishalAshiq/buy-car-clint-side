import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const{user, logOut} = useAuth();
    return (
        <div className='nav'>
            <div>
                <h2>BUY CARS</h2>
            </div>

           <div>
           <Link to="/home">Home</Link>
           <Link to="/aboutUs">About US</Link>
           
           {
               user?.email? 
               <Button onClick={logOut}>Login</Button>
               : 
               <Link to="/login"><Button style={{color: 'white', fontSize: '18px'}}>Login</Button></Link>
           }

           </div>
        </div>
    );
};

export default Navigation;