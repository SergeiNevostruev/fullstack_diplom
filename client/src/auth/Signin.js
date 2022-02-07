import React, {useState} from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
// import Icon from '@mui/icons-material/Icon' // ErrorOutlineOutlinedIcon
import Icon from '@mui/icons-material/ErrorOutlineOutlined'
import { makeStyles } from '@mui/styles'
import {authenticate, isAuthenticated, clearJWT} from './../auth/auth-helper.js'
import {Navigate} from 'react-router-dom'
import {signin} from './api-auth.js'

const auth = {authenticate, isAuthenticated, clearJWT}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    // marginTop: theme.spacing(2),
    // paddingBottom: theme.spacing(1)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(1),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: 300,
    width: '100%'
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default function Signin(props) {

  const classes = useStyles()
  const [values, setValues] = useState({
      email: '',
      password: '',
      error: '',
      redirectToReferrer: false
  })



  const clickSubmit = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    }

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        auth.authenticate(data, () => {
          setValues({ ...values, error: '',redirectToReferrer: true})
        })
      }
    }).then(()=> window.location.reload())
    
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  // const {from} = props.location.state || {
  //     from: {
  //       pathname: '/'
  //     }
  // }
  const {from} = {
      from: {
        pathname: '/home'
      }
  }


  const {redirectToReferrer} = values
  if (redirectToReferrer) {
      return (<Navigate to={from}/>)
  }

  return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Погрузиться ВМатрицу
          </Typography>
          <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal"/><br/>
          <TextField id="password" type="password" label="Пароль" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal"/>
          <br/> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}
            </Typography>)
          }
        </CardContent>
        <CardActions
                        sx={{
                          // my: 8,
                          // mx: 4,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          }}
        >
          <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>
            Войти
            </Button>
        </CardActions>
      </Card>
    )
}
