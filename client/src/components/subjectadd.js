import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
}));

export default class SubjectAdd extends Component {
    constructor(props) {
        super(props);
        this.saveentry = this.saveentry.bind(this);
        this.state = {
            _id: null,
            subjectname: "",
            description: "",
            courseid: ""
        };
    }
    componentDidMount() {

        if (this.props.match.params.courseid) {
            this.setState({
                courseid: this.props.match.params.courseid
            });
        }
        else {

        }
    }
    saveentry() {
        if (this.state.subjectname == '') {
            alert('Invalid course name')
            return false
        }
        var data = {
            subjectname: this.state.subjectname,
            description: this.state.description,
            courseid: this.state.courseid
        };
        TutorialDataService.subjectcreate(data)
            .then(response => {
                let result = response;
                this.setState({
                    _id: '',
                    subjectname: '',
                    description: '',
                    courseid: ''
                });
                console.log(response)
                alert('subject added successfully')
                // console.log(response.data);
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
        return (
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={6}>
                    <br></br>
                    <Card style={{ padding: "10px", width: "50%" }}>
                        <h4>Lesson Entry</h4>
                        <form autoComplete="off">
                            <TextField id="standard-basic" onChange={this.handleChange} value={this.state.subjectname} name="subjectname" label="Subject Name" /><br></br>
                            <TextField id="standard-basic" onChange={this.handleChange} value={this.state.description} name="description" label="Description" />
                            <br></br>
                            <br></br>
                            <Button variant="contained" onClick={this.saveentry} color="primary">
                                Save
                                </Button>&nbsp;&nbsp;&nbsp;<Button variant="contained" color="secondary">
                                <Link to={`/teacher`} style={{ textDecoration: 'none', color: "#fff" }}>Back</Link>
                            </Button>
                        </form>
                    </Card>



                </Grid>
                <Grid item xs>
                </Grid>

            </Grid>
        )
    }

}