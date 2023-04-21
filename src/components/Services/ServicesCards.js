import React from 'react';

// MUI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Utilities
import { services } from '../../utility/services';

const ServicesCards = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={3}
    >
      {services.map((service, i) => (
        <Grid item key={i}>
          <Card sx={{ maxWidth: 345, backgroundColor: '#124559' }}>
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              <Grid
                item
                sx={{
                  paddingTop: '2rem',
                }}
              >
                <service.icon sx={{ fontSize: '5rem' }} color='primary' />
              </Grid>
              <Grid item>
                <CardContent>
                  <Grid
                    container
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Grid item>
                      <Typography gutterBottom variant='h5' color='#fff'>
                        {service.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='body2' color='#fff'>
                        {service.desc}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesCards;
