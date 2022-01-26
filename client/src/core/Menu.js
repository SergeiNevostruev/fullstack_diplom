import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import {authenticate, isAuthenticated, clearJWT} from './../auth/auth-helper'
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'


const auth = {authenticate, isAuthenticated, clearJWT}

const isActive = (location, path) => {
  if (location.pathname === path)
    return {color: '#ff4081'}
  else
    return {color: '#ffffff'}
}

const withRouter = Component => props => {
  const location = useLocation();
  const match = { params: useParams() };
  const history = useNavigate();
  return <Component location={location} match={match} history={history} {...props} />;
};



const Menu = withRouter(({ history, location }) => (
  <AppBar position="static">
    <Toolbar>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(location, "/")}>
          <HomeIcon />
          <Typography variant="h6" color="inherit">
            ВМатрице
          </Typography>
        </IconButton>
      </Link>
      <Link to="/users">
        <Button style={isActive(location, "/users")}>ПОВСТАНЦЫ</Button>
      </Link>
      <div> 
        {!auth.isAuthenticated() && (
          <span>
            <Link to="/signup">
              <Button style={isActive(location, "/signup")}>
                <PermIdentityIcon />
              </Button>
            </Link>
            <Link to="/signin">
              <Button style={isActive(location, "/signin")}>
                <LoginIcon />
              </Button>
            </Link>
          </span>
        )}
        {auth.isAuthenticated() && (
          <span>
            <Link to={"/user/" + auth.isAuthenticated().user._id}>
              <Button
                style={isActive(
                  location,
                  "/user/" + auth.isAuthenticated().user._id
                )}
              >
                Мой профиль
              </Button>
            </Link>
            <Button
              color="inherit"
              onClick={() => {
                auth.clearJWT(() => history("/"));
              }}
            >
              <LogoutIcon />
            </Button>
          </span>
        )}
      </div>
    </Toolbar>
  </AppBar>
));

export default Menu
