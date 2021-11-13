import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
   fetch('https://fathomless-chamber-42458.herokuapp.com/services')
   .then(res => res.json())
   .then(data => setServices(data))        
    }, []);
    return (
        <div id='services'>
            <h1>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
            <Link to="/servicesMore"><Button>See More</Button></Link>
        </div>
    );
};

export default Services;