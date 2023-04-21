import React from 'react';

// Components
import ServicesCard from '../components/Services/ServicesCard';

// Utilities
import { services } from '../utility/services';

// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import theme from '../utility/theme';

const ServicesSection = () => {
  return (
    <Box
      sx={{
        background: '#124559',
      }}
    >
      <Container maxWidth='lg' id='services' sx={{ padding: '3rem' }}>
        <Typography
          variant='h6'
          sx={{ padding: '1rem 0', color: theme.palette.secondary.main }}
        >
          My <span className='green'>services</span>
        </Typography>
        <Typography
          variant='h1'
          color='secondary'
          sx={{
            fontSize: '2rem',
            fontFamily: `'Secular One', 'sans-serif'`,
            paddingBottom: '2rem',
          }}
        >
          Here's what I can do for you
        </Typography>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <ServicesCard />
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
