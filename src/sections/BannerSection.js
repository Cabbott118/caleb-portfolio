import React from 'react';

// Components
import Header from '../components/Banner/Header';
import Profile from '../components/Banner/Profile';
import ProfileImg from '../components/Banner/ProfileImg';

// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const BannerSection = () => {
  return (
    <Box
      sx={{
        background: '#01161e',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container maxWidth='lg' id='home' sx={{ paddingTop: '3rem' }}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Profile />
          </Grid>
          <Grid item lg={6}>
            <ProfileImg />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BannerSection;
