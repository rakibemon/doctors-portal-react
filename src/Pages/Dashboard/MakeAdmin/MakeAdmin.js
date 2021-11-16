import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success, setSuccess]=useState(false);
    const {token} = useAuth();
    const handleOnBlur = (event) =>{
        setEmail(event.target.value)
    }
    const handleAdminSubmit = event =>{
        const user = {email:email}
        fetch('http://localhost:5000/users/admin',{
            method:"PUT",
            headers:{
                'authorization' : `Bearer ${token}`,
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.modifiedCount){
                setEmail('')
                setSuccess(true)
            }
        })
        event.preventDefault();
    }
    return (
        <div>
            <h2> Make me an admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField id="standard-basic" label="Email" type='email' onBlur={handleOnBlur} variant="standard" /> <br />
            <Button type='submit' variant='contained' className='buttom-style'>Make admin</Button>
            </form>
            {success && <Alert style={{position:'absolute', top:'100px', right:'50px'}} sx={{width:'15%'}} severity="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;