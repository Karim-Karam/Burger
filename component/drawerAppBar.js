"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const drawerWidth = 240;
const navItems = ['our Menu', 'Deals', 'About Our Food' , 'Contacts' , 'Locate'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
       <IconButton
            color="warning"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ my: 2 }}
            
          >
            <LunchDiningIcon sx={{width:"2em", height:"2em"}} />
          </IconButton>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" color='transparent' >
        <Toolbar  sx={{   justifyContent :{ xs: 'space-between' , sm: 'space-around'} }}>
        <IconButton
            color="warning"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <LunchDiningIcon sx={{width:"2em", height:"2em"}} />
          </IconButton>
          <IconButton
            color="warning"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{  display: { sm: 'none' } }}
          >
            <MenuIcon sx={{width:"2em", height:"2em"}} />
          </IconButton>


          <IconButton
            color="warning"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ flexGrow: 0,  display: { xs: 'none', sm: 'block' } }}
            
          >
            <LunchDiningIcon sx={{width:"2em", height:"2em"}}/>
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;