import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./core/Home";
import Users from "./user/Users";
import Menu from "./core/Menu";
// import Signup from './user/Signup'
// import Signin from './auth/Signin'
import Signin1 from './auth/Signin1'
import Profile from './user/Profile'
import Profilem from './user/Profile-m'
import EditProfile from './user/EditProfile'
import StickyFooter from "./core/Footer";
import {authenticate, isAuthenticated, clearJWT} from './auth/auth-helper.js'
import FindPeople from './user/FindPeople.js'
import Newsfeed from './post/Newsfeed.js'

import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const auth = {authenticate, isAuthenticated, clearJWT}

const MainRouter = () => {

  if (auth.isAuthenticated()) {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Menu />
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#c5cae9' }} >
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<Newsfeed />} />
            <Route path="/users" element={<Users />} />
            <Route path="/usersnofol" element={<FindPeople />} />
            <Route path="/user/edit/:userId" element={<EditProfile />} />
            <Route path="/user/home/:userId" element={<Profilem />} />
            <Route path="/user/:userId" element={<Profile />} />
          </Routes>
        </Box>
      </Box>
      <StickyFooter />
    </div>
  );
  } else  {
    return (
    <div>
      <Routes >
        <Route path="/*" element={<Signin1/>} />
      </Routes>
    </div>
    );
  }
};
export default MainRouter;
