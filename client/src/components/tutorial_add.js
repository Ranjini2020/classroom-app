import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';

// saveentry() {
//     if (this.state.coursename == '') {
//         alert('Invalid course name')
//         return false
//     }
//     var data = {
//         coursename: this.state.coursename,
//         description: this.state.description,
//         category: this.state.category,
//         _id:this.state._id
//     };
//     TutorialDataService.create(data)
//         .then(response => {
//             this.setState({
//                 id: '',
//                 coursename: '',
//                 description: '',
//                 category: ''
//             });
//             console.log(response)
//             alert('course added successfully')
//             // console.log(response.data);
//         })
//         .catch(e => {
//             console.log(e);
//         });


// }

const tutorial_add = (props) => {
    return (
        <Card style={{ padding: "10px", width: "50%" }}>
            <div className="col-md-12">
                <h4>Course Entry</h4>
                <form autoComplete="off">
                    <TextField id="standard-basic" value={props.course.coursename} name="coursename" label="Course Name" />
                    <br></br>
                    <TextField id="standard-basic" value={props.course.description} name="description" label="Description" />
                    <br></br>
                    <TextField id="standard-basic" value={props.course.category} name="category" label="Category" />
                    <br></br>
                    <br></br>
                    <Button variant="contained" color="primary">Save</Button>
                </form>
            </div>
        </Card>
    )

}

export default tutorial_add;