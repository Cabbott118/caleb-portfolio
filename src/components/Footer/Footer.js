import React from 'react';
import styled from 'styled-components';
import { MdAlternateEmail } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { Slide, Zoom, Fade } from 'react-awesome-reveal';

// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Container
      id='footer'
      maxWidth='md'
      sx={{
        marginTop: '2rem',
        position: 'relative',
        padding: '2rem 0',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 650px)': {
          flexDirection: 'column',
          gap: '3rem',
        },
      }}
    >
      <Box sx={{ flex: '1' }}>
        <Slide direction='left' delay={1}>
          <h1>Contact Me</h1>
        </Slide>
        <Box className='links'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
            }}
          >
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction='left'>
              <Link
                href='tel:18632455252'
                sx={[
                  {
                    textDecoration: 'none',
                    color: 'lightgray',
                    '&:hover': {
                      color: 'orange',
                    },
                  },
                ]}
              >
                (863) 245-5252
              </Link>
            </Slide>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
            }}
          >
            <Slide direction='left'>
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <Link
                href='mailto:calebhaabbott94@gmail.com'
                sx={[
                  {
                    textDecoration: 'none',
                    color: 'lightgray',
                    '&:hover': {
                      color: 'orange',
                    },
                  },
                ]}
              >
                calebhaabbott94@gmail.com
              </Link>
            </Slide>
          </Box>
        </Box>
        <Box className='profiles'>
          <Slide direction='left'>
            <Typography
              variant='h1'
              sx={{
                fontSize: '1.2rem',
                fontWeight: '400',
                p: '1rem 0',
              }}
            >
              Check out my profiles
            </Typography>
          </Slide>
          <Box
            className='icons'
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Zoom>
              <span className='contactMeSpanGH'>
                <a className='contactMeA' href='/'>
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span className='contactMeSpanLI'>
                <a className='contactMeA' href='/'>
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
          </Box>
        </Box>
        <Fade>
          <Box
            onClick={scrollUp}
            sx={{
              width: '2rem',
              height: '2rem',
              backgroundColor: '#01be96',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.3rem',
              fontWeight: '700',
              marginTop: '2rem',
              '@media (max-width: 650px)': {
                position: 'absolute',
                right: '3rem',
                top: '16rem',
              },
            }}
          >
            <AiOutlineArrowUp />
          </Box>
        </Fade>
      </Box>

      <Box
        sx={{
          flex: '1',
        }}
      >
        <Slide direction='right'>
          <form>
            <div className='name'>
              <span className='textBoxSpans'>
                <CgProfile />
              </span>
              <input type='text' placeholder='Full Name...' />
            </div>
            <div className='email'>
              <span className='textBoxSpans'>
                <MdAlternateEmail />
              </span>
              <input type='email' placeholder='Email...' />
            </div>
            <div className='message'>
              <span className='textBoxSpans messageIcon'>
                <FiMail />
              </span>
              <textarea cols='30' rows='10' placeholder='Message...'></textarea>
            </div>
            <Button
              variant='contained'
              sx={{
                width: '5rem',
                height: '1.8rem',
                borderRadius: '5px',
              }}
            >
              Submit
            </Button>
          </form>
        </Slide>
      </Box>
    </Container>
  );
};

export default Footer;
