import React from 'react';

// Components
import Clients from '../components/Clients/Clients';

// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import theme from '../utility/theme';

const TestimonialsSection = () => {
  return (
    <Box
      sx={{
        background: '#01161e',
      }}
    >
      <Container maxWidth='lg' id='services' sx={{ padding: '3rem' }}>
        <Typography
          variant='h6'
          sx={{ padding: '1rem 0', color: theme.palette.secondary.main }}
        >
          <span className='green'>Testimonials</span>
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
          This is what my clients are saying
        </Typography>
        <Clients />
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
