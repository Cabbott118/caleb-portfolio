import React from 'react';

// MUI
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const services = [
  {
    title: 'Website Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?',
    direction: 'left',
  },
  {
    title: 'App Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?',
    direction: 'right',
  },
  {
    title: 'Test Automation',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?',
    direction: 'down',
  },
];

const ServicesCard = () => {
  {
    services.map((service) => {
      console.log(service);
      return (
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {service.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {service.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }
};

export default ServicesCard;
