import React, { Component } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Studentview from "../components/studentHeader";
import TextField from '@material-ui/core/TextField';
import TutorialDataService from "../services/tutorial.service";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));
class CourseValidation extends Component {
    constructor(props) {
        super(props);
        this.validatecourse = this.validatecourse.bind(this);
        this.state = {
            _id: null,
            coursecode: "",
            description: "",
            courseid: ""
        };
    }
    validatecourse() {
        let data={
            courseid:this.state.coursecode
        }
        TutorialDataService.courseidwithsubject(data)
        .then(response => {
            let result = response;
           this.props.history.push("/view/"+result.data[0]._id);
          //  alert('subject added successfully')
            console.log(response.data);
        })
        .catch(e => {
            alert('Invalid Course Code')
        })
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
            <div>
                <Studentview></Studentview>
                <br></br>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                    <TextField id="courseName" onChange={this.handleChange} name="coursecode" label="Course Code" />
                                </CardContent>
                                <CardActions>
                                    <Button style={{ "marginLeft": "70%" }} onClick={this.validatecourse} variant="contained" size="small" color="primary">
                                        Join Course
                                             </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withStyles(useStyles)(CourseValidation);