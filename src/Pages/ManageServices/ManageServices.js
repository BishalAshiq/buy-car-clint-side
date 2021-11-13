import React, { useEffect, useState } from 'react';
import './ManageServices.css'

const ManageServices = () => {
    const [services, setServices] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then (res=>res.json())
        .then(data => setServices(data))
    } ,[]);
    const handleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.deletedCount){
                alert('Deleted')
                const remaining = services.filter(service=>service._id !== id);
                setServices(remaining);
            }
        })
    }
    return (
        <div>
            <h2>This is Manage Service</h2>
          <div className='manage-service'>
          {
                services.map(service =>
                <div key={service._id}>
                    <img src={service.img} alt=""/>
                   <h3>{service.name}</h3>
                    <button onClick={()=>handleDelete(service._id)}>Delete</button>
                </div>)
            }
          </div>
        </div>
    );
};

export default ManageServices;