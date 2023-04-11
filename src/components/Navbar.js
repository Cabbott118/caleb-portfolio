import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'About',
    route: '/about',
  },
  {
    name: 'Projects',
    route: '/projects',
  },
  {
    name: 'Contact',
    route: '/contact',
  },
];

const Navbar = () => {
  let location = useLocation();
  let { pathname } = location;

  return (
    <AppBar position='static' color='transparent'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={{
              margin: '0 auto',
            }}
          >
            {pages.map((page) => (
              <Link to={page.route} key={page.name}>
                <Button
                  variant='text'
                  color={pathname == page.route ? 'primary' : 'secondary'}
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
