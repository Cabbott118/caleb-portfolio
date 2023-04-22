import React from 'react';
import { IoIosQuote } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ClientSlider = (props) => {
  const { name, position, img_url, stars, desc } = props.client;
  return (
    <Box
      sx={{
        background: '#598392',
        borderRadius: '5px',
        padding: '1.5rem 1rem',
        margin: '0 1rem',
        minHeight: '21rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span className='quote'>
          <IoIosQuote />
        </span>
        <Box>
          {Array(stars)
            .fill()
            .map((_, i) => (
              <span className='star' key={i}>
                <AiFillStar />
              </span>
            ))}
        </Box>
      </Box>
      <Typography
        variant='p'
        sx={{
          fontSize: '.8rem',
        }}
      >
        {desc}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1rem',
          gap: '1rem',
        }}
      >
        <img src={img_url} alt={name} className='testimonialImg' />
        <Box>
          <Typography
            variant='h1'
            sx={{
              fontSize: '1.2rem',
              fontWeight: '700',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant='p'
            sx={{
              fontSize: '.8rem',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            {position}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientSlider;
