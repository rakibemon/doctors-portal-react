import { Alert } from '@mui/material';
import React, { useState } from 'react';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    const [dataAcknowledged, setDataAcknowledged] = useState(false);
    return (
        <div>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment setDataAcknowledged={setDataAcknowledged} date={date}></AvailableAppointment>
            {dataAcknowledged && <Alert style={{position:'absolute', top:'100px', right:'50px'}} sx={{width:'15%'}} severity="success">Booking Success</Alert>}
        </div>
    );
};

export default Appointment;