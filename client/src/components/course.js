import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardMedia from '@material-ui/core/CardMedia';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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


class Course extends Component {

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
        TutorialDataService.getCourseWithSubject()
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
        const { classes } = this.props;
        return (
            <div>

                {
                    this.state.tutorials.length == 0 ?

                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        No Courses Available
                                                </Typography>

                                </CardContent>

                            </CardActionArea>

                        </Card>

                        :
                        this.state.tutorials.map((row) => (

                            <Grid key={row._id} container spacing={3}>
                                <Grid item xs={3}>

                                </Grid>
                                <Grid item xs={6}>

                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image="/static/images/cards/contemplative-reptile.jpg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h4" component="h8">
                                                    {row.coursename}
                                                </Typography>


                                                <Typography gutterBottom variant="h6" component="h6">
                                                    Lessons:
                                                </Typography>

                                                {
                                                     row.subjectdetails.length==0?<Typography gutterBottom variant="h8" component="h4">
                                                     No Lessons
                                                 </Typography>:
                                                    row.subjectdetails.map((subject, ele) => {
                                                        let i = ele + 1;
                                                        return <Typography gutterBottom variant="h8" component="h4">
                                                            {i}. {subject.subjectname}
                                                        </Typography>
                                                    })
                                                }

                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {row.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button style={{ "marginLeft": "70%" }} variant="contained" size="small" color="primary">
                                                ADD LESSONS
                                             </Button>

                                        </CardActions>
                                    </Card>

                                </Grid>
                                <Grid item xs={3}>

                                </Grid>
                            </Grid>

                        ))
                }




            </div>
        )
    }

}
export default withStyles(useStyles)(Course)
