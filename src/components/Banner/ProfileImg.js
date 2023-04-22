import React from 'react';
// Components
import myImg from '../../images/caleb.png';

// MUI
import Grid from '@mui/material/Grid';

const ProfileImg = () => {
  return (
    <Grid item lg={6}>
      <img className='profileImg' src={myImg} alt='profile' />
    </Grid>
  );
};

export default ProfileImg;
