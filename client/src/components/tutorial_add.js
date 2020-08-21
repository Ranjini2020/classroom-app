import React, { useState } from "react";
import TutorialDataService from "../services/tutorial.service";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';

const Tutorial_add = (props) => {
    const saveEntry = () => {
        if (props.course.coursename.trim() === '') {
            alert('Invalid course name');
            return;
        }
        if(props.course.id){
            console.log(props.course.id);
        } else {
            TutorialDataService.create({
                coursename: props.course.coursename.trim(),
                description: props.course.description.trim(),
                category: props.course.category.trim(),
                teacher: null
            }).then(response => {
                console.log(response);
                clearEntry();
                alert("Course Added Successfully");
            }).catch(e => console.log(e));
        }
    }

    const clearEntry = () => {
        props.setCourseState({
            id:'',
            coursename:'',
            description:'',
            category:''
        })
    }

    return (
        <Card style={{ padding: "10px", width: "50%" }}>
            <div className="col-md-12">
                <h4>Course Entry</h4>
                <form autoComplete="off">
                    <TextField onChange={(e) => props.setCourseState({...props.course, coursename: e.target.value})} id="courseName" value={props.course.coursename} name="coursename" label="Course Name" />
                    <br></br>
                    <TextField onChange={(e) => props.setCourseState({...props.course, description: e.target.value})} id="description" value={props.course.description} name="description" label="Description" />
                    <br></br>
                    <TextField onChange={(e) => props.setCourseState({...props.course, category: e.target.value})} id="category" value={props.course.category} name="category" label="Category" />
                    <br></br>
                    <br></br>
                    <Button onClick={saveEntry} variant="contained" color="primary">Save</Button>
                    <Button onClick={clearEntry} variant="contained" color="primary">Clear</Button>
                </form>
            </div>
        </Card>
    )

}

export default Tutorial_add;