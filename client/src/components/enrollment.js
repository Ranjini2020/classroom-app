import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Card } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SubjectList from './subjectlist';
import Paper from '@material-ui/core/Paper';
import { FormControl } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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

class Enrollment extends Component {
    constructor(props) {
        super(props);
        this.saveentry = this.saveentry.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            _id: null,
            coursename: "",
            description: "",
            category: "",
            pictures: []
        };
    }
    componentDidMount() {
        if (this.props.match.params._id) {
            TutorialDataService.get(this.props.match.params._id)
                .then(response => {
                    this.setState({
                        _id: response.data._id,
                        coursename: response.data.coursename,
                        description: response.data.description,
                        category: response.data.category
                    });
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
        else {
            this.setState({
                id: '',
                coursename: '',
                description: '',
                category: ''
            });
        }

    }
    delete() {
        let data = {
            _id: this.state._id
        }
        TutorialDataService.deletecourse(data)
            .then(response => {
                alert(response.data.message)
                this.setState({
                    id: '',
                    coursename: '',
                    description: '',
                    category: ''
                });
            })
            .catch(e => {
                console.log(e);
            });
    }
    saveentry() {

        if (this.state.coursename == '') {
            alert('Invalid course name')
            return false
        }
        let data = {
            'coursename': this.state.coursename,
            'category': this.state.category,
            '_id': this.state._id,
            'description': this.state.description,
            // picture:this.state.pictures
        }



        TutorialDataService.create(data)
            .then(response => {
                let result = response;
                this.setState({
                    id: '',
                    coursename: '',
                    description: '',
                    category: ''
                });
                console.log(response)
                alert('course added success fully')
            })
            .catch(e => {
                console.log(e);
            });


    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <br></br>
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6}>
                        <Card style={{ padding: "10px" }}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <h4>Course Entry</h4>
                                </Grid>
                                <Grid item xs={6}>
                                </Grid>
                                {/* <Grid item xs={3}>
                                    {this.props.match.params._id ? <Button variant="contained" onClick={this.delete} color="secondary">
                                        Delete
                                     </Button> : null}

                                </Grid> */}
                            </Grid>


                            <form autoComplete="off">
                                <FormControl>
                                 <label>Course Code:</label>
                                 <label>{this.state._id}</label>
                                  
                                 
                                </FormControl>
                                <br></br>
                                {/* <TextField id="standard-basic" onChange={this.handleChange} value={this.state._id} name="_id" label="Course Id" /><br></br> */}
                                <TextField id="standard-basic" onChange={this.handleChange} value={this.state.coursename} name="coursename" label="Course Name" /><br></br>
                                <TextField id="standard-basic" onChange={this.handleChange} value={this.state.description} name="description" label="Description" />
                                <br></br>
                                <TextField id="standard-basic" onChange={this.handleChange} value={this.state.category} name="category" label="Category" /><br></br>
                                <br></br>

                                {/* <Button variant="contained" onClick={this.saveentry} color="primary">
                                    Save
                                </Button>  */}
                                &nbsp; <Button variant="contained" color="secondary">
                                    <Link to="/teacher" style={{ textDecoration: 'none', color: "#fff" }}>Back To List</Link>
                                </Button>
                                <br></br>
                                <br></br>
                                <hr></hr>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.props.match.params._id ? <Button variant="contained" color="primary">
                                            <Link to={`/addsubject/${this.state._id}`} style={{ textDecoration: 'none', color: "#fff" }}>Lesson Entry</Link>
                                        </Button> : null}

                                    </Grid>
                                </Grid>
                                {this.props.match.params._id ? <SubjectList courseid={this.props.match.params._id}></SubjectList> : null}

                            </form>

                        </Card>

                    </Grid>
                    <Grid item xs>

                    </Grid>
                </Grid>


            </div>

        )
    }

}
export default withStyles(useStyles)(Enrollment)