import React, { Component } from 'react';
import '../../styles/fonts.css'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

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
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <Button
                    variant="contained"
                    color="default"
                    onClick={() => {this.student()}}
                    className={this.props.classes.button}> STUDENT </Button>

                <Button
                    variant="contained"
                    onClick={() => {this.teacher()}}
                    color="default"> TEACHER </Button>
            </form>
        );
    };
}

export default withStyles(useStyle)(Main)

