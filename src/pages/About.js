import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Box sx={() => ({
      minHeight: '100vh',
    })}>
      <Typography variant='h1' color='primary'>
        About
      </Typography>
    </Box>
  );
};

export default About;
