import React, { Component } from "react";
import "./login.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";

import clsx from "clsx";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import logo from "../../images/logo.PNG";
import logoMillorat from "../../images/logomillorat.PNG";
import logoTransparent from "../../images/logoTransparent.PNG";

import api, { setUsername } from "../../api/axios";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "#00A99D",
    "&:hover": {
      backgroundColor: "#00877E"
    },
    "&:active": {
      backgroundColor: "#04D1C3"
    },
    marginTop: "20px",
    width: "400px"
  }
}))(Fab);

const TextFieldStyled = withStyles(theme => ({
  root: {
    width: "400px"
  }
}))(TextField);

const useStyles1 = makeStyles(theme => ({
  error: {
    backgroundColor: red
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, onClose, variant } = props;

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <ErrorIcon className={clsx(classes.icon, classes.iconVariant)} />
          Incorrect username or password!
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
    />
  );
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "", openError: false };
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ openError: false });
  };

  login() {
    api
      .post("/login/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(resp => {
        setUsername(this.state.username);
        this.props.history.push("/teacher");
      })
      .catch(error => {
        this.setState({ openError: true });
        if (error.response) {
          console.log(error.response);
        }
      });
  }

  register() {
    api
      .post("/register/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(resp => {
        setUsername(this.state.username);
        this.props.history.push("/teacher");
      })
      .catch(error => {
        this.setState({ openError: true });
        if (error.response) {
          console.log(error.response);
        }
      });
  }

  render() {
    return (
      <form
        className={this.props.classes.container}
        noValidate
        autoComplete="off"
      >
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.openError}
          autoHideDuration={5000}
          onClose={() => {
            this.handleClose();
          }}
        >
          <MySnackbarContentWrapper
            variant="error"
            message="Incorrect username or password!"
          />
        </Snackbar>
        <Grid container direction="column" justify="center" alignItems="center">
        <div style={{ textAlign: "center", marginTop: "6%" }}>
            <img src={logoTransparent} alt={logo} />
            <img src={logoMillorat} alt={logo} />
            <img src={logo} alt={logo} />
          </div>
          <Grid item xs={12}>
            <TextFieldStyled
              required
              id="username"
              className={this.props.classes.textField}
              label="Username"
              margin="normal"
              onChange={e => this.setState({ username: e.target.value })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldStyled
              required
              id="password"
              className={this.props.classes.textField}
              label="Password"
              margin="normal"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <ColorButton
              variant="extended"
              onClick={e => {
                this.login();
              }}
              className={this.props.classes.button}
            >
              Login
            </ColorButton>
          </Grid>
          <Grid item xs={12}>
            <ColorButton
              variant="extended"
              onClick={() => {
                this.register();
              }}
              color="default"
            >
              Register
            </ColorButton>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(useStyles)(Login);
