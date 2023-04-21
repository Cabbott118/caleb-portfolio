import React from 'react';

// Components
import Projects from '../components/Projects/Projects';

// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import theme from '../utility/theme';

const ProjectsSection = () => {
  return (
    <Box
      id='projects'
      sx={{
        background: '#124559',
      }}
    >
      <Container maxWidth='lg' id='services' sx={{ padding: '3rem' }}>
        <Typography
          variant='h6'
          sx={{ padding: '1rem 0', color: theme.palette.secondary.main }}
        >
          Recent <span className='green'>projects</span>
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
          Take a look at some of my latest works
        </Typography>
        <Projects />
      </Container>
    </Box>
  );
};

export default ProjectsSection;
