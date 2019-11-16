import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    }
  }));

class Code extends Component {

    constructor(props) {
        super(props);

        this.state = { name: "" , code: ""  };
    }


    start() {
        console.log(this.state.name);
        console.log(this.state.code);
    }

    render() {
        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
                <TextField
                    required
                    id="username"
                    className={this.props.classes.textField}
                    label="Username"
                    margin="normal"
                    onChange={(e) => this.setState({name: e.target.value})}
                    variant="outlined"/>

                <TextField
                    required
                    id="password"
                    className={this.props.classes.textField}
                    label="Password"
                    margin="normal"
                    type="number"
                    onChange={(e) => this.setState({code: e.target.value})}
                    variant="outlined"/>

                <Button
                    variant="contained"
                    color="default"
                    onClick={(e) => {this.start()} }
                    className={this.props.classes.button}> Start! </Button>

            </form>
        );
    };
}

export default withStyles(useStyle)(Code)

