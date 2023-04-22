import React, { useRef } from 'react';

// Components
import ClientSlider from './ClientSlider';

// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Utilities
import { slickSettingsTestimonials, clients } from '../../utility/data';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import { Button } from '@mui/material';

const Clients = () => {
  const arrowRef = useRef(null);
  const clientDesc = clients.map((client, i) => (
    <ClientSlider client={client} key={i} />
  ));
  return (
    <Container
      id='clients'
      maxWidth='md'
      sx={{
        paddingBottom: '3rem',
      }}
    >
      <Box sx={{ m: '2rem 0 0 0', position: 'relative' }}>
        <Slider ref={arrowRef} {...slickSettingsTestimonials}>
          {clientDesc}
        </Slider>
        <Box sx={{ position: 'absolute', right: '.7rem', bottom: '-2rem' }}>
          <Button
            onClick={() => arrowRef.current.slickPrev()}
            sx={{
              backgroundColor: 'transparent',
              ml: '.5rem',
              border: 'none',
              color: '#01be96',
              cursor: 'pointer',
              fontSize: '1.1rem',
            }}
          >
            <IoIosArrowBack />
          </Button>
          <Button
            onClick={() => arrowRef.current.slickNext()}
            sx={{
              backgroundColor: 'transparent',
              ml: '.5rem',
              border: 'none',
              color: '#01be96',
              cursor: 'pointer',
              fontSize: '1.1rem',
            }}
          >
            <IoIosArrowForward />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Clients;
