import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import api, { setUserCode } from "../../api/axios";
import logo from "../../images/logo.PNG";
import logoMillorat from "../../images/logomillorat.PNG";
import logoTransparent from "../../images/logoTransparent.PNG";
import loadingGif from "../../images/loading.gif";

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
      backgroundColor: "#00A99D"
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

class Code extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", code: "", loading: false };
  }

  next() {
    console.log(this.state.name);
    this.setState({loading: true});
    api
      .post("/addUser", { user: this.state.name })
      .then(resp => {
        console.log(resp);
        setUserCode(this.state.name);
        this.props.history.push("/student/1");
        this.setState({loading: false});
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
        }
        this.setState({loading: false});
      });
  }

  render() {
    return (
      <form
        className={this.props.classes.container}
        noValidate
        autoComplete="off"
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <div style={{ textAlign: "center", marginTop: "6%" }}>
            <img src={logoTransparent} alt={logo} />
            <img src={logoMillorat} alt={logo} />
            <img src={logo} alt={logo} />
          </div>
          <Grid item xs={12}>
            <TextFieldStyled
              required
              id="name"
              className={this.props.classes.textField}
              label="Complete Name"
              margin="normal"
              onChange={e => this.setState({ name: e.target.value })}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            {this.state.loading ? (
              <img
                src={loadingGif}
                alt="spinner"
                style={{ width: 300, marginBottom: -12 }}
              />
            ) : (
              <ColorButton
                variant="extended"
                color="default"
                onClick={e => {
                  this.next();
                }}
                className={this.props.classes.button}
              >
                Start!!
              </ColorButton>
            )}
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(useStyles)(Code);
