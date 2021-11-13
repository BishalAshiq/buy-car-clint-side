import { Grid } from '@mui/material';
import React from 'react';
import AddService from '../../AddService/AddService';
import ManageServices from '../../ManageServices/ManageServices';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <AddService></AddService>
        </Grid>
        <Grid item xs={12} md={7}>
        <ManageServices></ManageServices>
        </Grid>
        </Grid>
    );
};

export default DashboardHome;