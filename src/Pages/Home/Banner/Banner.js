import React from 'react';
import './Banner.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import banner from '../../../images/banners/banner-2.jpg';
import { Link } from 'react-router-dom';


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
const aboutButton= {
  backgroundColor: 'rgb(226, 130, 4)',
  color:'white',
  padding: '10px 20px',
  borderRadius:'10px',
  marginTop:"15px",
  cursor:'pointer',
  fontSize: '17px'
}

const Banner = () => {
    return (
            <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
           <Typography style={typo}>
               This is the Place Where You get your <br/> <span className='dream'>Dream</span> Car
           </Typography>
           <Link to='/aboutUs'><button style={aboutButton}>MORE TO KNOW</button></Link>
        </Grid>
        <Grid item xs={12} md={6}>
           <img className='img' src={banner} alt=""/>
        </Grid>
      </Grid>
    </Box>
    );
};

export default Banner;