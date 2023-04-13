import React from 'react';

import headshot from '../images/me.jpeg';

// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Container maxWidth='sm'>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={() => ({
          minHeight: '100vh',
        })}
      >
        <Grid>
          <Typography color='primary' variant='h6'>
            Who Am I?
          </Typography>
          <Typography color='secondary' variant='body2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
            sit amet purus gravida quis blandit turpis. Eget est lorem ipsum
            dolor sit amet consectetur adipiscing elit. Ligula ullamcorper
            malesuada proin libero. Sit amet consectetur adipiscing elit duis
            tristique. Et ligula ullamcorper malesuada proin. Ut tellus
            elementum sagittis vitae. In ante metus dictum at tempor. Lobortis
            elementum nibh tellus molestie. Tempus egestas sed sed risus pretium
            quam vulputate dignissim. Ipsum suspendisse ultrices gravida dictum
            fusce ut. Amet cursus sit amet dictum sit amet justo.
          </Typography>
        </Grid>
        <Grid>
          <Typography color='primary' variant='h6'>
            Where Am I Today?
          </Typography>
          <Typography color='secondary' variant='body2'>
            Urna porttitor rhoncus dolor purus non enim praesent. Ut eu sem
            integer vitae justo eget magna fermentum iaculis. Vitae justo eget
            magna fermentum iaculis eu. Tortor at risus viverra adipiscing at in
            tellus integer. Tincidunt vitae semper quis lectus nulla. Purus in
            mollis nunc sed id. Et sollicitudin ac orci phasellus egestas tellus
            rutrum. Nec tincidunt praesent semper feugiat nibh sed pulvinar
            proin. Malesuada fames ac turpis egestas. Tincidunt dui ut ornare
            lectus sit amet. Sed tempus urna et pharetra pharetra massa massa
            ultricies mi. Malesuada fames ac turpis egestas sed tempus urna et
            pharetra.
          </Typography>
        </Grid>
        <Grid>
          <Typography color='primary' variant='h6'>
            Where Will I Be Tomorrow?
          </Typography>
          <Typography color='secondary' variant='body2'>
            Integer feugiat scelerisque varius morbi enim nunc. Cras ornare arcu
            dui vivamus arcu felis bibendum. Semper viverra nam libero justo
            laoreet sit amet cursus sit. Pulvinar pellentesque habitant morbi
            tristique senectus et. Senectus et netus et malesuada fames ac
            turpis egestas. Tortor consequat id porta nibh venenatis cras sed
            felis eget. A erat nam at lectus urna duis convallis convallis
            tellus. Cursus metus aliquam eleifend mi in nulla posuere
            sollicitudin. Ultricies tristique nulla aliquet enim tortor at
            auctor urna. Consectetur lorem donec massa sapien faucibus. Nunc
            scelerisque viverra mauris in aliquam sem fringilla ut.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
