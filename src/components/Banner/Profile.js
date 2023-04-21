import React from 'react';

// MUI
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Slide } from 'react-awesome-reveal';

import theme from '../../utility/theme';

const iconContainer = {
  width: '2.3rem',
  height: '2rem',
  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
  backgroundColor: '#01be96',
  position: 'relative',
  transition: 'transform 400ms ease-in-out',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
  marginRight: '1rem',
};

const iconStyles = {
  color: '#fff',
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const Profile = () => {
  return (
    <Slide direction='left'>
      <Typography
        variant='h6'
        sx={{ padding: '1rem 0', color: theme.palette.secondary.main }}
      >
        Hello, <span className='green'>I'm</span>
      </Typography>
      <Typography
        variant='h1'
        color='primary'
        sx={{
          fontSize: '2rem',
          fontFamily: `'Secular One', 'sans-serif'`,
          letterSpacing: '2px',
        }}
      >
        Caleb Abbott
      </Typography>
      <Typography
        variant='h3'
        color='#fff'
        sx={{
          fontSize: '1.2rem',
          paddingBottom: '1.2rem',
        }}
      >
        Web Developer and Automation Engineer
      </Typography>
      <Typography variant='p' color='#999' sx={{ fontWeight: '300' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto.
        Adipisci in qui officia provident tenetur sequi, deserunt corporis quos?
      </Typography>
      <Button
        variant='contained'
        color='primary'
        href='#footer'
        sx={[
          {
            textTransform: 'none',
            padding: '.25rem 3rem',
            marginTop: '3rem',
            fontWeight: '700',
            filter: 'drop-shadow(0px 10px 10px #01be9551)',
            '&:hover': {
              filter: 'drop-shadow(0px 10px 10px #01be9570',
            },
          },
        ]}
      >
        Let's talk
      </Button>
      <Grid
        container
        direction='row'
        justifyContent='flex start'
        spacing={2}
        alignItems='center'
        sx={{
          marginTop: '3rem',
        }}
      >
        <Grid item>
          <Typography variant='p' color='#fff'>
            Check out my
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item sx={iconContainer}>
              {' '}
              <GitHubIcon color='secondary' fontSize='small' sx={iconStyles} />
            </Grid>
            <Grid item sx={iconContainer}>
              {' '}
              <LinkedInIcon
                color='secondary'
                fontSize='small'
                sx={iconStyles}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default Profile;
