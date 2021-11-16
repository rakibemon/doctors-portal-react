import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name, img} = doctor || {};
    return (
        <Grid item xs={12} md={6} lg={4}>
            <h2>Doctor Name : {name}</h2>
            <img style={{width:'200px'}} src={`data:image/png;base64, ${img}`} alt="" />
        </Grid>
    );
};

export default Doctor;