import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './DentalCare.css';
import dentalimg from '../../../images/treatment.png';
const DentalCare = () => {
    return (
        <Container sx={{mt:5}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <figure>
                        <img src={dentalimg} className='dental-img' alt="" />
                    </figure>
                </Grid>
                <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center',textAlign: 'left'}}>
                    <div>
                        <Typography variant='h4' sx={{color:'#5CE7ED'}}>Exceptional Dental <br /> Care, on Your Terms</Typography>
                        <Typography variant='body1' sx={{color:'gray', my:4}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, in doloribus. Beatae obcaecati fuga sapiente maxime accusantium architecto est atque officia vel deserunt, itaque reiciendis voluptate quibusdam in ipsam repudiandae!
                        </Typography>
                        <Button sx={{px:4}} className='button-style'> Learn More</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DentalCare;