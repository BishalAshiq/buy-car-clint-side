import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdmitSubmit= e =>{
        e.preventDefault()
    }

    return (
        <div>
            <h2>Create An Admin</h2>
            <form onSubmit={handleAdmitSubmit}>
            <TextField 
            type="email"
            label="Email" 
            onBlur={handleOnBlur}
            variant="standard" />
            <Button type='submit' variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;