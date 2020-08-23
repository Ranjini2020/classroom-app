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


export default class SubjectList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tutorials: [],
        };
    }
    componentDidMount() {
        this.retrieveSubject();
    }
    delete(_id) {
        let data = {
            _id: _id
        }

        TutorialDataService.subjectdelete(data)
            .then(response => {
                alert(response.data.message)
                this.retrieveSubject()
            })
            .catch(e => {
                console.log(e);
            });
    }
    retrieveSubject() {
        
        TutorialDataService.subjectlist(this.props.courseid)
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
            <div className="col-md-12">
                <h4>Lesson List</h4>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Lesson Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.tutorials.length==0?  <TableRow>
                                <h4>No Lesson Available</h4>
                                
                            </TableRow>:
                                 this.state.tutorials.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.subjectname}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.description}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Button variant="contained" onClick={event => { this.delete(row._id) }} color="secondary">Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                           }
                        </TableBody>
                    </Table>
                </TableContainer>


            </div>
        )
    }

}