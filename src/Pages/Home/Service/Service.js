import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { _id,name, price, description, img} = service;
    return (
        <div className='service-container'>
           <img src={img} alt=""/>
           <h1>{name}</h1>
           <h5>{price}</h5>
           <p>{description}</p>
           <Link to={`/booking/${_id}`}><button>Book {name.toUpperCase()}</button></Link>
        </div>
    );
};

export default Service;