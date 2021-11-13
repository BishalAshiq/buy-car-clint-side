import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://fathomless-chamber-42458.herokuapp.com/services', data)
        .then(res=> {
           if(res.data.insertedId){
               alert('Congratulations! Your new Service Added');
               reset();
           }
        })
    };
    return (
        <div className='service-add'>
            <h2>Add A Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
      <input {...register("img")} placeholder='image URL'/>
      <textarea {...register("description")} placeholder='Description'/>
      <input type="number" {...register("price")} placeholder='Price'/>
      <input className='submit' type="submit" />
    </form>
        </div>
    );
};

export default AddService;