import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

const ColorButton = withStyles(theme => ({
    root: {
      color: 'white',
      backgroundColor: '#00A99D',
        '&:hover': {
            backgroundColor: '#00877E',
        },
        '&:active': {
            backgroundColor: '#04D1C3',
        },
      marginTop: "20px",
      width: "400px"
    },
  }))(Fab);

const useStyle = makeStyles(theme => ({
}));

class Main extends Component {

    student() {
        console.log("STUDENT");
        this.props.history.push("/student/login");
    }

    teacher() {
        console.log("TEACHER");
        this.props.history.push("/teacher/login");
    }

    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12} style={{marginTop: '18%'}}>
                    <ColorButton variant="extended" onClick={() => {this.teacher()}}> TEACHER </ColorButton>
                </Grid>
                <Grid item xs={12}>
                    <ColorButton variant="extended" onClick={() => {this.student()}}> STUDENT </ColorButton>
                </Grid>
            </Grid>
        );
    };
}

export default withStyles(useStyle)(Main)

