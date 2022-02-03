import React, {useState} from 'react'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import {authenticate, isAuthenticated, clearJWT} from './../auth/auth-helper'
import {remove} from './api-user.js'
import {Navigate, useParams} from 'react-router-dom'

const auth = {authenticate, isAuthenticated, clearJWT}


export default function DeleteUser() {
  const props = useParams()
  const [open, setOpen] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const jwt = auth.isAuthenticated()
  const clickButton = () => {
    setOpen(true)
  }
  const deleteAccount = () => { 
    remove({
      userId: props.userId
    }, {t: jwt.token}).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        auth.clearJWT(() => console.log('deleted'))
        setRedirect(true)
      }
    })
  }
  const handleRequestClose = () => {
    setOpen(false)
  }

  if (redirect) {
    return <Navigate to='/'/>
  }
    return (<span>
      <IconButton aria-label="Delete" onClick={clickButton} color="secondary">
        <DeleteForeverIcon/>
      </IconButton>

      <Dialog open={open} onClose={handleRequestClose}>
        <DialogTitle>{"Delete Account"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Подтвердите удаление аккаунта.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRequestClose} color="primary">
            Отмена
          </Button>
          <Button onClick={deleteAccount} color="secondary" autoFocus="autoFocus">
            Подтверждаю
          </Button>
        </DialogActions>
      </Dialog>
    </span>)

}
DeleteUser.propTypes = {
  userId: PropTypes.string.isRequired
}

