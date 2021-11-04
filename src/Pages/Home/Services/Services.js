import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container,Typography } from '@mui/material';
import Service from '../SingleService/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
const services = [
    {
        name:'Fluoride Treatment',
        description: 'Fluoride Treatment sit, amet consectetur adipisicing elit. Qui, mollitia voluptates. Est quasi labore, laborum vero culpa velit veritatis!',
        img: fluoride
    },
    {
        name:'Cavity Filling',
        description: 'Cavity Filling sit, amet consectetur adipisicing elit. Qui, mollitia voluptates. Est quasi labore, laborum vero culpa velit veritatis!',
        img: cavity
    },
    {
        name:'Teath Whitening',
        description: 'Teath Whitening sit, amet consectetur adipisicing elit. Qui, mollitia voluptates. Est quasi labore, laborum vero culpa velit veritatis!',
        img: whitening
    },
]
const Services = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography variant="h6" component="div" sx={{fontWeight:'500',m:5, color:'info.main'}}>
                        Our Services
                    </Typography>
            <Typography variant="h4" component="div" sx={{fontWeight:'600', mb:5}}>
                        Services We Provide
                    </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                services.map((service) => (
                   <Service service={service} key={service.name}></Service> 
                ))
                }
            </Grid>
            </Container>
        </Box>
    );
};

export default Services;