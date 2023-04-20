import React from 'react';

// Components
import Header from '../components/Banner/Header';
import Profile from '../components/Banner/Profile';

// MUI
import Box from '@mui/material/Box';

const Banner = () => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)',
        height: '100vh',
      }}
    >
      <Header />
      <Profile />
    </Box>
  );
};

export default Banner;
