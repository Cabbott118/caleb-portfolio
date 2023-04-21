import React from 'react';

// MUI
import Grid from '@mui/material/Grid';

import { Slide } from 'react-awesome-reveal';

const ProfileImg = () => {
  return (
    <Slide direction='right'>
      <Grid item lg={6}>
        <img
          className='profileImg'
          src='https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png'
          alt='profile'
        />
      </Grid>
    </Slide>
  );
};

export default ProfileImg;
