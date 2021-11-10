import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='nav'>
            <div>
                <h2>Bishal Motors</h2>
            </div>

           <div>
           <Link to="/home">Home</Link>
           <Link to="/aboutUs">About US</Link>
           <Link to="/login">Login</Link>
           </div>
        </div>
    );
};

export default Navigation;