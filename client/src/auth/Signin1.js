
import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';

import Background from '../assets/images/matrix.jpg';

import Signin from './Signin.js'
import Signup from './../user/Signup'
// import HowToRegIcon from '@mui/icons-material/HowToReg';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        ВМатрице
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function SignTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 420, typography: "body1", margin: "20 15" }}>
      <TabContext value={value} sx={{ width: "100%", maxWidth: "100hv", margin: "10 5" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Вход" value="1" />
            <Tab label="Регистрация" value="2" />
          </Tabs>
        </Box>
        <TabPanel value="1" sx={{ padding: 1, margin: 0 }}>
          <Box sx={{ padding: 0, margin: 0 }}>
            <Signin />
            <Copyright sx={{ mt: 2 }} />
          </Box>
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 1, margin: 0 }}>
          <Box sx={{ padding: 1, margin: 0 }}>
            <Signup />
            <Copyright sx={{ mt: 2 }} />
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}


export default function SignInSide() {

  return (
      <Grid container component="main" sx={{ height: '100vh', maxHeight: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/iar-afB0QQw/1920x1280',
            backgroundImage: `url("${Background}")`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 5,
              mx: 3,
              maxWidth: "100hv",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SignTabs/>
          </Box>
        </Grid>
      </Grid>
  );
}