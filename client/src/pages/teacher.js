import React, {useState} from 'react';

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

import api from "../util/api"

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
    const [courseState, setCourseState] = useState({
        id: null,
        coursename: "",
        description: "",
        category: ""
    })
    const [pageState, setPageState] = useState(true);

    const setAdd = () =>{
        setPageState(false);
    }

    const setView = () =>{
        setPageState(true);
    }

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

                        <Button onClick={setAdd} color="inherit">Add-Course
                            {/* <Link to='/addtutorial' style={{ textDecoration: 'none', color: "#fff" }}></Link> */}
                        </Button>
                        <Button onClick={setView} color="inherit">View
                            {/* <Link to='/tutoriallist' style={{ textDecoration: 'none', color: "#fff" }}>View</Link> */}
                        </Button>
                    </Toolbar>
                </AppBar>
                {pageState ? (<TutorialsList setCourseState={setCourseState}/>) : (<TutorialsAdd setCourseState={setCourseState} course={courseState}/>)}
            </div>
        </Router>
    );
}

export default User;
