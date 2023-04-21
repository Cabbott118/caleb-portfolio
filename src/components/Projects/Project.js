import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Project = (props) => {
  const { img, title, desc } = props.project;
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '10rem',
        backgroundColor: '#4e5146',
        m: '0 .5rem',
        p: '.5rem',
        borderRadius: '5px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          backgroundColor: '#5f615b',
        },
      }}
    >
      <CardMedia
        component='img'
        height='140'
        image={img}
        alt='project'
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 400ms ease-in-out',
          '&:hover': {
            transform: 'scale(1.3)',
          },
        }}
      />
      <Box
        sx={[
          {
            position: 'absolute',
            right: '0',
            left: '0',
            bottom: '-6rem',
            '&:hover': {
              bottom: '0px',
            },
            background:
              'linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80))',
            transition: 'all 400ms ease-in-out',
          },
        ]}
      >
        <Typography
          variant='h1'
          color='secondary'
          sx={{ fontSize: '1rem', fontWeight: '800' }}
        >
          {title}
        </Typography>
        <Typography
          variant='p'
          color='secondary'
          sx={{
            width: '90%',
            fontSize: '.8rem',
          }}
        >
          {desc}
        </Typography>
        <Link href='/' sx={{ ml: '1rem' }}>
          Demo
        </Link>
      </Box>
    </Card>
  );
};

export default Project;
