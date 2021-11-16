import { Button, Container, Grid, CircularProgress, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../hooks/useAuth';
const Register = () => {
    const {user,error, emailRegister, isLoading} = useAuth();
    const [regData, setRegData] = useState({});
    const navigate = useNavigate()
    const handleOnBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newRegData = {...regData};
        newRegData[field] = value;
        setRegData(newRegData)
    };
    
    const handleRegSubmit = event =>{
        if(regData.password !== regData.repeatPassword){
            alert("Your PassWord did not match");
            return;
        }
        else{
            emailRegister(regData.email,regData.password, regData.name, navigate)
        }
        event.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    {!isLoading && <form onSubmit={handleRegSubmit}>

                        <TextField type='text' name='name' onBlur={handleOnBlur} sx={{ width: '75%', m: 1 }} id="standard-basic-name" label="Your Name" variant="standard" />

                        <TextField type='email' name='email' onBlur={handleOnBlur} sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Email" variant="standard" />

                        <TextField autoComplete="new-password" name='password' onBlur={handleOnBlur} sx={{ width: '75%', m: 1 }}  type='password' id="standard-adornment-password" label="Password" variant="standard" />

                        <TextField name='repeatPassword' onBlur={handleOnBlur} sx={{ width: '75%', m: 1 }}  type='password' id="standard-adornment-repeat-password" label="Repeat Password" variant="standard" />

                        <Button sx={{ width: '75%', mt: 3 }} variant='contained' type="submit" className='button-style'>Register</Button>
                        <NavLink style={{textDecoration:'none', textTransform:'capitalize'}} to='/login'><Button variant='text' sx={{textTransform:'capitalize', mt:3}}>Already Registered? Please Login</Button></NavLink>
                    </form>
                    }
                    { isLoading &&
                    <CircularProgress color="secondary" />
                    }
                    {
                        user.email && <Alert sx={{width:'75%'}} severity="success">User created successfully</Alert>
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }
                </Grid>

                <Grid item xs={12} md={6}>
                    <figure>
                        <img className='dental-img' src={login} alt="" />
                    </figure>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;