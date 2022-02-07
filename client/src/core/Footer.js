import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
        ВМатрице
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#c5cae9',
      }}
    >
      {/* <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Внимание!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Находясь на этом сайте Вы соглашаетесь на использование вашей конфедициальной инфомарции.'}
          {'Мы используем куки для Вашего удобства пользования сайтом.'}
        </Typography>
        <Typography variant="body1">Информация для пользователей</Typography>
      </Container> */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          zIndex: 1200,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Ознакомьтесь с политикой конфедициальности.
          </Typography>
          <Copyright/>
        </Container>
      </Box>
    </Box>
  );
}