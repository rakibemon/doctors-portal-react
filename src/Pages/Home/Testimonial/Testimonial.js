import React from 'react';
import './Testimonial.css';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import { Container, Grid, Paper, Typography } from '@mui/material';
const testimonials = [
    {
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
        name: 'Rakib Emon',
        address:'Dhaka, Bangladesh',
        img:people1
    },
    {
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
        name: 'Sanjida Samad',
        address:'Azimpur, Dhaka',
        img:people2
    },
    {
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content',
        name: 'Sanjida Snigdha',
        address:'Gaibandha, Rangpur',
        img:people3
    }
]
const Testimonial = () => {
    return (
        <Container>
            <Grid container spacing={4} sx={{mt:3}}>
                {
                    testimonials.map((testimonial,index) => {
                        return(
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <Paper elevation={3} sx={{px:4, pt:4}}>
                                    <Typography variant='body1'>{testimonial?.description}</Typography>
                                    <div style={{display:'flex', marginTop:'20px'}}>
                                        <figure> <img src={testimonial?.img} alt="" /></figure>
                                        <div>
                                            <Typography variant='caption'>{testimonial?.name}</Typography>
                                            <Typography variant='body2'>{testimonial?.address}</Typography>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Container>
    );
};

export default Testimonial;