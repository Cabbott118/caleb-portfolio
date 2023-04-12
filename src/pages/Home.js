import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Components

const Home = () => {
  return (
    <Box sx={() => ({
      minHeight: '100vh',
    })}>
      <Typography variant='h1' color='primary'>
        Home
      </Typography>
    </Box>
  );
};

export default Home;
