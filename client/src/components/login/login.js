import React, { Component } from 'react';
import './login.css'

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

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = { username: "" , password: ""  };
    }


    login() {
        console.log(this.state.username);
        console.log(this.state.password);
    }

    register() {
        console.log("same with register");
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
                    onChange={(e) => this.setState({username: e.target.value})}
                    variant="outlined"/>

                <TextField
                    required
                    id="password"
                    className={this.props.classes.textField}
                    label="Password"
                    margin="normal"
                    type="password"
                    onChange={(e) => this.setState({password: e.target.value})}
                    variant="outlined"/>

                <div>
                    <Button
                        variant="contained"
                        color="default"
                        onClick={(e) => {this.login()} }
                        className={this.props.classes.button}> Login </Button>

                    <Button
                        variant="contained"
                        onClick={this.register}
                        color="default"> Register </Button>
                </div>
                
            </form>
        );
    };
}

export default withStyles(useStyle)(Login)

