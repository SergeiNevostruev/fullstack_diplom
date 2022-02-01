import React from 'react'
// import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import {authenticate, isAuthenticated, clearJWT} from './../auth/auth-helper'
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
// import LoginIcon from '@mui/icons-material/Login'
// import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonIcon from '@mui/icons-material/Person';

// import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const auth = {authenticate, isAuthenticated, clearJWT}

const isActive = (location, path) => {
  if (location.pathname === path)
    return {color: '#ff4081'}
  else
    return {color: 'rgba(0, 0, 0, 0.54)'}
}

const withRouter = Component => props => {
  const location = useLocation();
  const match = { params: useParams() };
  const history = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return <Component theme={theme} open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} location={location} match={match} history={history} {...props} />;
};


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



const myprops = MenuIcon;

const Menu = withRouter(
  ({ theme, open, handleDrawerOpen, handleDrawerClose, history, location, myprops }) => (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ВМатрице
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              auth.clearJWT(() => window.location.assign("/"));
            }}
          >
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List>
          <ListItem button key={"Домой"} style={isActive(location, "/home")}>
            <Link to="/home">
              <ListItemIcon>
                <HomeIcon  style={isActive(location, "/home")} />
              </ListItemIcon>
            </Link>
            <ListItemText primary={"Домой"} />
          </ListItem>

          <ListItem button key={"Новости"} style={isActive(location, "/news")}>
            <Link to="/news">
              <ListItemIcon>
                <NewspaperIcon  style={isActive(location, "/news")} />
              </ListItemIcon>
            </Link>
            <ListItemText primary={"Новости"} />
          </ListItem>

          <ListItem
            button
            key={"Пользователи"}
            style={isActive(location, "/users")}
          >
            <Link to="/users">
              <ListItemIcon>
                <PeopleIcon  style={isActive(location, "/users")} />
              </ListItemIcon>
            </Link>
            <ListItemText primary={"Пользователи"} />
          </ListItem>

          <ListItem button key={"Подписаться"} style={isActive(location, "/usersnofol")}>
            <Link to="/usersnofol">
              <ListItemIcon>
                <PersonAddAltIcon  style={isActive(location, "/usersnofol")} />
              </ListItemIcon>
            </Link>
            <ListItemText primary={"Подписаться"} />
          </ListItem>
        </List>


        <Divider />
        <List>
          {auth.isAuthenticated() && (
            <ListItem button key={'Мой профиль'} style={isActive(location, "/user/home/" + auth.isAuthenticated().user._id)}>
              <Link to={"/user/home/" + auth.isAuthenticated().user._id}>              
              <ListItemIcon>          
                  <PersonIcon style={isActive(location, "/user/home/" + auth.isAuthenticated().user._id)}/>
              </ListItemIcon>
              </Link>                           
              <ListItemText primary={'Мой профиль'} />
            </ListItem>
          )}                      
        </List>
      </Drawer>
    </Box>
  )
);

export default Menu
