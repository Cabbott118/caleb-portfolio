import React from 'react';

// MUI
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/joy/Grid';

import { iconInfo } from '../utility/routes';

const Icons = () => {
  let grid = iconInfo.map((info) => (
    <Grid key={info.key}>
      <Link color='textSecondary' target='_blank' href={info.href}>
        <info.iconName fontSize='large' />
      </Link>
    </Grid>
  ));

  return grid;
};

const Copyright = () => {
  return (
    <Typography variant='body2' color='secondary'>
      {'Copyright © '}
      <Link
        color='inherit'
        target='_blank'
        href='https://calebabbottportfolio.com'
      >
        Caleb Abbott
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

function Footer() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='space-evenly'
      alignItems='center'
      sx={() => ({
        minHeight: '20vh',
      })}
    >
      <Grid>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={6}
          sx={() => ({
            minWidth: '100vw',
          })}
        >
          <Icons />
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid>
            <Copyright />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
