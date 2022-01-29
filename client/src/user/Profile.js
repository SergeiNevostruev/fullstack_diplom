import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
// import Edit from '@material-ui/icons/Edit'
import EditIcon from '@mui/icons-material/Edit';
// import Person from '@material-ui/icons/Person'
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider'
import DeleteUser from './DeleteUser'
import {authenticate, isAuthenticated, clearJWT} from './../auth/auth-helper'
import {read} from './api-user.js'
import {Link, useParams} from 'react-router-dom'
import {Navigate} from 'react-router-dom'

const auth = {authenticate, isAuthenticated, clearJWT}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5)
  },
  title: {
    marginTop: theme.spacing(3),
    color: theme.palette.protectedTitle
  }
}))

export default function Profile() {
  const match = useParams()
  const classes = useStyles()
  const [user, setUser] = useState({})
  const [redirectToSignin, setRedirectToSignin] = useState(false)
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({
      userId: match.userId
    }, {t: jwt.token}, signal).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true)
      } else {
        console.log(data);
        setUser(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }

  // }, [match.userId,jwt.token])

}, [])
  
console.log(redirectToSignin);
console.log(user);

    if (redirectToSignin) {
      return <Navigate to='/signin'/>
    }
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h6" className={classes.title}>
          Profile
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.email}/> {
             auth.isAuthenticated().user && auth.isAuthenticated().user._id === user._id &&
              (<ListItemSecondaryAction>
                <Link to={"/user/edit/" + user._id}>
                  <IconButton aria-label="Edit" color="primary">
                    <EditIcon/>
                  </IconButton>
                </Link>
                <DeleteUser userId={user._id}/>
              </ListItemSecondaryAction>)
            }
          </ListItem>
          <Divider/>
          <ListItem> <ListItemText primary={user.about}/> </ListItem>
          <ListItem>
            <ListItemText primary={"Joined: " + (
              new Date(user.created)).toDateString()}/>
          </ListItem>
        </List>
      </Paper>
    )
  }