import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../hooks/useAuth';
const Register = () => {
    const {emailRegister} = useAuth()
    const [regData, setRegData] = useState({});
    const handleOnChange = event =>{
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
            emailRegister() 
        }
        event.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center'}}>
                    <form onSubmit={handleRegSubmit}>

                        <TextField type='email' name='email' onChange={handleOnChange} sx={{ width: '75%', m: 1 }} id="standard-basic" label="Your Email" variant="standard" />

                        <TextField autoComplete="new-password" name='password' onChange={handleOnChange} sx={{ width: '75%', m: 1 }}  type='password' id="standard-adornment-password" label="Password" variant="standard" />

                        <TextField name='repeatPassword' onChange={handleOnChange} sx={{ width: '75%', m: 1 }}  type='password' id="standard-adornment-repeat-password" label="Repeat Password" variant="standard" />

                        <Button sx={{ width: '75%', mt: 3 }} variant='contained' type="submit" className='button-style'>Send</Button>
                        <NavLink style={{textDecoration:'none', textTransform:'capitalize'}} to='/login'><Button variant='text' sx={{textTransform:'capitalize', mt:3}}>Already Registered? Please Login</Button></NavLink>
                    </form>
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