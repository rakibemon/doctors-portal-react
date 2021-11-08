import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../hooks/useAuth';

const Appointments = ({date}) => {
    const { user } = useAuth();
    const [appoinments, setAppointments] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/appoinments?email=${user.email}&&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))

    }, [user.email, date]);
    
    return (
        <div>
            <h2> Appointments {appoinments.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appointment's table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appoinments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.time}</TableCell>
                                <TableCell>{row.serviceName}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;