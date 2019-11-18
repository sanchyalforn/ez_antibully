import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import logo from "../../images/logo.PNG";
import logoMillorat from "../../images/logomillorat.PNG";
import logoTransparent from "../../images/logoTransparent.PNG";

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

const useStyle = makeStyles(theme => ({}));

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
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <div style={{ textAlign: "center", marginTop: "6%" }}>
            <img src={logoTransparent} alt={logo} />
            <img src={logoMillorat} alt={logo} />
            <img src={logo} alt={logo} />
            <h1
              style={{
                textAlign: "center",
                fontSize: "50px",
                marginBottom: "5px",
                marginTop: "-5px"
              }}
            >
              Class <br /> Controller
            </h1>
          </div>
          <Grid item xs={12} >
            <ColorButton
              variant="extended"
              onClick={() => {
                this.teacher();
              }}
            >
              TEACHER
            </ColorButton>
          </Grid>
          <Grid item xs={12}>
            <ColorButton
              variant="extended"
              onClick={() => {
                this.student();
              }}
            >
              STUDENT
            </ColorButton>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyle)(Main);
