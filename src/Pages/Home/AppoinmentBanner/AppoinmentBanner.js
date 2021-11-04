import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png';

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: 'rgba(45,58,74, 0.5)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: '150px',
};
const AppoinmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <figure>
            <img style={{ width: '100%', height:'auto', marginTop: '-200px' }} src={doctor} alt="" />
          </figure>
        </Grid>
        <Grid item xs={12} md={7} sx={{display:'flex', justifyContent:'flex-start', textAlign:'left', alignItems:'center'}}>
          <Box>
            <Typography variant="h6" style={{ color: '#5CE7ED' }}>
              Appoinment
            </Typography>
            <Typography variant="h4" sx={{my:5}} style={{ color: 'white', fontSize: '28px' }}>
              Make an Appoinment Today
            </Typography>
            <Typography variant="p"  style={{ color: 'white', fontSize: '14px', fontWeight: 500 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia tenetur architecto minus ipsum doloremque nihil, recusandae repudiandae
            </Typography>
            <br />
            <Button className='button-style' sx={{mt:4}} style={{backgroundColor:'#5CE7ED', textTransform:'capitalize'}} variant='contained'>Learn more</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;