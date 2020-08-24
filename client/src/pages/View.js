import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import CardMedia from '@material-ui/core/CardMedia';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Studentview from "../components/studentHeader";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
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
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: [],
    };
  }
  componentDidMount() {
    this.retrieveTutorials();
  }
  retrieveTutorials() {
    //alert(this.props.match.params._id)
    let data = {
      courseid: this.props.match.params._id
    }
    TutorialDataService.courseidwithsubject(data)
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
      <div >
        <Studentview />
        
        <br></br>
        <h4>Your Courses:</h4>
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
                          Category:
                                                </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                          {row.category}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                          Description:
                                                </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                          {row.description}
                        </Typography>
                        <br></br>
                        <Typography gutterBottom variant="h6" component="h6">
                          Lessons:
                                                </Typography>
                        
                        <TreeView className={classes.root} defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />} multiSelect>
                          {
                            row.subjectdetails.length == 0 ? <Typography gutterBottom variant="h8" component="h4">
                              No Lessons
                                                 </Typography> :
                              row.subjectdetails.map((subject, ele) => {
                                let i = ele + 1;
                                let j = 1 + i;
                                return <TreeItem nodeId={i} label={subject.subjectname}>
                                  <TreeItem nodeId={j} label={subject.description} />
                                </TreeItem>
                                
                              })
                          }
                          
                        </TreeView>
                        
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                </Grid>
              </Grid>
            ))
        }
      </div>
    );
  }
}
export default withStyles(useStyles)(View);