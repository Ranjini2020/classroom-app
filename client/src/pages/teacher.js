import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

import TutorialsList from "../components/tutorial_list";
import TutorialsAdd from '../components/tutorial_add';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


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
function User() {
    const classes = useStyles();



    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <HomeIcon fontSize="large" />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            HUGO Classroom
                        </Typography>

                        <Button color="inherit">
                            <Link to='/addtutorial' style={{ textDecoration: 'none', color: "#fff" }}>Add-Course
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to='/' style={{ textDecoration: 'none', color: "#fff" }}>Home
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    {/* <Route exact path="/" component={TutorialsList}>

                    </Route> */}
                    <Route exact path="/addtutorial" component={TutorialsAdd}>
                    </Route>
                    <Route exact path="/addtutorial/:_id" component={TutorialsAdd}>

                    </Route>

                    {/* <Route path='/admin' component={Admin}></Route> */}
                </Switch>


            </div>




        </Router>
    )
        ;

}

export default User;
