import React from 'react';
import { useForm } from "react-hook-form";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import axios from 'axios';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({ openBooking, handleBookingClose, booking,date }) => {
    const { name, time } = booking || {};
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/patientinfo', data)
        .then(data => {
            if(data){
                alert("Booking successful");
            }
        })
        reset();
        handleBookingClose();
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={style}>
                            <Typography sx={{ textAlign: 'center', color: '#1cc7c1' }} id="transition-modal-title" variant="h6" component="h2">
                                {name}
                            </Typography>
                            <Box id="transition-modal-description"
                                sx={{
                                    my: 2,
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField {...register("time")} value={time.toString()} fullWidth label="Time" id="fullWidth" />
                                <TextField {...register("name")} sx={{ my: 3 }} fullWidth label="Name" id="fullWidth" />
                                <TextField {...register("email")} fullWidth label="Email" id="fullWidth" />
                                <TextField {...register("phone")} sx={{ my: 3 }} fullWidth label="Phone" id="fullWidth" />
                                <TextField {...register("date")} value={date.toDateString()} fullWidth label="Date" id="fullWidth" />
                            </Box>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <Button sx={{ float: 'right', py: 1, px: 6 }} type="submit" className='button-style'>Send</Button>
                        </Box>
                    </form>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;