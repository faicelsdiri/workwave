import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Register from './Register';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { get_auth_user, logout } from '../Redux/actions';
import { useEffect } from 'react';




function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  //redux 
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(get_auth_user());
  }, []);
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout_user = () => {
    dispatch(logout());
    navigate("/")
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 
  const guestUser = (<div style={{display :'flex'}} >
<div style={{paddingRight :"20px"  }}>
<Login /></div>
<div style={{paddingRight :"20px"  }}>
          <Register/></div></div>
  );
  const authUser = (
<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={"./uploads/1707422959187.png"} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
                <MenuItem >
                  <Typography textAlign="center"> Profile </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography textAlign="center">  Dashboard' </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography textAlign="center" onClick={logout_user}>  Logout</Typography>
                </MenuItem>
             
            </Menu>
            
          </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' /* Dark background color */ }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <img
            src="https://i.ibb.co/VYNLKqm/logo-no-background.png"
            alt="Logo"
            style={{
              height: '40px', // Adjust the height as needed
              marginRight: '16px', // Add some spacing if necessary
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
             <Menu
             id="menu-appbar"
             anchorEl={anchorElNav}
             anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left',
             }}
             keepMounted
             transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
             }}
             open={Boolean(anchorElNav)}
             onClose={handleCloseNavMenu}
             sx={{
               display: { xs: 'block', md: 'none' },
               backgroundColor: '#444', // Dark background color for the menu
             }}
           > 
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button   sx={{ my: 2, color: 'white', display: 'block' }}>
              Home
            </Button>
            <Button   sx={{ my: 2, color: 'white', display: 'block' }}>
              Profile
            </Button>
          </Box>

          {user ? authUser : guestUser}


          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;