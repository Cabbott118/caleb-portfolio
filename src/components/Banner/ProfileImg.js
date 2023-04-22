import React from 'react';

// MUI
import Grid from '@mui/material/Grid';

const ProfileImg = () => {
  return (
    <Grid item lg={6}>
      <img
        className='profileImg'
        src='https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png'
        alt='profile'
      />
    </Grid>
  );
};

export default ProfileImg;
