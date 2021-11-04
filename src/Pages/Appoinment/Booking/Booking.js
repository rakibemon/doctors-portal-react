import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';
import './Booking.css'

const Booking = ({ booking,date }) => {
    const { name, time, space } = booking || {};
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant='h5' gutterBottom component='div' sx={{color:'#1cc7c1', fontWeight:'500'}}>
                    {name}
                </Typography>
                <Typography variant='h6' gutterBottom component='div'>
                    {time}
                </Typography>
                <Typography variant='caption' display='block' gutterBottom>
                    {space} Sapces available
                </Typography>
                <br />
                <Button onClick={handleBookingOpen} className='button-style' variant='contained'>Book Appoinment</Button>
            </Paper>
        </Grid>
        <BookingModal booking={booking} date={date} openBooking={openBooking} handleBookingClose={handleBookingClose}></BookingModal>
        </>
    );
};

export default Booking;