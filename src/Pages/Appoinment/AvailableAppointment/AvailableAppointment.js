import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price:35,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price:40,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price:30,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price:15,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price:20,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price:30,
        space: 10,
    },
]
const AvailableAppointment = ({date,setDataAcknowledged}) => {
    return (
        <Container>
            <Typography variant='h4' sx={{color:'#1cc7c1', fontWeight:'500', mb:4}}>Appointments available on {date.toDateString()}</Typography>
            <Grid container spacing={4}>
                {
                    bookings.map(booking => <Booking key={booking.id} setDataAcknowledged={setDataAcknowledged} booking={booking} date={date}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;