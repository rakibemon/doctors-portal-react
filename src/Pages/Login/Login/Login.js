import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import React from 'react';
import { useHistory, useLocation } from "react-router-dom"
import login from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const {user, error, googleSignIn, loginWithEmail, setUser, setError, isLoading, setIsLoading,googleSaveUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location?.state?.from || '/home';
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        loginWithEmail(data.email, data.password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setError('');
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
        reset();
    };
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                setUser(user);
                googleSaveUser(user.email , user.displayName)
                setError('');
                history.push(redirect_uri);

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    };
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center' }}>
                    {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField sx={{ width: '75%', m: 1 }} {...register("email")} id="standard-basic" label="Your Email" variant="standard" />
                        <TextField sx={{ width: '75%', m: 1 }} {...register("password")} type='password' id="standard-adornment-password" label="Password" variant="standard" />

                        {errors.exampleRequired && <span>This field is required</span>}
                        <Button sx={{ width: '75%', mt: 3 }} variant='contained' type="submit" className='button-style'>Login</Button>
                        <NavLink style={{ textDecoration: 'none', textTransform: 'capitalize' }} to='/reg'><Button variant='text' sx={{ textTransform: 'capitalize', mt: 3 }}>New User? Please Register</Button></NavLink>
                    </form>}
                    <Button onClick={handleGoogleLogin} className='button-style' variant='contained' sx={{ textTransform: 'capitalize', mt: 3 }}>Google Log in</Button>
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

export default Login;