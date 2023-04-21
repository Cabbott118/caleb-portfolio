import React from 'react';
import styled from 'styled-components';

// MUI
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Project = (props) => {
  const { img, disc } = props.item;
  return (
    <Container className='project'>
      <img src={img} alt='project' />
      <Box
        className='desc'
        sx={[
          {
            position: 'absolute',
            right: '0',
            left: '0',
            bottom: '-20rem',
            '&:hover': {
              bottom: '0',
            },
            textAlign: 'left',
            padding: '0.5rem',
            background:
              'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))',
            transition: 'all 400ms ease-in-out',
          },
        ]}
      >
        <Typography variant='h1' color='secondary' sx={{ fontSize: '1rem' }}>
          Project title
        </Typography>
        <Typography
          variant='p'
          color='secondary'
          sx={{
            width: '90%',
            fontSize: '0.8rem',
          }}
        >
          {disc}
        </Typography>
        <Link underline='hover' sx={{ marginLeft: '.4rem' }}>
          Demo
        </Link>
      </Box>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .desc {
    bottom: 0;
  }
`;
