import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';



export default class TutorialsAdd extends Component {
    constructor(props) {
        super(props);
        this.saveentry = this.saveentry.bind(this);
        this.state = {
            id: null,
            coursename: "",
            description: "",
            category: ""

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
    saveentry() {
        if (this.state.coursename == '') {
            alert('Invalid course name')
            return false
        }
        var data = {
            coursename: this.state.coursename,
            description: this.state.description,
            category: this.state.category,
            _id:this.state._id
        };
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
            <Card style={{ padding: "10px", width: "50%" }}>
                <div className="col-md-12">
                    <h4>Course Entry</h4>
                    <form autoComplete="off">
                        <TextField id="standard-basic" onChange={this.handleChange} value={this.state.coursename} name="coursename" label="Course Name" /><br></br>
                        <TextField id="standard-basic" onChange={this.handleChange} value={this.state.description} name="description" label="Description" />
                        <br></br>
                        <TextField id="standard-basic" onChange={this.handleChange} value={this.state.category} name="category" label="Category" /><br></br>
                        <br></br>
                        <Button variant="contained" onClick={this.saveentry} color="primary">
                            Save
                  </Button>
                    </form>
                </div>
            </Card>
        )
    }

}