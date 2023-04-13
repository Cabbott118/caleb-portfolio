import React from 'react';

// MUI
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Components

const Headline = () => {
  const theme = useTheme();
  const typographyVariant = useMediaQuery(theme.breakpoints.up('sm'));
  console.log(typographyVariant);
  return (
    <Grid item sm={6} xs={12}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        sx={() => ({
          minHeight: 'calc(100vh - 64px)',
        })}
      >
        <Grid>
          <Typography variant='h5' color='secondary'>
            Hello!
          </Typography>
        </Grid>
        <Grid>
          <Typography variant={typographyVariant ? 'h1' : 'h2'} color='primary'>
            <b>I'm Caleb</b>
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='h5' color='secondary'>
            Web & Automation Developer
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='body1' color='textSecondary'>
            My goal as a web developer is to build websites and digital
            experiences that are not only visually appealing but also highly
            functional and user-friendly.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const SideContent = () => {
  return (
    <Grid item sm={6} xs={12}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid>
          <Typography variant='h1' color='primary'>
            Filler content
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <Headline />
        <SideContent />
      </Grid>
    </Container>
  );
};

export default Home;
