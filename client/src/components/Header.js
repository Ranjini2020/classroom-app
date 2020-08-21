
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import  "../styles/style.css"


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
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            HUGO Classroom
          </Typography>
          <Link to="/login" className="button" ><h4>Login</h4></Link>
          <Link to="/register" className="button"><h4>Sign-up</h4></Link>
          <Link to="/teacher" className="button"><h4>Teacher</h4></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}