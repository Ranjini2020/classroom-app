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
import api from '../util/api';

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

    async retrieveTutorials() {
        var teacher = await api.getUser();
        TutorialDataService.getCoursesByTeacherId(teacher._id)
            .then(({data}) => {
                this.setState({
                    tutorials: data.classArray
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    editCourse(data) {
        this.props.setCourseState({
            id: data._id,
            coursename: data.coursename,
            description: data.description,
            category: data.category
        })
        this.props.setPageState(false);
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
                                        <Button variant="contained" color="primary" onClick={(e) => this.editCourse(row)}>Edit</Button>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Button variant="contained" onClick={e => { this.delete(row._id) }} color="secondary">Delete</Button>
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