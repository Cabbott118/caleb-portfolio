import React from 'react';
import styled from 'styled-components';

// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Slide } from 'react-awesome-reveal';

const iconStyles = {
  width: '2.3rem',
  height: '2rem',
  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
  backgroundColor: '#01be96',
  position: 'relative',
  transition: 'transform 400ms ease-in-out',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
};

const Profile = () => {
  return (
    <Container maxWidth='md' id='home' sx={{ paddingTop: '3rem' }}>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Slide direction='left'>
            <Typography variant='h6' color='#fff' sx={{ padding: '1rem 0' }}>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              iusto. Adipisci in qui officia provident tenetur sequi, deserunt
              corporis quos?
            </Typography>
            <Button
              variant='contained'
              color='primary'
              href='#footer'
              sx={[
                {
                  textTransform: 'none',
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
              spacing={2}
              sx={{
                marginTop: '3rem',
              }}
            >
              <Grid item>
                <Typography variant='p' color='#fff'>
                  Check out my
                </Typography>
              </Grid>
              <Grid item className='social-icons'>
                <Grid container spacing={2}>
                  <Grid item>
                    {' '}
                    <GitHubIcon
                      color='secondary'
                      fontSize='small'
                      sx={iconStyles}
                    />
                  </Grid>
                  <Grid item>
                    {' '}
                    <LinkedInIcon sx={iconStyles} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Slide>
        </Grid>
        <Slide direction='right'>
          <Grid item lg={6}>
            <ProfileImg>
              <img
                src='https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png'
                alt='profile'
              />
            </ProfileImg>
          </Grid>
        </Slide>
      </Grid>
    </Container>
  );
};

export default Profile;

// const Container = styled.div`
//   display: flex;
//   gap: 2rem;
//   padding-top: 3rem;
//   width: 80%;
//   max-width: 1280px;
//   margin: 0 auto;
//   z-index: 1;
//   @media (max-width: 840px) {
//     width: 90%;
//   }

//   @media (max-width: 640px) {
//     flex-direction: column;
//   }
// `;
// const Texts = styled.div`
//   flex: 1;
//   h4 {
//     padding: 1rem 0;
//     font-weight: 500;
//   }
//   h1 {
//     font-size: 2rem;
//     font-family: 'Secular One', sans-serif;
//     letter-spacing: 2px;
//   }
//   h3 {
//     font-weight: 500;
//     font-size: 1.2rem;
//     padding-bottom: 1.2rem;
//     text-transform: capitalize;
//   }
//   p {
//     font-weight: 300;
//   }

//   button {
//     padding: 0.7rem 2rem;
//     margin-top: 3rem;
//     cursor: pointer;
//     background-color: #01be96;
//     border: none;
//     color: #fff;
//     font-weight: 500;
//     filter: drop-shadow(0px 10px 10px #01be9551);
//     :hover {
//       filter: drop-shadow(0px 10px 10px #01be9570);
//     }
//   }
// `;
// const Social = styled.div`
//   margin-top: 3rem;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   p {
//     font-size: 0.9rem;
//     @media (max-width: 690px) {
//       font-size: 0.7rem;
//     }
//   }

//   .social-icons {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     span {
//       width: 2.3rem;
//       height: 2rem;
//       clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
//       background-color: #01be96;
//       position: relative;
//       transition: transform 400ms ease-in-out;
//       :hover {
//         transform: rotate(360deg);
//       }
//     }

//     a {
//       color: #fff;
//       position: absolute;
//       top: 55%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//     }
//   }
// `;
const ProfileImg = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
