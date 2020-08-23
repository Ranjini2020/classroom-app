import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );

}


 function Studentview(){
    const classes = useStyles();
  return (
    <div className="viewBar">
      <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    
                    <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                        
                        <HomeIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        HUGO Classroom
                    </Typography>
                    <Button component={Link} to="/course-view" color="inherit">My Courses</Button>
                    <Button component={Link} to="/" color="inherit">Sign Out</Button>
                    
                </Toolbar>
            </AppBar>
      </div>
      </div>
  )


 }
 export default Studentview
