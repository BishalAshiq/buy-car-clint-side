import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
           <Link to="/home">Home</Link>
           <Link to="/aboutUs">About US</Link>

        </div>
    );
};

export default Navigation;