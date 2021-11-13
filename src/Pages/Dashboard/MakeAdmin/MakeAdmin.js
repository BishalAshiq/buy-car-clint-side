import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdmitSubmit= e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin',{
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data);
                setEmail('');
                setSuccess(true);
            }
        })
        e.preventDefault()
    }

    return (
        <div>
            <h2>Create An Admin</h2>
            <form onSubmit={handleAdmitSubmit}>
            <TextField 
            sx={{width: "50%"}}
            type="email"
            label="Email" 
            onBlur={handleOnBlur}
            variant="standard" />
            <Button type='submit' variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Congratulations! <strong>Your Admin Is Successfully Updated.</strong></Alert>}
        </div>
    );
};

export default MakeAdmin;