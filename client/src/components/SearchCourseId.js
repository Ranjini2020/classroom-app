import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';



import axios from "axios";





// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: '2px 4px',
//         display: 'flex',
//         alignItems: 'center',
//         width: 400,
//         margin: 30,


//     },
//     input: {
//         marginLeft: theme.spacing(1),
//         flex: 1,
//     },
//     iconButton: {
//         padding: 10,
//     },
//     divider: {
//         height: 28,
//         margin: 4,
//     },
//     title: {
//         flexGrow: 5,
//     }
// }));

export default function CustomizedInputBase() {
   
    const [course, setCourse] = useState("");

    const login = (event) => {
        event.preventDefault();
        axios({
          method: "GET",
          data: {
            courseID: course,
          },
          withCredentials: true,
          url: " /courseView",
        }).then(({data}) => {
           console.log(data+"course data")
        })
        .catch(res => alert("view course"));
      };

    return (
        <Typography variant="h6" >
        Welcome
            
        <Paper component="form" >
           
        <input type="text" className="form-control" id="inputPassword3" placeholder="please enter course id" onChange={(e) => setCourse(e.target.value)} />
            <button type="submit" className="btn btn-primary" onClick={login}>Submit</button>
            <Divider  orientation="vertical" />

        </Paper>
        </Typography>
    );
}
