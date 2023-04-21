import React from 'react';

// Componenets
import SliderComp from './Slider';

// MUI
import Container from '@mui/material/Container';

const Projects = () => {
  return (
    <Container
      id='project'
      maxWidth='md'
      sx={{ p: '3rem 0', position: 'relative' }}
    >
      <SliderComp />
    </Container>
  );
};

export default Projects;
