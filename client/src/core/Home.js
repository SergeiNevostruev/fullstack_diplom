import React, {useState, useEffect} from 'react'
// import {useLocation, useNavigate} from 'react-router-dom'
import { makeStyles } from '@mui/styles'
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'
// import unicornbikeImg from './../assets/images/unicornbike.jpg'
import Grid from '@mui/material/Grid'
import {authenticate, isAuthenticated, clearJWT} from './../auth/auth-helper.js'
import FindPeople from './../user/FindPeople.js'
import Newsfeed from './../post/Newsfeed.js'
import {createMemoryHistory} from 'history'
// import SignInSide from './../auth/Signin1.js'

const auth = {authenticate, isAuthenticated, clearJWT}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    } 
  }
}))


export default function Home(){
  const history = createMemoryHistory();
  console.log(history);
  const classes = useStyles()
  // const location = useLocation();
  // console.log(location);
  const [defaultPage, setDefaultPage] = useState(false)

  useEffect(()=> {
    setDefaultPage(auth.isAuthenticated())
    const unlisten = history.listen (() => {
      setDefaultPage(auth.isAuthenticated())
    })
    return () => {
      unlisten()
    }
  }, [])

    return (

      <div> Это домашняя страница
        {/* <div>
          { !defaultPage &&
            <SignInSide/>
          }
        </div>       */}
        {/* <div className={classes.root}>
          {defaultPage &&
            <Grid container spacing={8}>
              <Grid item xs={8} sm={7}>
                <Newsfeed/>
              </Grid>
              <Grid item xs={6} sm={5}>
                <FindPeople/>
              </Grid>
            </Grid>
          }
        </div> */}
      </div>
    )
}