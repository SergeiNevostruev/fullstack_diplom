import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import {unfollow, follow} from './api-user.js'

export default function FollowProfileButton (props) {
  const followClick = () => {
    props.onButtonClick(follow)
  }
  const unfollowClick = () => {
    props.onButtonClick(unfollow)
  }
    return (<div>
      { props.following
        ? (<Button variant="contained" color="secondary" onClick={unfollowClick}>Отписаться</Button>)
        : (<Button variant="contained" color="primary" onClick={followClick}>Подписаться</Button>)
      }
    </div>)
}
FollowProfileButton.propTypes = {
  following: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
}
