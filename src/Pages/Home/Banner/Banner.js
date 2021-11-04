import React from 'react';
import chair from '../../../images/chair.png';
import { Grid, Typography, Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import './Banner.css'
const verticalCenter = {
    display: 'flex',
    height: '500px',
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Container className='banngerBg' sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter,textAlign: 'left' }} item xs={12} md={5}>
                    <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Starts here
                        </Typography>
                        <Typography variant='h6' sx={{my:4, fontSize: '14px', color: 'gray', fontWeight: '400' }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam at molestiae mollitia et libero exercitationem atque, repudiandae eveniet totam numquam!
                        </Typography>
                        <Button className='button-style' style={{ backgroundColor: '#5CE7ED', textTransform: 'capitalize' }} variant='contained'> Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <figure>
                        <img className='dental-img' src={chair} alt="" />
                    </figure>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;