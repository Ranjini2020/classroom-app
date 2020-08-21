import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

export default class TutorialsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tutorials: [],
        };
    }
    delete(_id) {
        let data = {
            _id: _id
        }
        TutorialDataService.deletecourse(data)
            .then(response => {
                alert(response.data.message)
                this.retrieveTutorials()
            })
            .catch(e => {
                console.log(e);
            });
    }
    componentDidMount() {

        this.retrieveTutorials();
    }
    retrieveTutorials() {
        TutorialDataService.getAll()
            .then(response => {
                this.setState({
                    tutorials: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div className="col-md-6">
                <h4>Course List</h4>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Course Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Edit</TableCell>
                                
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.tutorials.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        {row.coursename}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.description}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Button variant="contained" color="primary"><Link style={{ textDecoration: 'none', color: "#fff" }} to={`/addtutorial/${row._id}`}  >Edit</Link></Button>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Button variant="contained" onClick={event => { this.delete(row._id) }} color="secondary">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </div>
        )
    }

}