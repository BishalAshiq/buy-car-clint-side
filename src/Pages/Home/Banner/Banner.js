import React from 'react';
import './Banner.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import banner from '../../../images/banners/banner-2.jpg';


const bannerBg = {
    backgroundColor: 'black',
    marginBottom: '20px' 
}
const typo = {
  color:'rgb(182, 168, 145)',
  marginTop: '60px',
  fontSize: '30px',
  fontWeight: 'bold'
}

const Banner = () => {
    return (
            <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
           <Typography style={typo}>
               This is the Place Where You get your <br/> <span className='dream'>Dream</span> Car
           </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
           <img className='img' src={banner} alt=""/>
        </Grid>
      </Grid>
    </Box>
    );
};

export default Banner;