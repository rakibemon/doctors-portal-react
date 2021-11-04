import { Button, Container, Grid, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import React from 'react';
import { useHistory } from "react-router-dom"
import login from '../../../images/login.png';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { googleSignIn, setUser } = useAuth();
    const history = useHistory();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/login', data)
            .then(data => {
                if (data) {
                    alert("Login successful");
                }
            })
        reset();
    };
    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result=>{
          setUser(result.user);
          history.push('/home')

        })
        .catch(error=>{

            });
    }
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField sx={{ width: '75%', m: 1 }} {...register("email")} id="standard-basic" label="Your Email" variant="standard" />
                        <TextField sx={{ width: '75%', m: 1 }} {...register("password")} type='password' id="standard-adornment-password" label="Password" variant="standard" />

                        {errors.exampleRequired && <span>This field is required</span>}
                        <Button sx={{ width: '75%', mt: 3 }} variant='contained' type="submit" className='button-style'>Send</Button>
                        <NavLink style={{ textDecoration: 'none', textTransform: 'capitalize' }} to='/reg'><Button variant='text' sx={{ textTransform: 'capitalize', mt: 3 }}>New User? Please Register</Button></NavLink>
                    </form>
                   <Button onClick={handleGoogleLogin} variant='text' sx={{ textTransform: 'capitalize', mt: 3 }}>Google Log in</Button>
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

export default Login;