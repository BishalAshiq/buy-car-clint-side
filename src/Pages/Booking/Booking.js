import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService]=useState({});
    
    useEffect( ()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=> setService(data))
    },[]);
    return (
        <div>
          <img src={service.img} alt=''/>
          <h2>{service.name}</h2>
          <h4>{service.price}</h4>
        </div>
    );
};

export default Booking;