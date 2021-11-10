import React from 'react';

const Login = () => {
    return (
        <div>
            <form sx={{mr:'20px'}}>
                <input type="email" placeholder="Your email" alt=""/>
                <input type="password" placeholder="Your password" alt=""/>
                <input type="submit" alt=""/>
            </form>
        </div>
    );
};

export default Login;