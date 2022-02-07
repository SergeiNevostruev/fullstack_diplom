import React from 'react'
import {makeStyles} from '@mui/styles'
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom'
// import GridList from '@mui/material/GridList'
// import GridListTile from '@mui/material/GridListTile'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 'auto'
  },
  gridList: {
    maxWidth: 500,
    minHeight: 220,
    width: '100%',
    height: '100%',
  },
  tileText: {
    textAlign: 'center',
    marginTop: 10
  }
}))
export default function FollowGrid (props) {
  const classes = useStyles()
    return (<div className={classes.root}>

<ImageList rowHeight={160} className={classes.gridList} cols={3}>

    {props.people.map((person, i) => {
            return  <ImageListItem style={{'height':120}} key={i}>
                <Link to={"/user/" + person._id}>
                  <Avatar src={'/api/users/photo/'+person._id} className={classes.bigAvatar}/>
                  <Typography className={classes.tileText}>{person.name}</Typography>
                </Link>
              </ImageListItem>
          })}

</ImageList>
    </div>)
}

FollowGrid.propTypes = {
  people: PropTypes.array.isRequired
}

