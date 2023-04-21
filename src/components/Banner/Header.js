import React from 'react';

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Utilities
import { pages } from '../../utility/routes';

const headerText = 'Portfolio';
const drawerWidth = '100vw';

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Mobile Header
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        height: '100vh',
        backgroundColor: '#01be96',
      }}
    >
      <Typography variant='h6' color='#fff' sx={{ my: 2 }}>
        {headerText}
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                color='textPrimary'
                primary={page.name}
                href={page.location}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // Desktop Header
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav' color='transparent' position='static'>
        <Container>
          <Toolbar>
            <IconButton
              color='primary'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon color='secondary' />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              color='primary'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              {headerText}
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  href={page.location}
                  color='secondary'
                  className='navButton'
                  sx={[
                    {
                      textTransform: 'none',
                      '&:hover': {
                        color: '#01be96',
                      },
                    },
                  ]}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
