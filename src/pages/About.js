import React from 'react';

import headshot from '../images/me.jpeg';

// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const AboutBody = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='space-around'
      alignItems='center'
    >
      <Grid>
        <Typography color='primary' variant='h6'>
          Who Am I?
        </Typography>
        <Typography color='secondary' variant='body1'>
          From a young age, I've been interested in how things work, why they
          work, and not only how I can keep them working, but improve them.
        </Typography>
        <Typography color='secondary' variant='body1'>
          I believe this is why I've been lead to become a Web Developer. It
          doesn't matter if I'm continuing work on something I started months
          ago, or picking up a brand new shiny project; each and every day
          brings new challenges and pushes me to continue learning and growing.
        </Typography>
      </Grid>
      <Grid>
        <Typography color='primary' variant='h6'>
          Where Am I Today?
        </Typography>
        <Typography color='secondary' variant='body1'>
          Today, I am a Golf Services Lead at the world-class golf resort,
          Streamsong. I work with an incredible group of people, from all walks
          of life, who come together as a team to showcase our spectacular
          resort.
        </Typography>
        <Typography color='secondary' variant='body1'>
          I have been fortunate to learn under a management team that has
          fostered my leadership skills and given me opportunity to grow as a
          man.
        </Typography>
      </Grid>
      <Grid>
        <Typography color='primary' variant='h6'>
          Where Will I Be Tomorrow?
        </Typography>
        <Typography color='secondary' variant='body1'>
          Tomorrow, I will continue to grow as a developer, a problem solver, a
          leader, and a man, by applying what I've learned today.
        </Typography>
      </Grid>
    </Grid>
  );
};

const About = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='space-around'
      alignItems='center'
      sx={() => ({
        minHeight: '100vh',
      })}
    >
      <Grid>
        <img
          src={headshot}
          alt='Caleb headshot'
          style={{
            borderRadius: '360px',
            width: '250px',
            boxShadow: '0px 0px 30px #9cc9ad',
          }}
        />
      </Grid>
      <Grid>
        <Container maxWidth='sm'>
          <AboutBody />
        </Container>
      </Grid>
    </Grid>
  );
};

export default About;
